"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const GITHUB_BASE_URL = "https://raw.githubusercontent.com/ProjectTusharKumar/svg/refs/heads/main/"
const LOCAL_BASE_URL = "/images/"

// Skills and Tools Data
const skills = [
  { name: "ReactJs", image: "reactjs.png" },
  { name: "NodeJs", image: "node.png" },
  { name: "MongoDB", image: "mongodb.png" },
  { name: "Express.js", image: "express.png" },
  { name: "Redux", image: "redux.png" },
  { name: "TypeScript", image: "typescript.png" },
  { name: "HTML5", image: "html5.png" },
  { name: "BootStrap", image: "bootstrap.png" },
  { name: "Tailwind Css", image: "tailwind.png" },
  { name: "JavaScript", image: "javascript.png" },
  { name: "JWT", image: "jwt.png" },
  { name: "RESTful API", image: "restapi.png" },
  { name: "Python", image: "python.png" },
  { name: "Django", image: "django.png" },
  { name: "My SQL", image: "mysql.png" },
]

const tools = [
  { name: "Git", image: "git.png" },
  { name: "GitHub", image: "github.png" },
  { name: "Postman", image: "postman.png" },
  { name: "VS Code", image: "vscode.png" },
  { name: "NextJS", image: "nextjs.png" },
  { name: "npm", image: "npm.png" },
  { name: "ChatGPT", image: "chatgpt.png" },
  { name: "AWS", image: "aws.png" },
  { name: "Hugging Face", image: "huggingface.png" },
]

// Component
export default function Skills() {
  const [showSkills, setShowSkills] = useState(true)
  const [fallbackImages, setFallbackImages] = useState({}) // Track failed images

  // Function to determine image source with fallback
  const getImageSrc = (imageName) => {
    if (!imageName) return "/images/placeholder.png" // Default placeholder
    return fallbackImages[imageName] ? LOCAL_BASE_URL + imageName : GITHUB_BASE_URL + imageName
  }

  // Function to handle failed image loads
  const handleError = (imageName) => {
    setFallbackImages((prev) => ({ ...prev, [imageName]: true }))
  }

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
                <Image
                  src={getImageSrc(item.image)}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="mb-2 w-12 h-12 object-contain"
                  onError={() => handleError(item.image)}
                />
                <span className="text-sm sm:text-base font-medium text-center">{item.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
