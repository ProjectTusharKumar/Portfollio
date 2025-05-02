"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Front-End Developer (Intern)",
    company: "MCC Computer",
    location: "Abohar, India",
    date: "July 2024 - NOV 2024",
    responsibilities: [
      "Gained hands-on experience in front-end development using React and Redux, along with back-end technologies such as Node.js, MongoDB, Express middleware, and JWT authentication to develop and maintain 3+ web applications.",
      "Focused on writing 30% more reusable and efficient code, adhering to industry standards, which reduced project completion time by 15% while improving skills in working under pressure and delivering high-quality results.",
      "Collaborated effectively with cross-functional teams of 5-10 members, providing valuable input and technical advice that enhanced project efficiency by 10%.",
      "Assumed leadership responsibilities by offering guidance and support to team members alongside the team leader, resulting in a 20% improvement in team productivity.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Fooz Food",
    location: "Remote, India",
    date: "Dec 2024 - Feb 2025",
    responsibilities: [
     "• Contributed to multiple web development projects, enhancing platform functionality and user experience.",
     "• Developed user-friendly interfaces using modern front-end technologies.",
     "• Improved website performance through optimization and efficient coding practices.",
     "• Followed coding best practices and maintained scalable web architecture.",
     "• Collaborated effectively with the team, showcasing strong analytical and problem-solving skills. ",
     "• Demonstrated creativity and strategic thinking in full-stack development tasks.",
    ],
  },
  {
    title: "AI & Tech Intern",
    company: "ZeusInfinity Services",
    location: "Remote, India",
    date: "Feb 2025 - Present",
    responsibilities: [
      "•Integrated PostgreSQL as primary data store: designed schemas, wrote CRUD and migration scripts, and validated end-to-end data flows.",
     " • Overhauled database architecture mid-project: rewrote data-access layer and SQL scripts to meet evolving requirements while preserving API",
      "compatibility.",
      "• Researched and benchmarked open-source AI models (e.g., GPT-2 variants, DistilBERT) to identify the best fit for our use cases.",
      "• Sourced, cleaned, and pre-processed publicly available datasets to feed into AI pipelines.",
      "•Authored three in-depth technical blog posts on model selection, dataset curation, and deployment best practices to grow the company's AI",
      "knowledge base.",
      "• Built a React-based data-upload widget and integrated it with a Python REST API backend for seamless dataset ingestion.",
      "• Developed a Python automation script to sync database metrics daily to an Excel dashboard-eliminating manual updates and reducing errors.",
      "• Demonstrated strong commitment and flexibility by working extra hours (including Sundays) to deliver bug fixes, performance optimizations, and",
      "final feature tweaks on schedule"
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className=" py-24 sm:py-32 ">
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

