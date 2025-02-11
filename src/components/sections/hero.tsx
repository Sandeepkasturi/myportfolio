
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] bg-[position:center] bg-fixed" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:100px] bg-[position:center] bg-fixed" />
      </motion.div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
              Sandeep Kasturi
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <TypeAnimation
              sequence={[
                "AI Developer & Prompt Engineer",
                2000,
                "Founder of SKAV TECH",
                2000,
                "Python Enthusiast",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl text-foreground/80"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Since 2020, I've been crafting AI solutions and developing innovative platforms 
            that bridge the gap between AI and human expertise.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get in Touch</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.a>

            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/sandeepkasturi", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/sandeepkasturi9", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:sandeepkasturi9@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
