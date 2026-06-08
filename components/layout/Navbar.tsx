'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, LogOut, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

function DoppiLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 4C10.5 4 6 7.5 6 11.5V15C6 17 7 18.5 8.5 19.5L16 24L23.5 19.5C25 18.5 26 17 26 15V11.5C26 7.5 21.5 4 16 4Z" fill="#1B4332"/>
      <path d="M16 6C11.5 6 8 8.5 8 11.5V14C8 15.5 9 16.8 10 17.5L16 21L22 17.5C23 16.8 24 15.5 24 14V11.5C24 8.5 20.5 6 16 6Z" fill="#2D6A4F"/>
      <path d="M10 10.5L16 7.5L22 10.5" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="13" x2="24" y2="13" stroke="#B8860B" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="16" cy="7" r="1.2" fill="#B8860B"/>
    </svg>
  )
}

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isAdmin = (session?.user as any)?.role === 'admin'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <DoppiLogo />
            <span className="text-xl font-bold font-display text-[#1B4332]">M-ta'lim</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname === '/'
                  ? 'bg-[#1B4332]/10 text-[#1B4332]'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
              )}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/course/raqamli-texnologiyalar"
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname.startsWith('/course')
                  ? 'bg-[#1B4332]/10 text-[#1B4332]'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
              )}
            >
              Kurs
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5',
                  pathname.startsWith('/admin')
                    ? 'bg-[#B8860B]/10 text-[#B8860B]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-2'
                )}
              >
                <LayoutDashboard size={14} />
                Admin
              </Link>
            )}
          </nav>

          {/* User menu */}
          <div className="flex items-center gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-surface-2 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center text-white text-xs font-bold">
                    {session.user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="hidden sm:block text-sm text-text-primary max-w-[120px] truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown size={14} className="text-text-muted" />
                </button>

                {dropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-surface border border-border rounded-xl shadow-card z-20 overflow-hidden">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-text-primary truncate">{session.user?.name}</p>
                        <p className="text-xs text-text-muted truncate">{session.user?.email}</p>
                      </div>
                      <div className="p-1">
                        <Link
                          href="/profile"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-lg transition-colors"
                        >
                          <User size={14} />
                          Profil
                        </Link>
                        <button
                          onClick={() => { setDropdownOpen(false); signOut({ callbackUrl: '/' }) }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <LogOut size={14} />
                          Chiqish
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-2 rounded-xl transition-colors"
                >
                  Kirish
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white transition-all"
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
