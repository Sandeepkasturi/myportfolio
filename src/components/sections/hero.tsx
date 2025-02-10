
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const gradientColors = [
    "linear-gradient(to right, #4A90E2 0%, #50C9C3 100%)",
    "linear-gradient(to right, #56ab2f, #a8e063)",
    "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
    "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="inline-block">
              <TypeAnimation
                sequence={[
                  "Sandeep Kasturi",
                  5000,
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
                }}
                repeat={Infinity}
                className="transition-all duration-300"
              />
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            <TypeAnimation
              sequence={[
                "Hello, I'm Sandeep Kasturi, the founder of SKAV TECH. Since 2020, I've been deeply immersed in AI technologies, beginning with Python, which ignited my passion for AI development. This journey led to the creation of SKAV, a no-code development platform that seamlessly integrates AI tools with the expertise of seasoned programmers. I specialize in prompt engineering to enhance SKAV's intelligence and capabilities.",
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={0}
            />
          </div>
          
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-colors"
            >
              <span>Contact Me</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
