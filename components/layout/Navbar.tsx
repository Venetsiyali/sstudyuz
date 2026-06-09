'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, LogOut, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const isAdmin = (session?.user as any)?.role === 'admin'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image 
              src="/logo.png" 
              alt="M-ta’lim" 
              width={240} 
              height={64} 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              style={{ filter: 'brightness(1.2) sepia(1) saturate(2) hue-rotate(-15deg)' }} 
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className={cn(
                'px-2 py-2 text-lg font-display transition-colors nav-link',
                pathname === '/'
                  ? 'text-accent-copper font-bold'
                  : 'text-text-secondary hover:text-accent-copper-light'
              )}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/course/raqamli-texnologiyalar"
              className={cn(
                'px-2 py-2 text-lg font-display transition-colors nav-link',
                pathname.startsWith('/course')
                  ? 'text-accent-copper font-bold'
                  : 'text-text-secondary hover:text-accent-copper-light'
              )}
            >
              Kurs
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  'px-2 py-2 text-lg font-display transition-colors flex items-center gap-1.5 nav-link',
                  pathname.startsWith('/admin')
                    ? 'text-accent-copper font-bold'
                    : 'text-text-secondary hover:text-accent-copper-light'
                )}
              >
                <LayoutDashboard size={16} />
                Admin
              </Link>
            )}
          </nav>

          {/* User menu and Theme toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-surface-3 transition-colors border border-transparent hover:border-border-light"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-text-primary text-sm font-bold shadow-inner border border-primary-light/30">
                    {session.user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-accent-copper max-w-[120px] truncate">
                    {session.user?.name}
                  </span>
                  <ChevronDown size={14} className="text-accent-copper" />
                </button>

                {dropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-surface-2 border border-border-light rounded-xl shadow-card z-20 overflow-hidden backdrop-blur-md">
                      <div className="px-4 py-3 border-b border-border">
                        <p className="text-sm font-medium text-text-primary truncate">{session.user?.name}</p>
                        <p className="text-xs text-text-muted truncate">{session.user?.email}</p>
                      </div>
                      <div className="p-1">
                        <Link
                          href="/profile"
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-accent-copper hover:bg-surface-3 rounded-lg transition-colors"
                        >
                          <User size={14} />
                          Profil
                        </Link>
                        <button
                          onClick={() => { setDropdownOpen(false); signOut({ callbackUrl: '/' }) }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
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
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="px-3 py-2 text-sm font-medium text-accent-copper hover:text-accent-copper-light transition-colors"
                >
                  Kirish
                </Link>
                <Link
                  href="/auth/register"
                  className="px-5 py-2.5 text-sm font-medium rounded-xl bg-accent-copper text-[#0f172a] border border-primary hover:bg-accent-copper-light transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] glow-copper"
                >
                  Ro‘yxatdan o‘tish
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
