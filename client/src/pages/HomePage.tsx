import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import ConfettiEffect from '@/components/shared/ConfettiEffect';
import { pageTransition } from '@/lib/animations';

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Trigger confetti after a short delay when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>Alex Parker | Game Developer & Designer</title>
        <meta name="description" content="Game developer and designer crafting immersive gaming experiences with stunning visuals and engaging gameplay mechanics." />
      </Helmet>
      
      {/* Celebration confetti effect */}
      <ConfettiEffect 
        run={showConfetti} 
        duration={5000}
        numberOfPieces={250}
      />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
    </motion.div>
  );
};

export default HomePage;
