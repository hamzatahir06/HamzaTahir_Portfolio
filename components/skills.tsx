import { Bot, CodeXml, Cpu, Library, Plug, Wrench } from 'lucide-react'
import { Card } from './ui/card'
import { Pill } from './ui/pill'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Section } from './section'

const groups = [
  {
    icon: CodeXml,
    title: 'Languages & Core',
    items: ['Python', 'Agentic AI', 'Prompt Engineering', 'JSON / Data'],
  },
  {
    icon: Cpu,
    title: 'LLM & Intelligence',
    items: [
      'LLM Integration',
      'Reasoning Models',
      'Context Design',
      'Tool Use',
    ],
  },
  {
    icon: Plug,
    title: 'APIs & Orchestration',
    items: ['Gemini API', 'Gmail API', 'Slack API', 'Automation'],
  },
  {
    icon: Wrench,
    title: 'Tools & Environment',
    items: ['VS Code', 'GitHub', 'Railway', 'Render', 'Supabase'],
  },
  {
    icon: Library,
    title: 'Libraries',
    items: ['SpeechRecognition', 'gTTS', 'pyttsx3', 'pygame'],
  },
  {
    icon: Bot,
    title: 'Systems & Patterns',
    items: [
      'Workflow Design',
      'API Chaining',
      'Event Triggers',
      'Notifications',
    ],
  },
]

export function Skills() {
  return (
    <Section id="skills" divider>
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind the systems I build."
        description="Organized the way I actually use them — from the language and the models to the APIs and libraries that turn ideas into running automation."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i}>
            <Card>
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
                  <Pill
                    as="li"
                    key={item}
                    className="group-hover:border-primary/20 group-hover:text-foreground"
                  >
                    {item}
                  </Pill>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
