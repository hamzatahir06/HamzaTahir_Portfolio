import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { Reveal } from './reveal'

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@hamzatahir06',
    href: 'https://github.com/hamzatahir06',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'in/hamzatahir',
    href: 'https://linkedin.com',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'hamzatahir.dev.ai@gmail.com',
    href: 'mailto:hamzatahir.dev.ai@gmail.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 text-center sm:p-14">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Open to opportunities
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build AI that solves real problems.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                I&apos;m looking to contribute to ambitious AI teams building
                products that create real-world value. If that&apos;s what
                you&apos;re building, I&apos;d love to talk.
              </p>

              <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-4 text-center transition-colors hover:border-primary/40"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">
                        {s.label}
                      </span>
                      <span className="block break-all text-xs text-muted-foreground">
                        {s.handle}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="/Hamza_Tahir_Resume.pdf"
                  download="Hamza_Tahir_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
