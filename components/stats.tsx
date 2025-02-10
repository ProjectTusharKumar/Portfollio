import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { title: "Years of Experience", value: "1+" },
  { title: "Completed Projects", value: "3+" },
  { title: "Happy Clients", value: "5+" },
]

export default function Stats() {
  return (
    <section id="stats" className="py-12 sm:py-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm sm:text-base text-muted-foreground text-center">{stat.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

