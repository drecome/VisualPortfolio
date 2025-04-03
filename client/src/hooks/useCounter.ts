import { useState, useEffect, useRef } from 'react';

interface UseCounterProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
  isInView: boolean;
}

// Easing functions
const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  easing = easeOutCubic,
  isInView
}: UseCounterProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Animation function
  const animate = (timestamp: number, startTime: number) => {
    const runtime = timestamp - startTime;
    const relativeProgress = runtime / duration;
    
    if (relativeProgress < 1) {
      const easedProgress = easing(relativeProgress);
      const value = Math.floor(start + (end - start) * easedProgress);
      
      countRef.current = value;
      setCount(value);
      
      requestAnimationFrame((time) => animate(time, startTime));
    } else {
      countRef.current = end;
      setCount(end);
    }
  };

  useEffect(() => {
    if (!isInView) return;
    
    timerRef.current = setTimeout(() => {
      requestAnimationFrame((timestamp) => animate(timestamp, timestamp));
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isInView]);

  return count;
}