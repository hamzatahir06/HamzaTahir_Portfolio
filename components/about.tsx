import { Clock, Rocket, ShieldCheck, Workflow } from 'lucide-react'
import { Card } from './ui/card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Section } from './section'

const principles = [
  {
    icon: Clock,
    title: 'Hours back',
    body: 'Repetitive work moves to software. Your people spend their time on the work that needs them.',
  },
  {
    icon: Workflow,
    title: 'Runs on its own',
    body: 'No one has to start it, watch it, or pass things along. It triggers, decides, and delivers.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable, not clever',
    body: 'AI goes only where judgement is needed. Everything else is plain code that behaves the same every time.',
  },
  {
    icon: Rocket,
    title: 'Shipped, not pitched',
    body: 'You get working software you can use, not a prototype and a slide deck.',
  },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="I build AI agents that handle your team’s repetitive work, so your people can focus on what needs them."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            Every team has it: the report someone rebuilds every week, the
            research that eats an afternoon, the update that sits in one tool
            until someone copies it into another. It&apos;s slow, it&apos;s easy
            to get wrong, and you pay for it in salaried hours.
          </p>
          <p>
            I find that work and build the system that does it end to end, with
            nobody babysitting it.{' '}
            <span className="text-foreground">
              Hot leads get flagged before they go cold. Sources get found and
              checked. The right person hears about it in seconds, not hours.
            </span>
          </p>
          <p>
            I judge every system by one question: what did it save you? Hours
            back, faster replies, fewer things slipping through. If it
            doesn&apos;t move one of those, it isn&apos;t finished.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <Card className="p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
