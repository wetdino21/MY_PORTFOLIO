"use client";
import { cn } from "@/lib/utils"; // Assuming this is your utility function
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [looping, setLooping] = useState(true);

  const currentWord = words[currentWordIndex];
  const currentText = currentWord.text;

  const animateWord = async () => {
    if (!deleting) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(currentText.slice(0, i + 1));
        i++;
        if (i === currentText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setDeleting(true);
          }, 1000); // Delay before starting deletion
        }
      }, 100); // Type speed (100ms per character)
    } else {
      let i = currentText.length;
      const interval = setInterval(() => {
        setDisplayText(currentText.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(interval);
          setDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
        }
      }, 100); // Delete speed (100ms per character)
    }
  };

  useEffect(() => {
    animateWord();
  }, [deleting, currentWordIndex]);

  return (
    <div className={cn("inline-block", className)}>
      <motion.div
        className="text-xs sm:text-base md:text-lg lg:text-lg xl:text-2xl font-bold "
      >
        {displayText}
      </motion.div>
    </div>
  );
};