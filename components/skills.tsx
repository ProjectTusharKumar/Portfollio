"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import LogoWall from "@/components/framotion/skills"



interface LogoItem {
  name: string;
  imgUrl: string;
  altText: string;
}
const skills : LogoItem[] = [
  { name: "ReactJs", imgUrl: "/images/reactjs.svg", altText: "ReactJs" },
  { name: "NodeJs", imgUrl: "/images/node.svg", altText: "NodeJs" },
  { name: "MongoDB", imgUrl: "/images/mongodb.svg", altText: "MongoDB" },
  { name: "Express.js", imgUrl: "/images/express.svg", altText: "Express.js" },
  { name: "Redux", imgUrl: "/images/redux.svg", altText: "Redux" },
  { name: "TypeScript", imgUrl: "/images/typescript.svg", altText: "TypeScript" },
  { name: "HTML5", imgUrl: "/images/html.svg", altText: "HTML5" },
  { name: "BootStrap", imgUrl: "/images/bootstrap.svg", altText: "BootStrap" },
  { name: "Tailwind Css", imgUrl: "/images/tailwind.svg", altText: "Tailwind Css" },
  { name: "JavaScript", imgUrl: "/images/javascript.svg", altText: "JavaScript" },
  { name: "JWT", imgUrl: "/images/jwt.svg", altText: "JWT" },
  { name: "RESTful API", imgUrl: "/images/api.svg", altText: "RESTful API" },
  { name: "Python", imgUrl: "/images/python.svg", altText: "Python" },
  { name: "Django", imgUrl: "/images/django.svg", altText: "Django" },
  { name: "My SQL", imgUrl: "/images/mysql.svg", altText: "My SQL" },
];

const tools : LogoItem[] = [
  { name: "Git", imgUrl: "/images/git.svg", altText: "Git" },
  { name: "GitHub", imgUrl: "/images/github.svg", altText: "GitHub" },
  { name: "Postman", imgUrl: "/images/postman.svg", altText: "Postman" },
  { name: "VS Code", imgUrl: "/images/vscode.svg", altText: "VS Code" },
  { name: "NextJS", imgUrl: "/images/nextjs.svg", altText: "NextJS" },
  { name: "npm", imgUrl: "/images/npm.svg", altText: "npm" },
  { name: "ChatGPT", imgUrl: "/images/chatgpt.svg", altText: "ChatGPT" },
  { name: "AWS", imgUrl: "/images/aws.svg", altText: "AWS" },
  { name: "Hugging Face", imgUrl: "/images/huggingface.svg", altText: "Hugging Face" },
  { name: "Docker", imgUrl: "/images/docker.svg", altText: "Docker" },
];


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
        <LogoWall 
          items={showSkills ? skills : tools} 
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(16rem, 1rem + 15vmin, 22rem)"
          duration="40s"
        />
           </div>
    </section>
  )
}
