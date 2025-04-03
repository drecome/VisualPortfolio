import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseEnter = () => setCursorVariant('active');
    const handleMouseLeave = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Hide on mobile/tablet
  useEffect(() => {
    const updateCursorVisibility = () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        if (window.innerWidth <= 768) {
          (cursor as HTMLElement).style.display = 'none';
        } else {
          (cursor as HTMLElement).style.display = 'block';
        }
      }
    };

    updateCursorVisibility();
    window.addEventListener('resize', updateCursorVisibility);

    return () => {
      window.removeEventListener('resize', updateCursorVisibility);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: '20px',
      height: '20px'
    },
    active: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: '50px',
      height: '50px'
    }
  };

  return (
    <motion.div
      className="custom-cursor fixed w-5 h-5 rounded-full bg-secondary/30 mix-blend-difference pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;
