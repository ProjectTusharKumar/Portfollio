"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const skills = [
  { name: "ReactJs", image: "" },
  { name: "NodeJs", image: "" },
  { name: "MongoDB", image: "" },
  { name: "Express.js", image: "" },
  { name: "Redux", image: "" },
  { name: "TypeScript", image: "" },
  { name: "HTML5", image: "" },
  { name: "BootStrap", image: "" },
  { name: "Taildwind Css", image: "" },
  { name: "JavaScript", image: "" },
  { name: "JWT", image: "" },
  { name: "RESTful API", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/api.svg" },
  { name: "Python", image: "" },
  { name: "Django", image: "" },
  { name: "My SQL", image: "" },
]

const tools = [
  { name: "Git", image: "" },
  { name: "GitHub", image: "" },
  { name: "Postman", image: "" },
  { name: "VS Code", image: "https://res.cloudinary.com/drjnfwe6v/image/upload/v1739255422/tushar/vscode.svg" },
  { name: "NextJS", image: "" },
  { name: "npm", image: "" },
  { name: "ChatGPT", image: "" },
  { name: "AWS", image: "" },
  { name: "Hugging Face", image: "" },
]


export default function Skills() {
  const [showSkills, setShowSkills] = useState(true)

  return (
    <section id="skills" className="py-12 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="mt-4 text-muted-foreground">What My Programming Skills Include</p>
        </div>
        <div className="flex justify-center mb-8">
          <Button variant={showSkills ? "default" : "outline"} onClick={() => setShowSkills(true)} className="mr-2">
            Skills
          </Button>
          <Button variant={!showSkills ? "default" : "outline"} onClick={() => setShowSkills(false)}>
            Tools
          </Button>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {(showSkills ? skills : tools).map((item, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Image src={item.image || "/images/placeholder"} alt={item.name} width={48} height={48} className="mb-2 w-12 h-12 object-contain" />
                <span className="text-sm sm:text-base font-medium text-center">{item.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
