import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
  once = false
}: ScrollRevealOptions = {}) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentElement.classList.add('active');
            if (once) {
              observer.unobserve(currentElement);
            }
          } else if (!once) {
            currentElement.classList.remove('active');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);

  return elementRef;
}

export default useScrollReveal;
