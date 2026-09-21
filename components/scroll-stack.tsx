'use client'

import { Children, useEffect, useRef, useState, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'

const TOP = 96 // clears the fixed navbar (64px) with some breathing room
const PEEK = 16 // how much of each earlier card stays visible above the next
const SHRINK = 0.04 // how much a card shrinks for every card stacked on it

// Pins each child as it reaches the top of the screen so the next one slides
// over it. Once the last child arrives, the whole stack scrolls away together.
export function ScrollStack({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      {Children.toArray(children).map((child, i) => (
        <StackItem key={i} index={i}>
          {child}
        </StackItem>
      ))}
    </div>
  )
}

function StackItem({
  index,
  children,
}: {
  index: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(TOP + index * PEEK)
  const scale = useMotionValue(1)
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // A card taller than the screen (e.g. expanded) pins by its bottom edge
  // instead, so every part of it can still be read before the next one covers it.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () =>
      setTop(
        Math.min(
          TOP + index * PEEK,
          window.innerHeight - el.offsetHeight - PEEK,
        ),
      )
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [index])

  // Shrink by how far each later card has slid over this one: from touching
  // its bottom edge (0) to fully pinned in place (1).
  useMotionValueEvent(scrollY, 'change', () => {
    const el = ref.current
    if (!el || reduceMotion) return
    const { bottom } = el.getBoundingClientRect()
    let covered = 0
    for (
      let next = el.nextElementSibling as HTMLElement | null;
      next;
      next = next.nextElementSibling as HTMLElement | null
    ) {
      const pinnedTop = parseFloat(next.style.top)
      const progress =
        (bottom - next.getBoundingClientRect().top) / (bottom - pinnedTop)
      covered += Math.min(Math.max(progress, 0), 1)
    }
    scale.set(1 - covered * SHRINK)
  })

  return (
    <div ref={ref} className="sticky" style={{ top }}>
      <motion.div style={{ scale, transformOrigin: 'top' }}>
        {children}
      </motion.div>
    </div>
  )
}
