import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import { pageTransition } from '@/lib/animations';

const HomePage = () => {
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
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </motion.div>
  );
};

export default HomePage;
