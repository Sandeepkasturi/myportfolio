
import { AnimatedCard } from "../ui/animated-card";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-6">
          <AnimatedCard className="border border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
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
        </div>
      </div>
    </section>
  );
};
