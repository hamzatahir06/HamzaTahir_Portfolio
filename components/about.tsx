import { Boxes, GitBranch, Workflow, Zap } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const principles = [
  {
    icon: Zap,
    title: 'I automate the repetitive',
    body: 'If a task is manual, predictable, and draining, I see a system waiting to be built.',
  },
  {
    icon: Workflow,
    title: 'I think in workflows',
    body: 'Real value comes from connecting APIs and models into flows that run on their own.',
  },
  {
    icon: Boxes,
    title: 'I study how agents think',
    body: 'I care about reasoning, tool use, and context — not just prompts that happen to work.',
  },
  {
    icon: GitBranch,
    title: 'I ship, not tinker',
    body: 'I chase working products that solve problems, not tutorials I never finish.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="I enjoy building systems that eliminate work no one should be doing."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an early-career engineer, but I don&apos;t build like one.
              I&apos;m less interested in collecting frameworks and more
              interested in understanding how autonomous systems actually make
              decisions — how an agent reasons, when it should call a tool, and
              how to keep it reliable in the real world.
            </p>
            <p>
              Most of my time goes into a simple question:{' '}
              <span className="text-foreground">
                what work here shouldn&apos;t be done by a human?
              </span>{' '}
              Then I connect the right models and APIs into a workflow that
              handles it end to end — triaging inbox chaos, answering with voice,
              routing decisions to the people who need them.
            </p>
            <p>
              I care about outcomes. A project only matters if it saves someone
              time, reduces a delay, or removes a decision that used to require
              effort. That&apos;s the mindset I want to bring to a team building
              production AI.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i}>
                <div className="group h-full rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
