'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState, useRef } from 'react'
import { redirect } from 'next/navigation'
import { User, Mail, Hash, Users, Trophy, BookOpen, ClipboardList, Printer, Download, X, Award, Star, Eye } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Progress from '@/components/ui/Progress'
import { StudentProgress } from '@/types'
import { cn, gradeColor, gradeLabel, gradeFromPercentage, formatDate } from '@/lib/utils'

function CertificateModal({ user, pct, grade, onClose }: { user: any; pct: number; grade: string; onClose: () => void }) {
  const certRef = useRef<HTMLDivElement>(null)
  const today = new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' })
  const certNumber = `MT-${new Date().getFullYear()}-${(user.studentId || user.email || '').slice(-6).toUpperCase().replace(/[^A-Z0-9]/g, '0')}`

  const handlePrint = () => window.print()

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      {/* Close + Actions bar */}
      <div className="absolute top-4 right-4 flex items-center gap-2 no-print z-[110]">
        <button onClick={handlePrint} className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition text-sm font-medium">
          <Printer size={16} /> Chop etish
        </button>
        <button onClick={onClose} className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition shadow-lg">
          <X size={20} />
        </button>
      </div>

      {/* Certificate */}
      <div ref={certRef} id="certificate-print" className="certificate-container bg-white relative overflow-hidden" style={{ width: '900px', maxWidth: '95vw', aspectRatio: '1.414', maxHeight: '90vh' }}>
        {/* Watermark pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4332' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Outer decorative border */}
        <div className="absolute inset-3 border-2 border-[#b8860b] pointer-events-none" />
        <div className="absolute inset-5 border border-[#b8860b]/40 pointer-events-none" />
        <div className="absolute inset-6 border border-[#b8860b]/20 pointer-events-none" />

        {/* Corner ornaments */}
        {['top-4 left-4', 'top-4 right-4 rotate-90', 'bottom-4 left-4 -rotate-90', 'bottom-4 right-4 rotate-180'].map((pos, i) => (
          <div key={i} className={`absolute ${pos} w-16 h-16 pointer-events-none`}>
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5 L5 25 Q5 5 25 5 Z" fill="#b8860b" opacity="0.6" />
              <path d="M5 5 L5 40 M5 5 L40 5" stroke="#b8860b" strokeWidth="1" opacity="0.3" />
              <circle cx="5" cy="5" r="3" fill="#b8860b" opacity="0.5" />
            </svg>
          </div>
        ))}

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 py-8" style={{ minHeight: '100%' }}>
          {/* Top decorative line */}
          <div className="flex items-center justify-center w-full gap-4 mb-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#b8860b]" />
            <img src="/logo.png" alt="M-ta'lim Logo" className="w-20 h-20 object-contain drop-shadow-sm" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#b8860b]" />
          </div>

          {/* University name */}
          <h2 className="text-3xl font-bold text-[#1B4332] tracking-widest mb-1 uppercase" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            M-ta'lim
          </h2>
          <p className="text-xs tracking-[0.25em] uppercase text-[#555] mb-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Mustaqil ta'lim platformasi
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
            <div className="w-2 h-2 rotate-45 bg-[#b8860b]" />
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
          </div>

          {/* SERTIFIKAT title */}
          <h1 className="text-5xl font-bold tracking-wider text-[#1a1a1a] mb-2" style={{ fontFamily: '"Times New Roman", Times, serif', letterSpacing: '0.15em' }}>
            SERTIFIKAT
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase text-[#999] mb-6" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Certificate of Completion</p>

          {/* Body text */}
          <p className="text-base text-[#555] mb-2" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Ushbu sertifikat</p>

          {/* Student name */}
          <div className="relative mb-2 mt-1">
            <h3 className="text-4xl font-bold text-[#1a1a1a] px-10" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              {user.name}
            </h3>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8860b] to-transparent" />
          </div>

          {/* Student details */}
          <div className="flex items-center gap-4 text-xs text-[#777] mb-4 mt-3" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            {user.studentId && <span>Talaba ID: <strong className="text-[#555]">{user.studentId}</strong></span>}
            {user.studentId && user.group && <span className="text-[#ccc]">|</span>}
            {user.group && <span>Guruh: <strong className="text-[#555]">{user.group}</strong></span>}
          </div>

          {/* Course completed */}
          <p className="text-base text-[#555] mb-4" style={{ fontFamily: '"Times New Roman", Times, serif' }}>ga quyidagi kursni muvaffaqiyatli tugatgani uchun berildi:</p>

          <div className="bg-[#f8f6f0] border border-[#e8e4d8] rounded-xl px-12 py-5 mb-5 w-full max-w-3xl text-center shadow-sm">
            <p className="text-2xl font-bold text-[#1B4332]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
              "Raqamli texnologiyalar va innovatsiyalar"
            </p>
            <p className="text-sm text-[#777] mt-2 italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>11 ta mavzu va yakuniy amaliy loyiha himoyasi</p>
          </div>

          {/* Score badges */}
          <div className="flex items-center gap-8 mb-6 mt-2">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-1.5" style={{ borderWidth: '3px', borderColor: '#b8860b' }}>
                <span className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{pct}%</span>
              </div>
              <p className="text-[10px] text-[#999] uppercase tracking-wider" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Umumiy ball</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-1.5" style={{ borderWidth: '3px', borderColor: '#1B4332' }}>
                <span className="text-2xl font-bold text-[#1B4332]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{grade}</span>
              </div>
              <p className="text-[10px] text-[#999] uppercase tracking-wider" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Baho</p>
            </div>
          </div>

          {/* Bottom section: date + signatures */}
          <div className="w-full max-w-2xl mt-auto">
            <div className="flex items-end justify-between">
              {/* Date */}
              <div className="text-center w-32">
                <p className="text-sm text-[#1a1a1a] font-medium mb-1" style={{ fontFamily: '"Times New Roman", Times, serif' }}>{today}</p>
                <div className="h-px w-full bg-[#333] mb-1" />
                <p className="text-[11px] text-[#999] uppercase tracking-wider mt-1.5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Sana</p>
              </div>

              {/* Seal */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#b8860b]/60 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#b8860b]/40 flex items-center justify-center">
                    <div className="text-center">
                      <Award size={22} className="text-[#b8860b] mx-auto mb-1" />
                      <p className="text-[9px] font-bold text-[#b8860b] leading-tight" style={{ fontFamily: '"Times New Roman", Times, serif', letterSpacing: '0.1em' }}>M-ta'lim<br/>MUHR</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature */}
              <div className="text-center w-32">
                <p className="text-sm text-[#1a1a1a] font-medium mb-1 italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>O'qituvchi</p>
                <div className="h-px w-full bg-[#333] mb-1" />
                <p className="text-[11px] text-[#999] uppercase tracking-wider mt-1.5" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Imzo</p>
              </div>
            </div>
          </div>

          {/* Certificate number */}
          <div className="mt-3 flex items-center gap-2">
            <p className="text-[9px] text-[#bbb] tracking-wider">Sertifikat raqami: {certNumber}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [progress, setProgress] = useState<StudentProgress | null>(null)
  const [showCert, setShowCert] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') window.location.href = '/auth/login'
  }, [status])

  useEffect(() => {
    if (!session) return
    fetch('/api/progress?courseId=raqamli-texnologiyalar')
      .then((r) => r.json())
      .then((d) => setProgress(d.progress ?? null))
  }, [session])

  if (!session) return null

  const user = session.user as any
  const pct = progress?.overallPercentage ?? 0
  const grade = gradeFromPercentage(pct)
  const completed = progress?.completedLessons ?? 0
  const allDone = completed >= 12

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold font-display text-text-primary mb-6">Mening profilim</h1>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        {/* User info */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#1B4332] flex items-center justify-center text-2xl font-bold text-white">
              {user.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="font-bold text-text-primary">{user.name}</p>
              <Badge variant={user.role === 'admin' ? 'purple' : 'blue'} className="mt-1">
                {user.role === 'admin' ? 'Admin' : 'Talaba'}
              </Badge>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2.5 text-text-secondary">
              <Mail size={14} className="text-text-muted shrink-0" />
              {user.email}
            </div>
            {user.studentId && (
              <div className="flex items-center gap-2.5 text-text-secondary">
                <Hash size={14} className="text-text-muted shrink-0" />
                {user.studentId}
              </div>
            )}
            {user.group && (
              <div className="flex items-center gap-2.5 text-text-secondary">
                <Users size={14} className="text-text-muted shrink-0" />
                {user.group}
              </div>
            )}
          </div>
        </Card>

        {/* Progress summary */}
        <Card className="p-6">
          <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Kurs progressi</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-secondary text-sm">Umumiy ball</span>
            <span className={cn('text-xl font-bold font-display', gradeColor(grade))}>{grade}</span>
          </div>
          <Progress value={pct} showLabel className="mb-4" />
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-surface-2 rounded-xl p-3 border border-border">
              <p className="text-lg font-bold text-text-primary">{completed}/12</p>
              <p className="text-xs text-text-muted">Mavzular</p>
            </div>
            <div className="bg-surface-2 rounded-xl p-3 border border-border">
              <p className="text-lg font-bold text-text-primary">{pct}%</p>
              <p className="text-xs text-text-muted">O&apos;rtacha ball</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Certificate section */}
      {allDone && (
        <div className="mb-6 relative overflow-hidden rounded-2xl border-2 border-[#b8860b]/30 bg-gradient-to-br from-[#fdfbf5] to-[#f5f0e0] p-6">
          {/* Subtle gold shimmer overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(135deg, transparent 0%, #b8860b 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s ease-in-out infinite',
          }} />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
            {/* Trophy animation */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f5d442] to-[#b8860b] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 0 25px rgba(184,134,11,0.3)' }}>
              <Trophy size={36} className="text-white drop-shadow" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                🎓 Tabriklaymiz!
              </h3>
              <p className="text-sm text-[#666] mb-1">
                Barcha <strong>12 mavzuni</strong> muvaffaqiyatli tugatdingiz. Sertifikatingiz tayyor!
              </p>
              <p className="text-xs text-[#999]">
                Umumiy ball: <strong className="text-[#1B4332]">{pct}%</strong> — Baho: <strong className="text-[#1B4332]">{grade}</strong>
              </p>
            </div>

            <button
              onClick={() => setShowCert(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#b8860b] to-[#d4a520] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all hover:scale-105 shrink-0"
              style={{ boxShadow: '0 4px 15px rgba(184,134,11,0.3)' }}
            >
              <Eye size={18} />
              Sertifikatni ko&apos;rish
            </button>
          </div>
        </div>
      )}

      {/* Certificate modal */}
      {showCert && <CertificateModal user={user} pct={pct} grade={grade} onClose={() => setShowCert(false)} />}

      {/* Lesson results */}
      {progress && progress.lessons.length > 0 && (
        <Card>
          <div className="p-6">
            <h2 className="text-base font-semibold text-text-primary font-display mb-4">Mavzu natijalari</h2>
            <div className="space-y-2">
              {progress.lessons
                .sort((a, b) => a.topicNumber - b.topicNumber)
                .map((l) => (
                  <div key={l.lessonId} className="flex items-center gap-3 p-3 bg-surface-2 rounded-xl border border-border">
                    <div className="w-7 h-7 rounded-lg bg-surface-3 border border-border flex items-center justify-center text-xs font-bold text-[#1B4332] shrink-0">
                      {l.topicNumber}
                    </div>
                    <div className="flex-1">
                      <Progress value={l.testPercentage} size="sm" />
                    </div>
                    <span className={cn('text-sm font-bold w-10 text-right', l.testPassed ? 'text-emerald-500' : 'text-red-500')}>
                      {l.testPercentage}%
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
