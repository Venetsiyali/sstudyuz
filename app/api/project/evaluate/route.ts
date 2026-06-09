export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { saveTestAttempt, updateLessonProgress, getTestAttempts } from '@/lib/store'
import Groq from 'groq-sdk'
import mammoth from 'mammoth'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const userId = (session.user as any).id
    const formData = await req.formData()
    const file = formData.get('file') as File | null
    const courseId = formData.get('courseId') as string
    const lessonId = formData.get('lessonId') as string
    const topicNumber = parseInt(formData.get('topicNumber') as string)

    if (!file || !courseId || !lessonId || !topicNumber) {
      return NextResponse.json({ error: "Barcha ma'lumotlar to'liq emas" }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    let text = ''

    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      const pdfParse = require('pdf-parse')
      const pdfData = await pdfParse(buffer)
      text = pdfData.text
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.name.endsWith('.docx')) {
      const result = await mammoth.extractRawText({ buffer })
      text = result.value
    } else {
      return NextResponse.json({ error: 'Faqat PDF yoki DOCX formatlari qabul qilinadi' }, { status: 400 })
    }

    if (!text || text.trim().length < 100) {
      return NextResponse.json({ error: "Fayl ichidagi matn juda qisqa yoki bo'sh" }, { status: 400 })
    }

    // Call Groq API
    const prompt = `Sen M-ta'lim platformasidagi qattiqqo'l o'qituvchisan. 
Talaba "Aqlli, Adolatli va Barqaror Shahar: Yangi Avlod Raqamli Platformasi Konsepsiyasi" mavzusida yakuniy loyiha topshirdi.
Loyihada quyidagilar bo'lishi shart:
1. G'oya va Bulutli hisoblash infratuzilmasi (3 ta afzalligi bilan).
2. IoT, AI (algoritmik istisno mexanizmlari bilan) va Kriptovalyuta (ekologik oqibatini hisobga olgan) texnologiyalaridan qanday foydalanishi tushuntirilishi.
3. Gig work huquqi, ijtimoiy tengsizlik va shahar ekologiyasiga ta'sirining tahlili.

Quyida talaba yuklagan loyihaning matni berilgan. Uni o'qib, bahola.
Agar talaba ushbu shartlarni mantiqan qamrab olgan bo'lsa va real loyiha yozgan bo'lsa, "passed": true qaytar va uning yutuqlari va kamchiliklari haqida "feedback" yoz (O'zbek tilida, professional tarzda).
Agar matn butunlay boshqa mavzuda bo'lsa, shartlarga umuman javob bermasa yoki o'ta qisqa/sifatsiz bo'lsa, "passed": false qaytar va nima uchun yiqilganini "feedback" orqali tushuntir.

QAYTARISHING KERAK BO'LGAN FORMAT (Faqat JSON):
{
  "passed": boolean,
  "feedback": "string"
}

TALABA LOYIHASI MATNI:
` + text;

    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-70b-8192',
      temperature: 0.2,
      response_format: { type: 'json_object' }
    })

    const aiResponseStr = chatCompletion.choices[0]?.message?.content || '{}'
    let aiResult;
    try {
      aiResult = JSON.parse(aiResponseStr)
    } catch (e) {
      aiResult = { passed: false, feedback: "AI javobini o'qishda xatolik yuz berdi." }
    }

    const { passed, feedback } = aiResult
    const score = passed ? 100 : 0

    // Save attempt in database
    const attempt = await saveTestAttempt({
      userId,
      lessonId,
      topicNumber,
      answers: [], // Not applicable for file upload
      score,
      totalQuestions: 1, // Treat project as 1 question
      percentage: score,
      passed,
      completedAt: new Date().toISOString(),
      timeSpentSeconds: 0,
    })

    // Update lesson progress
    const prevAttempts = await getTestAttempts(userId, lessonId)
    const bestPercentage = Math.max(score, ...prevAttempts.map((a) => a.percentage))

    await updateLessonProgress(userId, courseId, {
      lessonId,
      topicNumber,
      testPassed: passed || prevAttempts.some((a) => a.passed),
      testScore: bestPercentage,
      testPercentage: bestPercentage,
      attempts: prevAttempts.length,
      ...(passed && { completedAt: new Date().toISOString() }),
    })

    return NextResponse.json({ passed, feedback })

  } catch (error: any) {
    console.error('Evaluate API Error:', error)
    return NextResponse.json({ error: error.message || 'Ichki server xatosi' }, { status: 500 })
  }
}
