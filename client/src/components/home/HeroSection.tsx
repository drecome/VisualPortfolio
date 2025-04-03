import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronDown } from 'lucide-react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

const HeroSection = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>({ once: true });
  const descRef = useScrollReveal<HTMLParagraphElement>({ once: true });
  const btnRef = useScrollReveal<HTMLDivElement>({ once: true });
  const scrollRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.1)_0,rgba(15,23,42,0.8)_100%)]"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl top-1/4 -left-48"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl bottom-1/4 -right-32"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Creative</span>{' '}
            <span className="text-secondary">Designer</span> &{' '}
            <span className="text-accent">Developer</span>
          </motion.h1>
          
          <motion.p 
            ref={descRef}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I craft stunning digital experiences that merge aesthetic beauty with functional excellence, creating memorable brand journeys.
          </motion.p>
          
          <motion.div 
            ref={btnRef}
            className="flex flex-col sm:flex-row justify-center gap-4 reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/portfolio" className="bg-secondary hover:bg-secondary-light text-white font-accent px-8 py-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 text-lg">
              View My Work
            </Link>
            <Link href="/contact" className="border-2 border-white hover:border-secondary hover:text-secondary text-white font-accent px-8 py-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 text-lg">
              Get In Touch
            </Link>
          </motion.div>
          
          <motion.div 
            ref={scrollRef}
            className="mt-16 reveal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#about" className="inline-block text-white hover:text-secondary transition-colors">
              <span className="block text-sm uppercase tracking-widest mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
