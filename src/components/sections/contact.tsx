
import { AnimatedCard } from "../ui/animated-card";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>
        <AnimatedCard className="max-w-lg mx-auto">
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg text-foreground/80">
              I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};
