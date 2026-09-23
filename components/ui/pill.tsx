import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Small labelled chip used for skill and tech tags.
export function Pill({
  as: Tag = 'span',
  className,
  children,
}: {
  as?: 'span' | 'li'
  className?: string
  children: ReactNode
}) {
  return (
    <Tag
      className={cn(
        'rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
