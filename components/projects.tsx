'use client'

import { useState, type MouseEvent } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
  Inbox,
  Mic,
  ScanSearch,
} from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { cn } from '@/lib/utils'
import { ScrollStack } from './scroll-stack'
import { SectionHeading } from './section-heading'
import { Section } from './section'

// One block of the expanded breakdown. `wide` sections span both columns on
// larger screens.
interface BreakdownSection {
  title: string
  text: string
  wide?: boolean
}

interface Project {
  id: string
  name: string
  tagline: string
  icon: typeof Inbox
  workflow: string[]
  breakdown: BreakdownSection[]
  tech: string[]
  repo: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 'veritas-ai',
    name: 'Veritas AI',
    tagline:
      "For the night before the deadline, when you need real sources and don't have time to find them.",
    icon: ScanSearch,
    workflow: [
      'You give it a substantive topic',
      'It searches like you would (maybe better), but faster',
      'Skips the junk sites',
      'Hands you a report with every source linked',
    ],
    breakdown: [
      {
        title: 'The problem',
        text:
          'Finding sources you can trust takes longer than the work they are for. The first page of results is ads, forum answers and blogs that cite nothing, and much of what remains copies itself. Whether it’s an assignment due tomorrow, a briefing needed before a meeting, or a claim worth checking, forty minutes later you have twenty tabs open and one usable link.',
      },
      {
        title: 'The solution',
        text:
          'A research agent that does the digging for you. Give it a substantive topic and it plans its own searches, sets aside unreliable sites, keeps the official and credible ones, and writes up what it found with every source linked, so you can check it yourself. You watch it work in real time, and at the end you get a Word doc or PDF you can use straight away.',
      },
      {
        title: 'How it works',
        wide: true,
        text:
          'The agent judges how much research a topic needs: a narrow one gets a single search, a broad one gets several from different angles, and it stops once coverage is solid. It searches the live web through Tavily and peer-reviewed papers through OpenAlex, then ranks every result by source authority in code rather than leaving it to the model, placing official, government and academic sources first. Gemini handles the reasoning, with Groq taking over automatically if Gemini hits a limit. Each search streams from the FastAPI backend to the React interface as it happens, and finished reports are saved to your account with Supabase.',
      },
    ],
    tech: [
      'Gemini API',
      'Groq',
      'Tavily',
      'FastAPI',
      'React',
      'Supabase',
      'Python',
    ],
    repo: 'https://github.com/hamzatahir06/veritas-ai',
    demo: 'https://veritas-ai-smoky.vercel.app',
  },
  {
    id: 'inbox-intelligence',
    name: 'Inbox Intelligence',
    tagline:
      'An AI system that prioritizes leads, filters noise, and helps sales teams focus on conversations that actually matter.',
    icon: Inbox,
    breakdown: [
      {
        title: 'The problem',
        text:
          'Sales teams lose hours triaging inboxes by hand. High-intent leads sit unnoticed next to newsletters and noise, and response time slips — which directly costs revenue.',
      },
      {
        title: 'The solution',
        text:
          'A workflow automation system that reads incoming email, uses LLM reasoning to understand intent, classifies and prioritizes each message, then pushes the important ones straight to the team in Slack.',
      },
      {
        title: 'How it works',
        wide: true,
        text:
          'The Gmail API streams new messages into a Python service. Each message is passed to a reasoning model with a purpose-built prompt that scores intent and category. High-priority results are delivered instantly to the sales channel via the Slack API, so the right opportunity reaches a human in seconds — not hours.',
      },
    ],
    workflow: [
      'Email arrives',
      'AI analyzes intent',
      'Classifies',
      'Prioritizes',
      'Notifies Slack',
      'Team saves hours',
    ],
    tech: [
      'Gemini API',
      'Gmail API',
      'Slack API',
      'Python',
      'Prompt Engineering',
    ],
    repo: 'https://github.com/hamzatahir06/EmailAutomation-Agent',
  },
  {
    id: 'jarvis',
    name: 'Jarvis Voice Assistant',
    tagline:
      'A voice-first assistant that holds natural conversation and takes action on your system — hands free.',
    icon: Mic,
    breakdown: [
      {
        title: 'The problem',
        text:
          'Switching between typing, searching, and running tasks breaks focus. Getting quick answers or triggering an action often means too many manual steps.',
      },
      {
        title: 'The solution',
        text:
          'A context-aware voice assistant that listens, understands natural speech, responds conversationally, and automates system tasks — so interaction feels like talking to a capable teammate.',
      },
      {
        title: 'How it works',
        wide: true,
        text:
          'SpeechRecognition captures and transcribes audio, which is interpreted by an LLM for intent and context. Responses are generated conversationally and spoken back with gTTS and pyttsx3, while pygame handles audio playback — creating a smooth, continuous voice loop.',
      },
    ],
    workflow: [
      'You speak',
      'Speech to text',
      'AI understands',
      'Takes action',
      'Speaks back',
    ],
    tech: ['Python', 'SpeechRecognition', 'gTTS', 'pyttsx3', 'pygame', 'LLM'],
    repo: 'https://github.com/hamzatahir06/Jarvis-Virtual-Assistant',
  },
]

function WorkflowFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-primary/5 px-3 py-1.5 text-xs font-medium text-foreground">
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

// A soft velvet pill that tilts toward the cursor, with a sheen that follows
// it, and squishes when pressed.
function DemoButton({ href }: { href: string }) {
  const reduceMotion = useReducedMotion()
  const spring = { stiffness: 220, damping: 18, mass: 0.5 }
  const rotateX = useSpring(useMotionValue(0), spring)
  const rotateY = useSpring(useMotionValue(0), spring)

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    e.currentTarget.style.setProperty('--mx', `${x * 100}%`)
    e.currentTarget.style.setProperty('--my', `${y * 100}%`)
    if (reduceMotion) return
    rotateY.set((x - 0.5) * 22)
    rotateX.set((0.5 - y) * 22)
  }

  function handleLeave(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.removeProperty('--mx')
    e.currentTarget.style.removeProperty('--my')
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 500 }}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95, scaleY: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="velvet-green inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-bold tracking-wide"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-200" />
      </span>
      Live demo
      <ArrowUpRight className="h-4 w-4" />
    </motion.a>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="surface-purple group relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/50 transition-colors hover:border-primary/50"
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

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.demo && <DemoButton href={project.demo} />}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <GithubIcon className="h-4 w-4" />
            View on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {open ? 'Hide details' : 'Read the breakdown'}
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform',
                open && 'rotate-180',
              )}
            />
          </button>
        </div>

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
                {project.breakdown.map((section) => (
                  <div
                    key={section.title}
                    className={cn(section.wide && 'sm:col-span-2')}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {section.title}
                    </p>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {section.text}
                    </p>
                  </div>
                ))}
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
    <Section id="projects" divider>
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

      <div className="mt-12">
        <ScrollStack>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ScrollStack>
      </div>
    </Section>
  )
}
