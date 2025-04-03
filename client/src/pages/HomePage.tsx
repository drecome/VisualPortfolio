import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
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
        <title>Alexander Chen | Creative Designer & Developer</title>
        <meta name="description" content="Creative designer and developer crafting stunning digital experiences that merge aesthetic beauty with functional excellence." />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </motion.div>
  );
};

export default HomePage;
