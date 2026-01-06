"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Cursor } from "@/components/motion-primitives/cursor";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check for hide-global-cursor class on body
    const checkHideCursor = () => {
      setShouldHide(document.body.classList.contains('hide-global-cursor'));
    };

    // Use MutationObserver to watch for class changes on body
    const observer = new MutationObserver(checkHideCursor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (!isMobile) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // Initial check
    checkHideCursor();

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  const handlePositionChange = () => {
    if (!isMobile && !shouldHide) {
      setIsVisible(true);
    }
  };

  if (isMobile) return null;

  const shouldShow = isVisible && !shouldHide;

  return (
    <Cursor
      className="hidden md:block z-[9999]"
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: 'easeOut',
        duration: 0.15,
      }}
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { 
          scale: shouldShow ? 1 : 0.3, 
          opacity: shouldShow ? 1 : 0 
        },
        exit: { scale: 0.3, opacity: 0 },
      }}
      onPositionChange={handlePositionChange}
    >
      <motion.div 
        className="w-6 h-6 rounded-full bg-blue-500/80 mix-blend-difference"
        animate={{
          opacity: shouldShow ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </Cursor>
  );
}

