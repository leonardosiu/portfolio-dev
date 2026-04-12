'use client';
import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  AnimatePresence,
  Transition,
  Variant,
} from 'motion/react';
import { cn } from '@/lib/utils';

export type CursorProps = {
  children: React.ReactNode;
  className?: string;
  /** @deprecated Position is no longer spring-smoothed (latency). Kept for API compatibility. */
  springConfig?: unknown;
  attachToParent?: boolean;
  transition?: Transition;
  variants?: {
    initial: Variant;
    animate: Variant;
    exit: Variant;
  };
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const onPositionChangeRef = useRef(onPositionChange);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  onPositionChangeRef.current = onPositionChange;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cursorX.set(window.innerWidth / 2);
      cursorY.set(window.innerHeight / 2);
    }
  }, [cursorX, cursorY]);

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChangeRef.current?.(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', updatePosition, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [attachToParent, cursorX, cursorY]);

  // Direct motion values (no spring) — avoids 1-frame+ lag behind the real pointer.

  useEffect(() => {
    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible);
    };

    if (!attachToParent) return;

    const cursorNode = cursorRef.current;
    if (!cursorNode) return;

    const parent = cursorNode.parentElement;
    if (!parent) return;

    const onMouseEnter = () => {
      parent.style.cursor = 'none';
      handleVisibilityChange(true);
    };

    const onMouseLeave = () => {
      parent.style.cursor = 'auto';
      handleVisibilityChange(false);
    };

    parent.addEventListener('mouseenter', onMouseEnter);
    parent.addEventListener('mouseleave', onMouseLeave);

    return () => {
      parent.removeEventListener('mouseenter', onMouseEnter);
      parent.removeEventListener('mouseleave', onMouseLeave);
      parent.style.cursor = 'auto';
    };
  }, [attachToParent]);

  useEffect(() => {
    return () => {
      // Restore default cursor if this component unmounts while globally hiding it.
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50 will-change-transform', className)}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
