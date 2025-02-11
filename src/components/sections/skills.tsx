
import { motion } from "framer-motion";
import { Code2, Brain, Database, Globe, Terminal, Palette } from "lucide-react";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          Tech Stack & Expertise
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-foreground/10 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <skill.icon className="w-12 h-12 text-primary mb-4 transform group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-foreground/70">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
