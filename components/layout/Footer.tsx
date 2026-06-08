import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <DoppiLogo />
              <span className="text-xl font-bold font-display text-[#1B4332]">M-ta'lim</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Mustaqil ta'lim platformasi — bilim olish endi yanada qulay va samarali.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-text-muted">
              <MapPin size={14} />
              <span>Toshkent, O'zbekiston</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Platforma</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Bosh sahifa' },
                { href: '/course/raqamli-texnologiyalar', label: 'Kurs' },
                { href: '/auth/login', label: 'Kirish' },
                { href: '/auth/register', label: "Ro'yxatdan o'tish" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-[#1B4332] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@mtalim.uz"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-[#1B4332] transition-colors"
                >
                  <Mail size={14} />
                  info@mtalim.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} M-ta'lim. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-text-muted">
            Mustaqil ta'lim platformasi
          </p>
        </div>
      </div>
    </footer>
  )
}
