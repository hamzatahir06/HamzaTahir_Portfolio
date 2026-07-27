'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  CodeXml,
  Cpu,
  Library,
  Plug,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const groups = [
  {
    icon: CodeXml,
    title: 'Languages & Core',
    items: ['Python', 'Agentic AI', 'Prompt Engineering', 'JSON / Data'],
  },
  {
    icon: Cpu,
    title: 'LLM & Intelligence',
    items: ['LLM Integration', 'Reasoning Models', 'Context Design', 'Tool Use'],
  },
  {
    icon: Plug,
    title: 'APIs & Orchestration',
    items: ['Gemini API', 'Gmail API', 'Slack API', 'Automation'],
  },
  {
    icon: Wrench,
    title: 'Tools & Environment',
    items: ['VS Code', 'GitHub','Railway', 'Cursor', 'Replit'],
  },
  {
    icon: Library,
    title: 'Libraries',
    items: ['SpeechRecognition', 'gTTS', 'pyttsx3', 'pygame'],
  },
  {
    icon: Bot,
    title: 'Systems & Patterns',
    items: ['Workflow Design', 'API Chaining', 'Event Triggers', 'Notifications'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the systems I build."
          description="Organized the way I actually use them — from the language and the models to the APIs and libraries that turn ideas into running automation."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: gi * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
