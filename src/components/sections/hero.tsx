
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  const colors = [
    "#1A1F2C", // Deep Navy
    "linear-gradient(to right, #2C3E50, #3498DB)", // Dark Blue Gradient
    "#403E43", // Dark Charcoal
    "linear-gradient(225deg, #434343 0%, #000000 100%)", // Black Gradient
    "#222222", // Rich Dark Gray
    "linear-gradient(to right, #232526, #414345)", // Gunmetal Gradient
    "#333333", // Deep Charcoal
    "linear-gradient(90deg, #3A1C71, #D76D77)", // Deep Purple to Dark Rose
    "#0F172A", // Slate Dark
    "linear-gradient(90deg, #1A1A1A, #434343)" // Dark Gray Gradient
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay filter blur-xl"
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`,
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
            Hi, I'm{" "}
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  "Sandeep Kasturi", 1000,
                  "", 200,
                  "Sandeep Kasturi", 1000,
                  "", 200,
                  "Sandeep Kasturi", 1000,
                  "", 200,
                  "Sandeep Kasturi", 1000,
                  "", 200,
                  "Sandeep Kasturi", 1000,
                  "", 200,
                ]}
                wrapper="span"
                speed={50}
                style={{ 
                  display: "inline-block",
                  backgroundImage: colors[Math.floor(Math.random() * 5)], // Only use first 5 colors
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "100%",
                  backgroundClip: "text"
                }}
                repeat={Infinity}
                className="transition-all duration-300"
                cursor={true}
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
              className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/50"
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
