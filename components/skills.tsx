"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const skills = [
  { name: "ReactJs", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/reactjs.svg" },
  { name: "NodeJs", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/node.svg" },
  { name: "MongoDB", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/mongodb.svg" },
  { name: "Express.js", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/express.svg" },
  { name: "Redux", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/.svg" },
  { name: "TypeScript", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/typescript.svg" },
  { name: "HTML5", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/html.svg" },
  { name: "BootStrap", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/bootstrap.svg" },
  { name: "Taildwind Css", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/.svg" },
  { name: "JavaScript", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/javascript.svg" },
  { name: "JWT", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/jwtt.svg" },
  { name: "RESTful API", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/api.svg" },
  { name: "Python", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/python.svg" },
  { name: "Django", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/django.svg" },
  { name: "My SQL", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/mysql.svg" },
]

const tools = [
  { name: "Git", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/git.svg" },
  { name: "GitHub", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/github.svg" },
  { name: "Postman", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/postman.svg" },
  { name: "VS Code", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/vscode.svg" },
  { name: "NextJS", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/nextjs.svg" },
  { name: "npm", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/npm.svg" },
  { name: "ChatGPT", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/chatgpt.svg" },
  { name: "AWS", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/aws.svg" },
  { name: "Hugging Face", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/huggingface.svg" },
  { name: "Docker", image: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/dockervg" },
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
