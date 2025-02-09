
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedCard = ({ className, children, delay = 0 }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:shadow-xl",
        "before:absolute before:left-[-100%] before:top-0 before:h-full before:w-1/2 before:skew-x-[45deg] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:animate-[shine_0.75s]",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
        animate={{
          x: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
