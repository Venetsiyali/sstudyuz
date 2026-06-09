import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'cyan'
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-surface-3 text-text-secondary border-border',
    blue: 'bg-primary/10 text-primary border-primary/20',
    purple: 'bg-accent-copper/10 text-accent-copper border-accent-copper/20',
    green: 'bg-emerald-600/10 text-emerald-600 border-emerald-600/20',
    yellow: 'bg-accent-copper-light/10 text-accent-copper-light border-accent-copper-light/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    cyan: 'bg-blue-600/10 text-blue-600 border-blue-600/20',
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
