"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Front-End Developer (Intern)",
    company: "MCC Computer",
    location: "Abohar, India",
    date: "May 2024 - Oct 2024",
    responsibilities: [
      "Gained hands-on experience in front-end development using React and Redux, along with back-end technologies such as Node.js, MongoDB, Express middleware, and JWT authentication to develop and maintain 3+ web applications.",
      "Focused on writing 30% more reusable and efficient code, adhering to industry standards, which reduced project completion time by 15% while improving skills in working under pressure and delivering high-quality results.",
      "Collaborated effectively with cross-functional teams of 5-10 members, providing valuable input and technical advice that enhanced project efficiency by 10%.",
      "Assumed leadership responsibilities by offering guidance and support to team members alongside the team leader, resulting in a 20% improvement in team productivity.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "TechInnovate Solutions",
    location: "Mohali, India",
    date: "Nov 2024 - Apr 2025",
    responsibilities: [
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB, improving overall system performance by 25%.",
      "Implemented automated testing strategies, reducing bug occurrences by 40% and increasing code reliability.",
      "Collaborated with UX/UI designers to implement responsive designs, enhancing user experience and increasing mobile user engagement by 35%.",
      "Mentored junior developers, conducting code reviews and knowledge sharing sessions, which improved team productivity by 20%.",
    ],
  },
  {
    title: "AI Integration Specialist",
    company: "FutureTech AI",
    location: "Chandigarh, India",
    date: "May 2025 - Present",
    responsibilities: [
      "Spearheaded the integration of AI technologies into existing web applications, resulting in a 50% increase in process automation and efficiency.",
      "Developed AI-powered chatbots and virtual assistants, improving customer satisfaction rates by 30% and reducing support ticket volume by 45%.",
      "Implemented machine learning algorithms for predictive analytics, leading to a 20% increase in sales through targeted marketing strategies.",
      "Collaborated with cross-functional teams to identify AI implementation opportunities, resulting in the successful launch of 3 innovative AI-driven products.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between flex-wrap gap-2">
                  <span>{exp.title}</span>
                  <Badge variant="secondary">{exp.date}</Badge>
                </CardTitle>
                <p className="text-lg font-semibold text-primary">
                  {exp.company}, {exp.location}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

