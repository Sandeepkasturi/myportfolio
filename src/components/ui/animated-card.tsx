
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export const AnimatedCard = ({ className, children, delay = 0, ...props }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-xl bg-white/10 p-6 backdrop-blur-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "before:absolute before:left-[-100%] before:top-0 before:h-full before:w-1/2 before:skew-x-[45deg] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:animate-[shine_0.75s]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
