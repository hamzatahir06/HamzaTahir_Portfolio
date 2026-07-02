'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { GithubIcon } from './brand-icons'

const stat = [
  { value: '2', label: 'Production AI systems' },
  { value: '3+', label: 'APIs orchestrated' },
  { value: '100%', label: 'Built from scratch' },
]

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Agentic AI · Automation · LLM Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          I build AI systems that{' '}
          <span className="text-primary text-glow">replace manual work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I design autonomous, agentic workflows that turn LLMs and APIs into
          software that solves real business problems — built with Python,
          reasoning models, and a product engineer&apos;s mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-ring"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="https://github.com/hamzatahir06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {stat.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-semibold text-foreground sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
