"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="container py-24 sm:py-32 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Education</h2>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap size={40} className="text-primary" />
            <div>
              <CardTitle className="text-2xl">Bachelor of Computer Applications</CardTitle>
              <p className="text-lg font-semibold text-primary">Panjab University | Mohali, India</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Minor in Front-end Development</p>
            <p className="text-muted-foreground">Graduated: 2024</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

