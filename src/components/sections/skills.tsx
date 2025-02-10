
import { AnimatedCard } from "../ui/animated-card";
import { Code2, Brain, Database, Globe, Terminal, Palette } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Expertise in AI prompting, LLMs, and machine learning applications",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full stack development with modern frameworks and technologies",
  },
  {
    icon: Terminal,
    title: "Python Development",
    description: "Building robust applications and automation solutions",
  },
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Proficient in multiple programming languages and paradigms",
  },
  {
    icon: Database,
    title: "AI Systems",
    description: "Development and optimization of AI-powered solutions",
  },
  {
    icon: Palette,
    title: "Prompt Engineering",
    description: "Creating effective prompts for AI model interactions",
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard className="h-full group hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-foreground/70">{skill.description}</p>
                </motion.div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
