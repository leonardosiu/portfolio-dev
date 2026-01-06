"use client";

import { useState } from "react";
import { Cursor } from "@/components/motion-primitives/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

interface ImageHoverCursorProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export function ImageHoverCursor({ 
  children, 
  label = "View Project",
  className = ""
}: ImageHoverCursorProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    document.body.classList.add('hide-global-cursor');
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    document.body.classList.remove('hide-global-cursor');
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        springConfig={{
          bounce: 0.001,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        className="hidden md:block z-[9999]"
      >
        <motion.div
          animate={{
            width: isHovering ? 'auto' : 16,
            height: isHovering ? 32 : 16,
          }}
          className="flex items-center justify-center rounded-[24px] bg-blue-500/70 backdrop-blur-sm shadow-lg overflow-hidden"
        >
          <AnimatePresence>
            {isHovering ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 whitespace-nowrap"
              >
                <span className="text-sm font-medium text-background uppercase">{label}</span>
                <PlusIcon className="text-background w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-4 h-4 rounded-full bg-foreground/20"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </Cursor>
    </div>
  );
}

