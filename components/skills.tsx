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
  { name: "ReactJs", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/reactjs.svg" , altText: "ReactJs"},
  { name: "NodeJs", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/node.svg" , altText: "NodeJs"},
  { name: "MongoDB", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/mongodb.svg" , altText: "MongoDB"},
  { name: "Express.js", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/express.svg" , altText: "Express.js"},
  { name: "Redux", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/redux.svg" , altText: "Redux"},
  { name: "TypeScript", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/typescript.svg", altText: "TypeScript" },
  { name: "HTML5", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/html.svg", altText: "HTML5" },
  { name: "BootStrap", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/bootstrap.svg", altText: "BootStrap" },
  { name: "Tailwind Css", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/tailwind.svg", altText: "Tailwind Css" },
  { name: "JavaScript", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/javascript.svg", altText: "JavaScript" },
  { name: "JWT", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/jwt.svg", altText: "JWT" },
  { name: "RESTful API", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/api.svg", altText: "RESTful API" },
  { name: "Python", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/python.svg", altText: "Python" },
  { name: "Django", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/django.svg", altText: "Django" },
  { name: "My SQL", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/mysql.svg", altText: "My SQL" },
]

const tools : LogoItem[] = [
  { name: "Git", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/git.svg", altText: "Git" },
  { name: "GitHub", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/github.svg", altText: "GitHub" },
  { name: "Postman", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/postman.svg", altText: "Postman" },
  { name: "VS Code", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/vscode.svg" , altText: "VS Code"},
  { name: "NextJS", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/nextjs.svg" , altText: "NextJS"},
  { name: "npm", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/npm.svg" , altText: "npm"},
  { name: "ChatGPT", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/chatgpt.svg" , altText: "ChatGPT"},
  { name: "AWS", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/aws.svg" , altText: "AWS"},
  { name: "Hugging Face", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/huggingface.svg", altText: "Hugging Face" },
  { name: "Docker", imgUrl: "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/docker.svg", altText: "Docker" },
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
