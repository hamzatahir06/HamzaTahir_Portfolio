import { Card } from './ui/card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Section } from './section'

const steps = [
  {
    n: '01',
    title: 'Find the real cost',
    body: 'Where are the hours going, and which delays are losing you money? That gets fixed first.',
  },
  {
    n: '02',
    title: 'Map the workflow',
    body: 'What starts it, what gets decided along the way, and where the result needs to land.',
  },
  {
    n: '03',
    title: 'Add AI where it pays',
    body: 'Models make the calls that need judgement. Everything else stays plain, predictable code.',
  },
  {
    n: '04',
    title: 'Automate the loop',
    body: 'The system runs end to end. People only step in when a decision truly needs them.',
  },
  {
    n: '05',
    title: 'Ship and prove it',
    body: 'It counts when it runs, saves the time it promised, and your team relies on it.',
  },
]

export function Philosophy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How I Work"
        title="From the problem to software that runs."
        description="Five steps, none skipped. Nothing ships until it works on your real data."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i}>
            <Card>
              <span className="font-mono text-sm text-primary">{step.n}</span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
