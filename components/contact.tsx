import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-secondary">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">Have You Any Project? Please Drop a Message</p>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" />
                  <span className="text-sm sm:text-base">itstusharkumar15@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" />
                  <span className="text-sm sm:text-base">8194846705</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <span className="text-sm sm:text-base">Mohali, India</span>
                </div>
                <div className="flex gap-4 mt-4">
                  {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input placeholder="Name" className="cursor-text" />
                <Input type="email" placeholder="Email" className="cursor-text" />
                <Input placeholder="Subject" className="cursor-text" />
                <Textarea placeholder="Message" className="cursor-text" />
                <Button type="submit" className="w-full cursor-default">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

