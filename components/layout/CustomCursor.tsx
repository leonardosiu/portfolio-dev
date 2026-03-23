"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Cursor } from "@/components/motion-primitives/cursor";

function usePointerFine() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const set = () => setFine(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  return fine;
}

export default function CustomCursor() {
  const pointerFine = usePointerFine();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const checkHideCursor = () => {
      setShouldHide(document.body.classList.contains("hide-global-cursor"));
    };

    const observer = new MutationObserver(checkHideCursor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (pointerFine) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    checkHideCursor();

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [pointerFine]);

  const handlePositionChange = () => {
    if (pointerFine && !shouldHide) {
      setIsVisible(true);
    }
  };

  if (!pointerFine) return null;

  const shouldShow = isVisible && !shouldHide;

  return (
    <Cursor
      className="z-[9999]"
      transition={{
        ease: "linear",
        duration: 0,
      }}
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: {
          scale: shouldShow ? 1 : 0.3,
          opacity: shouldShow ? 1 : 0,
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
          duration: 0.05,
        }}
      />
    </Cursor>
  );
}
