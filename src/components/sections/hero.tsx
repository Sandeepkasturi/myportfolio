
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const gradientColors = [
    "linear-gradient(to right, #1A1F2C 0%, #403E43 100%)",
    "linear-gradient(to right, #232526, #414345)",
    "linear-gradient(90deg, #2C3E50 0%, #3498DB 100%)",
    "linear-gradient(to right, #243949 0%, #517fa4 100%)",
    "linear-gradient(90deg, hsla(221, 45%, 33%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
  ];

  const backgroundGradients = [
    "#1A1F2C", // Dark Purple
    "#403E43", // Dark Charcoal
    "#222222", // Dark Gray
    "#333333", // Dark Gray
    "#555555", // Medium Gray
    "linear-gradient(to right, #232526, #414345)",
    "linear-gradient(225deg, #2C3E50 0%, #3498DB 100%)",
    "linear-gradient(to right, #243949 0%, #517fa4 100%)",
    "#2C3E50", // Dark Blue Gray
    "linear-gradient(90deg, #1A1F2C 0%, #403E43 100%)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay filter blur-xl"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${backgroundGradients[i]} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  "Hello, I'm Sandeep Kasturi, the founder of SKAV TECH. Since 2020, I've been deeply immersed in AI technologies, beginning with Python, which ignited my passion for AI development. This journey led to the creation of SKAV, a no-code development platform that seamlessly integrates AI tools with the expertise of seasoned programmers. I specialize in prompt engineering to enhance SKAV's intelligence and capabilities.",
                ]}
                wrapper="span"
                speed={50}
                style={{ 
                  display: "inline-block",
                  backgroundImage: gradientColors[colorIndex],
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "100%",
                  backgroundClip: "text",
                  transition: "all 0.5s ease-in-out"
                }}
                repeat={0}
                className="transition-all duration-300"
              />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed"
          >
            AI Enthusiast & Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/50"
            >
              <span className="relative z-10">Contact Me</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                animate={{
                  x: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
