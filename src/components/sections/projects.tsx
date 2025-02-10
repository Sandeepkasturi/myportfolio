
import { AnimatedCard } from "../ui/animated-card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AutoBot Code Editor",
    description: "A sophisticated code editor with AI integration",
    image: "/placeholder.svg", // You can replace with actual project screenshots
    github: "https://github.com/sandeepkasturi/autobot-code-editor",
    tags: ["AI", "Code Editor", "React"]
  },
  {
    title: "ABCDE Co",
    description: "Enterprise solution platform",
    image: "/placeholder.svg",
    github: "https://github.com/sandeepkasturi/abcde-co",
    tags: ["Enterprise", "Business", "Platform"]
  },
  {
    title: "AutoBots",
    description: "Automated testing and deployment solution",
    image: "/placeholder.svg",
    github: "https://github.com/sandeepkasturi/autobots",
    tags: ["Automation", "Testing", "DevOps"]
  },
  {
    title: "SoulCare AI",
    description: "AI-powered mental health support platform",
    image: "/placeholder.svg",
    github: "https://github.com/sandeepkasturi/soulcare-ai",
    tags: ["AI", "Healthcare", "Mental Health"]
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard className="h-full group hover:border-primary/50 transition-colors">
                <div className="aspect-video rounded-t-lg overflow-hidden bg-secondary/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
