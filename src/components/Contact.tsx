import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Bereketmuniye",
      username: "bereketmuniye",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bereket-muniye-039273294/",
      username: "bereketmuniye",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:bereketmuniye4@gmail.com",
      username: "bereketmuniye4@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6 border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border focus:border-accent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Links */}
            <div className="space-y-4">
              <Card className="p-6 border-border">
                <h3 className="font-semibold mb-4 text-lg">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  {contactLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{link.label}</p>
                          <p className="text-xs text-muted-foreground">
                            {link.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 border-border bg-gradient-to-br from-accent/5 to-primary/5">
                <h3 className="font-semibold mb-2">Based in</h3>
                <p className="text-muted-foreground">
                  Addis Ababa, Ethiopia
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to remote opportunities worldwide
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
