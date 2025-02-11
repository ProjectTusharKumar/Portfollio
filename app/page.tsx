import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SplashCursor from '@/components/framotion/cursor'


export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SplashCursor />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

