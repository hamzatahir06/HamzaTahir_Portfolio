import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Philosophy } from '@/components/philosophy'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { TechGraph } from '@/components/tech-graph'
import { Timeline } from '@/components/timeline'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechGraph />
        <Skills />
        <Philosophy />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
