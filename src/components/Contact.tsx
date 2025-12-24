import { useState } from "react";
import { Send, Github, Linkedin, Mail, Terminal, Phone, MessageCircle } from "lucide-react";
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
      icon: MessageCircle,
      label: "Telegram Channel",
      href: "https://t.me/bek_devspace",
      username: "Bek Dev",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:bereketmuniye@gmail.com",
      username: "bereketmuniye@gmail.com",
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
              <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm h-full rounded-none font-mono relative overflow-hidden group hover:border-primary/80 hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] transition-all fancy-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated input focus glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none" />
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="space-y-1">
                    <label className="text-xs text-primary/80 ml-1 font-bold">--name</label>
                    <Input
                      name="name"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-primary/50 bg-black/80 focus:border-primary focus:ring-1 focus:ring-primary/50 rounded-none text-primary placeholder:text-primary/30 transition-all hover:border-primary/70"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-primary/80 ml-1 font-bold">--email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email..."
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-primary/50 bg-black/80 focus:border-primary focus:ring-1 focus:ring-primary/50 rounded-none text-primary placeholder:text-primary/30 transition-all hover:border-primary/70"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-primary/80 ml-1 font-bold">--message</label>
                    <Textarea
                      name="message"
                      placeholder="Type your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-primary/50 bg-black/80 focus:border-primary focus:ring-1 focus:ring-primary/50 rounded-none text-primary placeholder:text-primary/30 resize-none transition-all hover:border-primary/70"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-black hover:bg-primary/90 rounded-none font-bold mt-4 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Terminal className="h-4 w-4" />
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Terminal className="h-4 w-4 mr-2" />
                          Execute Send
                        </>
                      )}
                    </Button>
                  </motion.div>
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
              <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm rounded-none font-mono relative overflow-hidden group hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-bold mb-4 text-lg text-primary border-b border-primary/40 pb-2 group-hover:border-primary transition-colors">
                    Network Interfaces
                  </h3>
                  <div className="space-y-3">
                    {contactLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center gap-3 p-3 border border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all group/link relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          <motion.div 
                            className="w-8 h-8 flex items-center justify-center text-primary relative z-10"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-5 w-5 drop-shadow-[0_0_4px_rgba(0,255,0,0.6)]" />
                          </motion.div>
                          <div className="overflow-hidden relative z-10">
                            <p className="font-bold text-sm text-primary group-hover/link:drop-shadow-[0_0_4px_rgba(0,255,0,0.6)] transition-all">{link.label}</p>
                            <p className="text-xs text-primary/80 truncate">
                              {link.username}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary bg-black/60 backdrop-blur-sm rounded-none font-mono relative overflow-hidden group hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-bold mb-4 text-primary group-hover:drop-shadow-[0_0_4px_rgba(0,255,0,0.6)] transition-all border-b border-primary/40 pb-2 group-hover:border-primary transition-colors">Contact Information</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="tel:+251954209225"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-3 p-3 border border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all group/contact relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/contact:opacity-100 transition-opacity" />
                      <motion.div 
                        className="w-8 h-8 flex items-center justify-center text-primary relative z-10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="h-5 w-5 drop-shadow-[0_0_4px_rgba(0,255,0,0.6)]" />
                      </motion.div>
                      <div className="overflow-hidden relative z-10">
                        <p className="font-bold text-sm text-primary group-hover/contact:drop-shadow-[0_0_4px_rgba(0,255,0,0.6)] transition-all">Phone</p>
                        <p className="text-xs text-primary/80">+251 954 209 225</p>
                      </div>
                    </motion.a>
                    <div className="flex items-center gap-2 text-primary/80 group-hover:text-primary/90 transition-colors p-3 border border-primary/30">
                      <motion.span 
                        className="text-primary"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {`>`}
                      </motion.span>
                      <p>Location: <span className="text-primary font-bold">Addis Ababa, Ethiopia</span></p>
                    </div>
                    <div className="flex items-center gap-2 text-primary/80 group-hover:text-primary/90 transition-colors p-3 border border-primary/30">
                      <motion.span 
                        className="text-primary"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        {`>`}
                      </motion.span>
                      <p className="text-sm">Remote access: <span className="text-primary font-bold">Enabled</span></p>
                    </div>
                  </div>
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
