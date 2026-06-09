import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'



export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="M-ta’lim" width={150} height={48} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Mustaqil ta’lim platformasi — bilim olish endi yanada qulay va samarali.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-text-muted">
              <MapPin size={14} />
              <span>Toshkent, O‘zbekiston</span>
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
                { href: '/auth/register', label: "Ro‘yxatdan o‘tish" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
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
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
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
            © {new Date().getFullYear()} M-ta’lim. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-text-muted">
            Mustaqil ta’lim platformasi
          </p>
        </div>
      </div>
    </footer>
  )
}
