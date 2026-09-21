import type { ReactNode } from 'react'

// Shared layout for every page section below the hero: vertical rhythm,
// page width, and the offset that keeps anchors clear of the fixed navbar.
export function Section({
  id,
  divider = false,
  children,
}: {
  id?: string
  divider?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className="relative scroll-mt-16 py-12 sm:py-16">
      {divider && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}
