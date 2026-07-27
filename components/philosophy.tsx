import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    n: '01',
    title: 'Understand the problem',
    body: 'Before any code, I find the real friction — the task that drains time or delays a decision.',
  },
  {
    n: '02',
    title: 'Design the workflow',
    body: 'I map the flow first: what triggers it, what decisions happen, and where the value lands.',
  },
  {
    n: '03',
    title: 'Integrate intelligence',
    body: 'I add LLM reasoning exactly where judgement is needed — never more, never for show.',
  },
  {
    n: '04',
    title: 'Automate the repetition',
    body: 'The system handles the loop end to end so humans only touch what genuinely needs them.',
  },
  {
    n: '05',
    title: 'Ship usable software',
    body: 'It only counts when it runs, saves time, and someone actually relies on it.',
  },
]

export function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How I Build"
          title="A simple loop, applied with discipline."
          description="Good AI products aren't magic — they're the result of understanding a problem deeply and refusing to ship until it genuinely works."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i}>
              <div className="group relative h-full rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                <span className="font-mono text-sm text-primary">{step.n}</span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
