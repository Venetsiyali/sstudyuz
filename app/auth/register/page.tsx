'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'



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
    if (form.password.length < 6) { setError("Parol kamida 6 belgidan iborat bo‘lishi kerak"); return }
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
          <div className="inline-flex items-center justify-center mb-4">
            <Image src="/logo.png" alt="M-ta’lim" width={200} height={64} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold font-display text-text-primary">Ro‘yxatdan o‘tish</h1>
          <p className="text-sm text-text-muted mt-1">M-ta’lim — Mustaqil ta’lim platformasi</p>
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
                  className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-surface-3 transition-colors"
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
                  className="w-full px-4 py-2.5 pr-10 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-surface-3 transition-colors"
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
              Ro‘yxatdan o‘tish
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-text-muted">
            Hisobingiz bormi?{' '}
            <Link href="/auth/login" className="text-primary hover:text-[#2D6A4F] font-medium">
              Kirish
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
