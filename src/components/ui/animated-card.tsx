"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, index = 0 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 0.6, delay: index * 0.05 },
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.9,
        x: (Math.random() - 0.5) * 200, // scatter X
        y: (Math.random() - 0.5) * 200, // scatter Y
        rotate: (Math.random() - 0.5) * 45, // slight rotation
        transition: { duration: 0.4 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};
