
import { AnimatedCard } from "../ui/animated-card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <AnimatedCard className="border border-border/50 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 rounded-full bg-primary/10"
              >
                <Briefcase className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning Intern</h3>
                <p className="text-foreground/70 mb-2">SPY PRO Security Solutions</p>
                <p className="text-sm text-foreground/60">6 months</p>
                <ul className="mt-4 list-disc list-inside text-foreground/70">
                  <li>Gained hands-on experience in AI and machine learning applications</li>
                  <li>Worked on security solutions implementing AI technologies</li>
                  <li>Developed and optimized machine learning models</li>
                </ul>
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  );
};
