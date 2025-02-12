"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const allProjects = [
  {
    title: "UserHub API",
    description: "Developed a RESTful API using Node.js and MongoDB for user management.",
    date: "August 2024 - September 2024",
  },
  {
    title: "Automated Blogging Platform",
    description: "Created a user-friendly platform where users can fill out a form to instantly publish blog posts.",
    date: "October 2024 - November 2024",
  },
  {
    title: "AI-Agent Chatbot",
    description: "Developed an advanced AI chatbot capable of answering a wide range of questions on various topics.",
    date: "December 2024 - January 2025",
  },
  {
    title: "AI-Powered Media Converter",
    description:
      "Built an AI agent that converts between image, text, and audio formats, enhancing accessibility and content creation.",
    date: "February 2025 - March 2025",
  },
]

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 1, allProjects.length))
  }

  return (
    <section id="portfolio" className="py-12 sm:py-24 bg-muted ">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Works</h2>
            <p className="mt-4 text-muted-foreground">See My Works Which Will Amaze You!</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.slice(0, visibleProjects).map((project, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <time className="text-sm text-muted-foreground">{project.date}</time>
                </CardContent>
              </Card>
            ))}
          </div>
          {visibleProjects < allProjects.length && (
            <div className="text-center mt-8">
              <Button onClick={loadMoreProjects} className="cursor-default">
                Load more work
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

