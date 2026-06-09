'use client'

import { useState } from 'react'
import { UploadCloud, FileText, CheckCircle2, AlertCircle, RefreshCw, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface ProjectSubmissionProps {
  courseId: string
  lessonId: string
  topicNumber: number
  onComplete: (passed: boolean) => void
  bestScore: number
}

export default function ProjectSubmission({ courseId, lessonId, topicNumber, onComplete, bestScore }: ProjectSubmissionProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0]
      if (selected.type === 'application/pdf' || selected.name.endsWith('.pdf') || selected.name.endsWith('.docx')) {
        setFile(selected)
        setFeedback(null)
        setStatus('idle')
      } else {
        alert("Iltimos, faqat PDF yoki DOCX formatidagi fayl yuklang.")
        e.target.value = ''
      }
    }
  }

  const handleSubmit = async () => {
    if (!file) return

    setIsUploading(true)
    setFeedback(null)
    setStatus('idle')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('courseId', courseId)
    formData.append('lessonId', lessonId)
    formData.append('topicNumber', topicNumber.toString())

    try {
      const res = await fetch('/api/project/evaluate', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Server xatosi')
      }

      setStatus(data.passed ? 'success' : 'error')
      setFeedback(data.feedback)

      if (data.passed) {
        onComplete(true)
      } else {
        onComplete(false)
      }

    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setFeedback(err.message || 'Tarmoq xatosi yuz berdi')
    } finally {
      setIsUploading(false)
    }
  }

  const passedPreviously = bestScore >= 100;

  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
          <UploadCloud size={28} />
        </div>
        <h2 className="text-2xl font-bold font-display text-text-primary">Yakuniy Loyihani Topshirish</h2>
        <p className="text-sm text-text-secondary mt-2">
          Tayyorlagan Word yoki PDF faylingizni shu yerga yuklang. Sun’iy intellekt uni tekshirib, darhol baholaydi.
        </p>
      </div>

      {passedPreviously && status === 'idle' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={20} />
          <div>
            <h4 className="font-semibold text-green-900">Siz loyihani muvaffaqiyatli topshirgansiz!</h4>
            <p className="text-sm text-green-700 mt-1">Sertifikatingiz ochilgan. Agar xohlasangiz, loyihani qayta topshirishingiz mumkin.</p>
          </div>
        </div>
      )}

      <div className="bg-surface-2 border-2 border-dashed border-border rounded-2xl p-8 text-center transition-colors hover:border-primary/40 relative">
        <input
          type="file"
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />
        
        {file ? (
          <div className="flex flex-col items-center gap-3 pointer-events-none">
            <div className="w-12 h-12 rounded-xl bg-surface-3 border border-border flex items-center justify-center text-accent-copper">
              <FileText size={24} />
            </div>
            <div>
              <p className="font-medium text-text-primary">{file.name}</p>
              <p className="text-xs text-text-muted mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 pointer-events-none">
            <div className="w-12 h-12 rounded-xl bg-surface-3 border border-border flex items-center justify-center text-text-muted">
              <UploadCloud size={24} />
            </div>
            <div>
              <p className="font-medium text-text-primary">Faylni tanlash uchun bosing</p>
              <p className="text-xs text-text-muted mt-1">Faqat .pdf va .docx formatlari qabul qilinadi</p>
            </div>
          </div>
        )}
      </div>

      {file && (
        <div className="mt-6 flex justify-center">
          <Button 
            size="lg" 
            onClick={handleSubmit} 
            disabled={isUploading}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {isUploading ? (
              <>
                <Loader2 size={18} className="animate-spin mr-2" />
                AI Tekshirmoqda...
              </>
            ) : (
              'Tekshirishga yuborish'
            )}
          </Button>
        </div>
      )}

      {status !== 'idle' && feedback && (
        <div className={cn(
          "mt-8 p-5 rounded-xl border flex gap-4",
          status === 'success' 
            ? "bg-green-50 border-green-200" 
            : "bg-red-50 border-red-200"
        )}>
          <div className="shrink-0 mt-1">
            {status === 'success' ? (
              <CheckCircle2 size={24} className="text-green-600" />
            ) : (
              <AlertCircle size={24} className="text-red-500" />
            )}
          </div>
          <div>
            <h3 className={cn(
              "text-lg font-bold font-display mb-2",
              status === 'success' ? "text-green-900" : "text-red-900"
            )}>
              {status === 'success' ? "Loyihangiz qabul qilindi!" : "Loyihangiz talabga javob bermadi"}
            </h3>
            <div className={cn(
              "text-sm leading-relaxed whitespace-pre-wrap",
              status === 'success' ? "text-green-800" : "text-red-800"
            )}>
              <strong className="block mb-1">AI xulosasi:</strong>
              {feedback}
            </div>
            
            {status === 'error' && (
              <Button 
                variant="secondary" 
                size="sm" 
                className="mt-4"
                onClick={() => {
                  setFile(null)
                  setStatus('idle')
                  setFeedback(null)
                }}
              >
                <RefreshCw size={14} className="mr-1.5" />
                Qaytadan topshirish
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
