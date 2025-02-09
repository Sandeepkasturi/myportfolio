
import { AnimatedCard } from "../ui/animated-card";
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

export const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedCard key={skill.title} delay={index * 0.1}>
              <skill.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-foreground/70">{skill.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
