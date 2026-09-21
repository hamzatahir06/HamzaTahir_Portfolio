import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Philosophy } from '@/components/philosophy'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { TechGraph } from '@/components/tech-graph'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechGraph />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
