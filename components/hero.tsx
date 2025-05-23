import { Button } from "@/components/ui/button"
import RotatingText from '@/components/framotion/rotatingtext'
import { Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-12 lg:py-24">
      <div className="container grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            We Design & Build Creative <span className="inline-block">
              <RotatingText
                 texts={['React', 'Products', 'Animations', 'Cool!']}
                 mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
                 staggerFrom={"last"}
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 exit={{ y: "-120%" }}
                 staggerDuration={0.025}
                 splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                 transition={{ type: "spring", damping: 30, stiffness: 400 }}
                 rotationInterval={2000}/> 
                 </span>
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
            Transforming ideas into digital realities with innovative solutions and cutting-edge technologies.
          </p>
          <Button asChild className="mt-6 px-6 py-3 text-lg">
            <a href="#contact" className="cursor-default">
              Get in touch
            </a>
          </Button>
        </div>
        <div className="relative order-first lg:order-last">
          <Image
            src="/images/first_img.png"
            alt="Hero image"
            className="w-full h-auto max-w-[500px] mx-auto"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:left-10 lg:translate-x-0 flex lg:flex-col gap-4 mt-8 lg:mt-0">
      <a href="https://www.linkedin.com/in/tus4ar-kumar" className="text-muted-foreground hover:text-primary transition-colors cursor-default">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/ProjectTusharKumar" className="text-muted-foreground hover:text-primary transition-colors cursor-default">
          <Github className="h-6 w-6" />
        </a>
        <a href="mailto:itstusharkumar15@gmail.com" className="text-muted-foreground hover:text-primary transition-colors cursor-default">
          <Mail className="h-6 w-6" />
        </a>
        
      </div>
      <a
        href="#stats"
        className="absolute bottom-10 right-10 text-muted-foreground hover:text-primary transition-colors cursor-default hidden lg:block"
      >
        Scroll
      </a>
    </section>
  )
}

