import type { CSSProperties } from 'react'
import { Download } from 'lucide-react'
import { GithubIcon, GmailIcon, LinkedinGlyphIcon } from './brand-icons'
import { Reveal } from './reveal'
import { Section } from './section'

/* Each entry carries its platform's real brand colours: `tile` is the badge
   background, `ink` the mark on top of it, `tint` the glow the card picks up.
   Gmail's mark has its own fixed fills, so `ink` does not reach it. */
const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@hamzatahir06',
    href: 'https://github.com/hamzatahir06',
    tile: '#181717',
    ink: '#ffffff',
    tint: '#ffffff',
  },
  {
    icon: LinkedinGlyphIcon,
    label: 'LinkedIn',
    handle: 'Hamza Tahir',
    href: 'https://www.linkedin.com/in/hamza-tahir-a5b16741b/',
    tile: '#0a66c2',
    ink: '#ffffff',
    tint: '#0a66c2',
  },
  {
    icon: GmailIcon,
    label: 'Email',
    handle: 'hamzatahir.dev.ai@gmail.com',
    href: 'mailto:hamzatahir.dev.ai@gmail.com',
    tile: '#ffffff',
    ink: '#ffffff',
    tint: '#ea4335',
  },
]

export function Contact() {
  return (
    <Section id="contact">
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
                  style={{ '--brand': s.tint } as CSSProperties}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-4 text-center transition-colors hover:border-[color-mix(in_srgb,var(--brand)_45%,transparent)]"
                >
                  <span
                    style={{ backgroundColor: s.tile, color: s.ink }}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ring-inset ring-white/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_22px_-6px_var(--brand)]"
                  >
                    <s.icon className="h-6 w-6" />
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
    </Section>
  )
}
