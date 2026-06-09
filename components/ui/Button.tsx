'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-primary hover:bg-primary-dark text-white border border-accent-copper shadow-[inset_0_1px_4px_rgba(212,175,55,0.4)] hover:shadow-[0_0_15px_rgba(6,95,70,0.5)] focus:ring-primary-light',
      secondary:
        'bg-accent-copper hover:bg-accent-copper-light text-[#0f172a] border border-primary shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_0_15px_rgba(184,115,51,0.5)] focus:ring-accent-copper',
      ghost: 'hover:bg-surface-2 text-text-secondary hover:text-text-primary focus:ring-primary',
      danger:
        'bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-600/20 hover:border-red-500/40 focus:ring-red-500',
      success:
        'bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-600/20 hover:border-emerald-500/40 focus:ring-emerald-500',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-xs gap-1.5',
      md: 'px-4 py-2 text-sm gap-2',
      lg: 'px-6 py-3 text-base gap-2.5',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
