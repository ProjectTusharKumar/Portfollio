'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send(
        "service_portfolio", // Replace with your EmailJS Service ID
        "template_57qp88v", // Replace with your EmailJS Template ID
        formData,
        "9MwHbY5CddW5KwPee" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => setSuccess("Failed to send message. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-12 sm:py-24 bg-secondary">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Have You Any Project? Please Drop a Message
            </p>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" />
                  <span className="text-sm sm:text-base">
                    itstusharkumar15@gmail.com
                  </span>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cursor-text"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cursor-text"
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="cursor-text"
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="cursor-text"
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <p className={`text-sm text-center mt-2 ${success.includes("success") ? "text-green-500" : "text-red-500"}`}>
                    {success}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
