
import { AnimatedCard } from "../ui/animated-card";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:sandeepkasturi9@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/sandeepkasturi",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sandeepkasturi9/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://github.com/sandeep_kasturi_",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Get In Touch
        </motion.h2>
        <AnimatedCard className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-lg text-foreground/80">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedCard>
      </div>
    </section>
  );
};
