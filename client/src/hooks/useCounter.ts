import { useState, useEffect } from 'react';

interface UseCounterProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
  isInView: boolean;
}

// Linear easing function (default)
const linearEasing = (t: number) => t;

// Cubic easing out
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Exponential easing out
const easeOutExpo = (t: number) => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t);

export function useCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  easing = easeOutCubic,
  isInView
}: UseCounterProps) {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    let timer: NodeJS.Timeout;
    
    // Apply initial delay
    timer = setTimeout(() => {
      // Start animation after delay
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Apply easing function to progress
        const easedProgress = easing(progress);
        
        // Calculate current value
        const currentValue = Math.floor(start + easedProgress * (end - start));
        setCount(currentValue);
        
        // Continue animation until complete
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure we end exactly at the target value
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    }, delay);
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration, delay, easing, isInView]);
  
  return count;
}