import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'cyan'
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-surface-3 text-text-secondary border-border',
    blue: 'bg-[#1B4332]/10 text-[#1B4332] border-[#1B4332]/20',
    purple: 'bg-[#B8860B]/10 text-[#B8860B] border-[#B8860B]/20',
    green: 'bg-[#27AE60]/10 text-[#27AE60] border-[#27AE60]/20',
    yellow: 'bg-[#D4A520]/10 text-[#D4A520] border-[#D4A520]/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    cyan: 'bg-[#1A5276]/10 text-[#1A5276] border-[#1A5276]/20',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
