require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  console.log('Fetching lessons from DB...');
  const { data: lessons, error: lErr } = await supabase.from('lessons').select('*').order('sort_order');
  if (lErr) throw lErr;

  console.log('Fetching questions from DB...');
  const { data: questions, error: qErr } = await supabase.from('questions').select('*').order('id');
  if (qErr) throw qErr;

  let tsContent = "import { Course, Lesson, Question } from '@/types'\n\n";
  tsContent += "export const COURSE_DATA: Course = {\n";
  tsContent += "  id: 'raqamli-texnologiyalar',\n";
  tsContent += "  title: 'Raqamli Texnologiyalar va Innovatsiyalar',\n";
  tsContent += "  slug: 'raqamli-texnologiyalar',\n";
  tsContent += "  description: 'Mustaqil o\\'rganish uchun mo\\'ljallangan ushbu kurs raqamli texnologiyalar, sun\\'iy intellekt, blokcheyn, bulut hisoblash va boshqa zamonaviy innovatsiyalar haqida chuqur bilim beradi.',\n";
  tsContent += "  shortDesc: '11 ta mavzu bo\\'yicha video darslar, ma\\'ruza matnlari, testlar va Yakuniy loyiha',\n";
  tsContent += "  thumbnail: '/images/course-thumb.jpg',\n";
  tsContent += "  totalLessons: " + lessons.length + ",\n";
  tsContent += "  totalDuration: '22 soat 30 daqiqa',\n";
  tsContent += "  lessons: [],\n";
  tsContent += "}\n\n";

  tsContent += "export const LESSONS: Lesson[] = [\n";

  for (const l of lessons) {
    tsContent += "  {\n";
    tsContent += "    id: " + JSON.stringify(l.id) + ",\n";
    tsContent += "    topicNumber: " + l.topic_number + ",\n";
    tsContent += "    title: " + JSON.stringify(l.title) + ",\n";
    tsContent += "    slug: " + JSON.stringify(l.slug) + ",\n";
    tsContent += "    description: " + JSON.stringify(l.description) + ",\n";
    tsContent += "    videoUrl: " + JSON.stringify(l.video_url || 'https://www.youtube.com/embed/dQw4w9WgXcQ') + ",\n";
    tsContent += "    videoDuration: " + JSON.stringify(l.video_duration || '1:30:00') + ",\n";
    tsContent += "    order: " + l.sort_order + ",\n";
    tsContent += "    lectureText: " + JSON.stringify(l.lecture_text) + "\n";
    tsContent += "  },\n";
  }

  tsContent += "];\n\n";
  tsContent += "export const QUESTIONS: Question[] = [\n";

  for (const q of questions) {
    tsContent += "  {\n";
    tsContent += "    id: " + JSON.stringify(q.id) + ",\n";
    tsContent += "    lessonId: " + JSON.stringify(q.lesson_id) + ",\n";
    tsContent += "    topicNumber: " + q.topic_number + ",\n";
    tsContent += "    text: " + JSON.stringify(q.text) + ",\n";
    tsContent += "    options: " + JSON.stringify(q.options) + ",\n";
    tsContent += "    correctIndex: " + q.correct_index + ",\n";
    tsContent += "    explanation: " + JSON.stringify(q.explanation || '') + "\n";
    tsContent += "  },\n";
  }

  tsContent += "];\n";

  fs.writeFileSync('./lib/data.ts', tsContent, 'utf-8');
  console.log('Successfully generated lib/data.ts with updated DB content!');
}

run().catch(console.error);
