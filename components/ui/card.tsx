import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// The bordered surface every content card on the page is built from. It sets
// `group`, so children can style themselves against the card's hover state.
// Pass `className` for the padding or layout a section needs.
export function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'group h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40',
        className,
      )}
    >
      {children}
    </div>
  )
}
