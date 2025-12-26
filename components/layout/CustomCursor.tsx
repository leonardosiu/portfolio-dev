"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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

    const updateCursor = (e: MouseEvent) => {
      if (isMobile) return;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", updateCursor);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // Initial check
    checkHideCursor();

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible && !shouldHide ? 1 : 0,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-white" />
    </div>
  );
}

