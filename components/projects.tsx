'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Inbox, Mic } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

interface Project {
  id: string
  name: string
  tagline: string
  icon: typeof Inbox
  problem: string
  solution: string
  workflow: string[]
  how: string
  tech: string[]
}

const projects: Project[] = [
  {
    id: 'inbox-intelligence',
    name: 'Inbox Intelligence',
    tagline:
      'An AI system that prioritizes leads, filters noise, and helps sales teams focus on conversations that actually matter.',
    icon: Inbox,
    problem:
      'Sales teams lose hours triaging inboxes by hand. High-intent leads sit unnoticed next to newsletters and noise, and response time slips — which directly costs revenue.',
    solution:
      'A workflow automation system that reads incoming email, uses LLM reasoning to understand intent, classifies and prioritizes each message, then pushes the important ones straight to the team in Slack.',
    workflow: [
      'Email arrives',
      'AI analyzes intent',
      'Classifies',
      'Prioritizes',
      'Notifies Slack',
      'Team saves hours',
    ],
    how: 'The Gmail API streams new messages into a Python service. Each message is passed to a reasoning model with a purpose-built prompt that scores intent and category. High-priority results are delivered instantly to the sales channel via the Slack API, so the right opportunity reaches a human in seconds — not hours.',
    tech: [
      'Gemini API',
      'Gmail API',
      'Slack API',
      'Python',
      'Prompt Engineering',
    ],
  },
  {
    id: 'jarvis',
    name: 'Jarvis Voice Assistant',
    tagline:
      'A voice-first assistant that holds natural conversation and takes action on your system — hands free.',
    icon: Mic,
    problem:
      'Switching between typing, searching, and running tasks breaks focus. Getting quick answers or triggering an action often means too many manual steps.',
    solution:
      'A context-aware voice assistant that listens, understands natural speech, responds conversationally, and automates system tasks — so interaction feels like talking to a capable teammate.',
    workflow: [
      'You speak',
      'Speech to text',
      'AI understands',
      'Takes action',
      'Speaks back',
    ],
    how: 'SpeechRecognition captures and transcribes audio, which is interpreted by an LLM for intent and context. Responses are generated conversationally and spoken back with gTTS and pyttsx3, while pygame handles audio playback — creating a smooth, continuous voice loop.',
    tech: ['Python', 'SpeechRecognition', 'gTTS', 'pyttsx3', 'pygame', 'LLM'],
  },
]

function WorkflowFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-primary" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 transition-colors hover:border-primary/40"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Workflow System
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
            The workflow
          </p>
          <WorkflowFlow steps={project.workflow} />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          {open ? 'Hide details' : 'Read the breakdown'}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              open && 'rotate-180',
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    The problem
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    The solution
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    How it works
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.how}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Work"
            title="Systems that do the work, not demos that describe it."
            description="Each project started with a real problem and ended with software that runs on its own. Expand any card to see the reasoning behind it."
          />
          <a
            href="https://github.com/hamzatahir06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            All repositories
          </a>
        </div>

        <div className="mt-12 grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
