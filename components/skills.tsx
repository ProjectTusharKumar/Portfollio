"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const skills = [
  { name: "ReactJs", image: "/images/reactjs.svg" },
  { name: "NodeJs", image: "/images/node.svg" },
  { name: "MongoDB", image: "/images/mongodb.svg" },
  { name: "Express.js", image: "/images/express.svg" },
  { name: "Redux", image: "/images/redux.svg" },
  { name: "TypeScript", image: "/images/typescript.svg" },
  { name: "HTML5", image: "/images/html.svg" },
  { name: "BootStrap", image: "/images/bootstrap.svg" },
  { name: "Taildwind Css", image: "/images/tailwind.svg" },
  { name: "JavaScript", image: "/images/javascript.svg" },
  { name: "JWT", image: "/images/jwt.svg" },
  { name: "RESTful API", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/api.svg" },
  { name: "Python", image: "/images/python.svg" },
  { name: "Django", image: "/images/django.svg" },
  { name: "My SQL", image: "/images/mysql.svg" },
]

const tools = [
  { name: "Git", image: "/images/git.svg" },
  { name: "GitHub", image: "/images/github.svg" },
  { name: "Postman", image: "/images/postman.svg" },
  { name: "VS Code", image: "/images/vscode.svg" },
  { name: "NextJS", image: "/images/nextjs.svg" },
  { name: "npm", image: "/images/npm.svg" },
  { name: "ChatGPT", image: "/images/chatgpt.svg" },
  { name: "AWS", image: "/images/aws.svg" },
  { name: "Hugging Face", image: "/images/huggingface.svg" },
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
                <Image src={item.image || "/images/placeholder.svg"} alt={item.name} width={48} height={48} className="mb-2 w-12 h-12 object-contain" />
                <span className="text-sm sm:text-base font-medium text-center">{item.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
