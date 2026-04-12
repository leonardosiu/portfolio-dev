"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [isInteractiveHover, setIsInteractiveHover] = useState(false);
  const shouldHideRef = useRef(shouldHide);

  shouldHideRef.current = shouldHide;

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
      setIsInteractiveHover(false);
    };

    const isInteractiveElement = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(
        target.closest(
          'a, button, [role="button"], input, select, textarea, summary, label, [data-cursor-link="true"]'
        )
      );
    };

    const handleMouseOver = (event: MouseEvent) => {
      const next = isInteractiveElement(event.target);
      setIsInteractiveHover((prev) => (prev === next ? prev : next));
    };

    if (pointerFine) {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseover", handleMouseOver, { passive: true });
    }

    checkHideCursor();

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      observer.disconnect();
    };
  }, [pointerFine]);

  const handlePositionChange = useCallback(() => {
    if (pointerFine && !shouldHideRef.current) {
      setIsVisible(true);
    }
  }, [pointerFine]);

  const shouldShow = isVisible && !shouldHide;

  const cursorVariants = useMemo(
    () => ({
      initial: { scale: 0.3, opacity: 0 },
      animate: {
        scale: shouldShow ? 1 : 0.3,
        opacity: shouldShow ? 1 : 0,
      },
      exit: { scale: 0.3, opacity: 0 },
    }),
    [shouldShow]
  );

  if (!pointerFine) return null;

  return (
    <Cursor
      className="z-[9999]"
      transition={{
        ease: "linear",
        duration: 0,
      }}
      variants={cursorVariants}
      onPositionChange={handlePositionChange}
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-blue-500/80 mix-blend-difference"
        animate={{
          opacity: shouldShow ? isInteractiveHover ? 0.7 : 1 : 0,
          scale: isInteractiveHover ? 1.45 : 1,
        }}
        transition={{
          duration: 0.08,
          ease: "easeOut",
        }}
      />
    </Cursor>
  );
}
