'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  BrainCircuit,
  Network,
  Terminal,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const nodes = [
  {
    icon: Terminal,
    title: 'Python',
    role: 'The foundation',
    detail:
      'Where every system starts — the language I use to wire logic, models, and services together.',
  },
  {
    icon: BrainCircuit,
    title: 'LLMs',
    role: 'The reasoning layer',
    detail:
      'Models interpret messy, human input and make decisions that used to require manual judgement.',
  },
  {
    icon: Network,
    title: 'API Orchestration',
    role: 'The connective tissue',
    detail:
      'Gmail, Slack, and Gemini are chained into a single flow so data moves without a human in the loop.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    role: 'The engine',
    detail:
      'Triggers, classification, and routing run continuously — the system works while no one is watching.',
  },
  {
    icon: TrendingUp,
    title: 'Business Value',
    role: 'The outcome',
    detail:
      'Faster responses, less manual effort, and teams focused on work that actually matters.',
  },
]

export function TechGraph() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it connects"
          title="Every technology has a job in the chain."
          description="I don't collect tools — I connect them. Hover or tap each layer to see how raw code becomes real business value."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Flow */}
          <div className="flex flex-col items-stretch gap-2">
            {nodes.map((node, i) => (
              <div key={node.title}>
                <motion.button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={cn(
                    'flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all',
                    active === i
                      ? 'border-primary/50 bg-card glow-ring'
                      : 'border-border bg-card/40 hover:border-primary/30',
                  )}
                >
                  <span
                    className={cn(
                      'grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors',
                      active === i
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-primary',
                    )}
                  >
                    <node.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {node.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {node.role}
                    </span>
                  </span>
                </motion.button>
                {i < nodes.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown
                      className={cn(
                        'h-4 w-4 transition-colors',
                        active === i || active === i + 1
                          ? 'text-primary'
                          : 'text-muted-foreground/40',
                      )}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-primary">
                Step {active + 1} / {nodes.length}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                {nodes[active].title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {nodes[active].role}
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {nodes[active].detail}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
