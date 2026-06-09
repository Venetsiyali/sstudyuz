'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'



export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    setLoading(false)

    if (res?.error) {
      setError("Email yoki parol noto‘g'ri")
    } else {
      router.push('/course/raqamli-texnologiyalar')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-grid">


      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image src="/logo.png" alt="M-ta’lim" width={200} height={64} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-2xl font-bold font-display text-text-primary">Kirish</h1>
          <p className="text-sm text-text-muted mt-1">M-ta’lim platformasiga xush kelibsiz</p>
        </div>

        {/* Demo hint */}
        <div className="mb-5 p-3.5 bg-primary/5 border border-primary/20 rounded-xl text-xs text-text-secondary space-y-1">
          <p className="font-semibold text-primary">Demo hisoblar:</p>
          <p>Admin: <span className="text-text-primary">admin@mtalim.uz / admin123</span></p>
          <p>Talaba: <span className="text-text-primary">talaba@mtalim.uz / student123</span></p>
        </div>

        {/* Form */}
        <div className="bg-surface border border-border rounded-2xl p-6 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@mtalim.uz"
                required
                className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-surface-3 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
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
              Kirish
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-text-muted">
            Hisobingiz yo‘qmi?{' '}
            <Link href="/auth/register" className="text-primary hover:text-[#2D6A4F] font-medium">
              Ro‘yxatdan o‘ting
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
