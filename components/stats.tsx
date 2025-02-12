"use client";

import Card from "@/components/uiverse/card";

const stats = [
  { title: "Years of Experience", value: "1+",dis:"Year" },
  { title: "Completed Projects", value: "3+", dis:"Project" },
  { title: "Happy Clients", value: "5+",dis:"Client" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 sm:py-24 bg-muted">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card
              key={index}
              backContent={
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm sm:text-base text-muted-foreground text-center">{stat.dis}</div>
                </div>
              }
              frontBg="front-background-class"
              backBg="back-background-class"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <div className="text-3xl sm:text-4xl font-bold">{stat.title}</div>
                <div className="text-sm sm:text-base text-muted-foreground text-center">Hover Me</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

