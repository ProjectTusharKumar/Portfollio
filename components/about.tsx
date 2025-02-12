"use client";

import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/second_img.png"
              alt="About me"
              className="w-full h-auto rounded-lg max-w-[400px] mx-auto"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About me</h2>
            <p className="text-muted-foreground">
              Front-End developer skilled in React, Redux, Node.js, and MongoDB. Proficient in JWT authentication,
              middleware, and writing efficient code. Strong collaborator, delivering quality solutions under pressure.
              Passionate about innovation.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button className="cursor-default">
              <a href="#contact" className="cursor-default">
                Hire me
                </a></Button>
              <Button
                variant="outline"
                className="cursor-default"
                onClick={() => window.open("https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/Tushar_Resume.pdf", "_blank")}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

