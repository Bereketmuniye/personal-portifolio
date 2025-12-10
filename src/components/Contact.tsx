import { useState } from "react";
import { Send, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 font-mono">
              <span>$</span>
              <h2>./send_message.sh</h2>
            </div>
            <div className="w-full h-px bg-primary/30" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 border-primary bg-black/50 h-full rounded-none font-mono">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-primary/70 ml-1">--name</label>
                    <Input
                      name="name"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-primary/50 bg-black focus:border-primary focus:ring-0 rounded-none text-primary placeholder:text-primary/30"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-primary/70 ml-1">--email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email..."
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-primary/50 bg-black focus:border-primary focus:ring-0 rounded-none text-primary placeholder:text-primary/30"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-primary/70 ml-1">--message</label>
                    <Textarea
                      name="message"
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-primary/50 bg-black focus:border-primary focus:ring-0 rounded-none text-primary placeholder:text-primary/30 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary/90 rounded-none font-bold mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Terminal className="h-4 w-4 mr-2" />
                        Execute Send
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <Card className="p-6 border-primary bg-black/50 rounded-none font-mono">
                <h3 className="font-bold mb-4 text-lg text-primary border-b border-primary/30 pb-2">
                  Network Interfaces
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
                        className="flex items-center gap-3 p-3 border border-primary/30 hover:bg-primary/10 transition-all group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="font-bold text-sm text-primary">{link.label}</p>
                          <p className="text-xs text-primary/70 truncate">
                            {link.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>

              <Card className="p-6 border-primary bg-black/50 rounded-none font-mono">
                <h3 className="font-bold mb-2 text-primary">Location Data</h3>
                <div className="flex items-center gap-2 text-primary/70">
                  <span className="text-primary">{`>`}</span>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
                <div className="flex items-center gap-2 text-primary/70 mt-1">
                  <span className="text-primary">{`>`}</span>
                  <p className="text-sm">Remote access: Enabled</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
