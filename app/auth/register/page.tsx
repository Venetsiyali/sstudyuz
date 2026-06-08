'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'

function DoppiLogo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
      <path d="M16 4C10.5 4 6 7.5 6 11.5V15C6 17 7 18.5 8.5 19.5L16 24L23.5 19.5C25 18.5 26 17 26 15V11.5C26 7.5 21.5 4 16 4Z" fill="#FAFAF5"/>
      <path d="M16 6C11.5 6 8 8.5 8 11.5V14C8 15.5 9 16.8 10 17.5L16 21L22 17.5C23 16.8 24 15.5 24 14V11.5C24 8.5 20.5 6 16 6Z" fill="#2D6A4F"/>
      <path d="M10 10.5L16 7.5L22 10.5" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="24" y2="13" stroke="#B8860B" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="16" cy="7" r="1.2" fill="#B8860B"/>
    </svg>
  )
}

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '', studentId: '', group: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) { setError("Parol kamida 6 belgidan iborat bo'lishi kerak"); return }
    setLoading(true)

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await res.json()
    setLoading(false)

    if (!res.ok) {
      setError(data.error ?? 'Xatolik yuz berdi')
    } else {
      router.push('/auth/login?registered=1')
    }
  }

  const fields = [
    { id: 'name', label: 'To\'liq ism', placeholder: 'Ism Familiya', type: 'text', required: true },
    { id: 'email', label: 'Email', placeholder: 'email@mtalim.uz', type: 'email', required: true },
    { id: 'studentId', label: 'Talaba ID', placeholder: 'TATU-2024-001', type: 'text', required: false },
    { id: 'group', label: 'Guruh', placeholder: 'MT-21', type: 'text', required: false },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-grid">


      <div className="relative w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1B4332] shadow-md mb-4">
            <DoppiLogo />
          </div>
          <h1 className="text-2xl font-bold font-display text-text-primary">Ro'yxatdan o'tish</h1>
          <p className="text-sm text-text-muted mt-1">M-ta'lim — Mustaqil ta'lim platformasi</p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-6 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.map((f) => (
              <div key={f.id}>
                <label className="block text-sm font-medium text-text-secondary mb-1.5">
                  {f.label} {f.required && <span className="text-red-400">*</span>}
                </label>
                <input
                  type={f.type}
                  value={(form as any)[f.id]}
                  onChange={set(f.id)}
                  placeholder={f.placeholder}
                  required={f.required}
                  className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-[#1B4332]/50 focus:bg-surface-3 transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Parol <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={set('password')}
                  placeholder="Kamida 6 belgi"
                  required
                  className="w-full px-4 py-2.5 pr-10 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-[#1B4332]/50 focus:bg-surface-3 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={14} />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" loading={loading}>
              Ro'yxatdan o'tish
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-text-muted">
            Hisobingiz bormi?{' '}
            <Link href="/auth/login" className="text-[#1B4332] hover:text-[#2D6A4F] font-medium">
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
