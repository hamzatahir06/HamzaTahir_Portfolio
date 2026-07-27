import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const milestones = [
  {
    phase: 'The start',
    title: 'Began with Python',
    body: 'Learned to think in logic and structure — the foundation everything else builds on.',
  },
  {
    phase: 'Going further',
    title: 'Learning APIs',
    body: 'Discovered that the real power is connecting services, not building everything alone.',
  },
  {
    phase: 'The shift',
    title: 'Building AI agents',
    body: 'Started designing systems that reason and act, not scripts that only follow rules.',
  },
  {
    phase: 'Shipping',
    title: 'Deploying real projects',
    body: 'Turned ideas into working automation — Inbox Intelligence and Jarvis among them.',
  },
  {
    phase: 'Now',
    title: 'Looking to build production systems',
    body: 'Ready to bring this mindset to a team building ambitious AI products at scale.',
  },
]

export function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="From first script to shipping AI systems."
        />

        <ol className="relative mt-12 max-w-2xl border-l border-border pl-8">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+1px)] top-1 grid h-4 w-4 -translate-x-1/2 place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-primary glow-ring" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {m.phase}
              </span>
              <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">
                {m.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
