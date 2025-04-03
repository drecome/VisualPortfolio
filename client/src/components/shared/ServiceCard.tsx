import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useRef } from 'react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
  index?: number;
}

const ServiceCard = ({ 
  title, 
  icon, 
  description, 
  features,
  index = 0 
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Change card state with slight delay to create a staggered effect
  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  // Flip the card to show features
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Animation variants for the floating icons
  const floatingIconVariants = {
    initial: { 
      scale: 0, 
      opacity: 0, 
      y: 0, 
      rotate: 0 
    },
    animate: (i: number) => ({ 
      scale: [0.7, 1, 0.7],
      opacity: [0, 1, 0],
      y: [0, -15, -30],
      rotate: [-10, 0, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const,
        delay: i * 0.2,
        ease: "easeInOut"
      }
    })
  };

  // Background gradient animation
  const gradientVariants = {
    initial: { 
      background: 'linear-gradient(135deg, rgba(15, 15, 15, 1) 0%, rgba(30, 30, 30, 1) 100%)' 
    },
    hover: { 
      background: 'linear-gradient(135deg, rgba(20, 20, 20, 1) 0%, rgba(45, 45, 45, 1) 100%)' 
    }
  };

  // Icon pulse animation
  const iconPulseVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 0 0 rgba(0, 150, 200, 0)'
    },
    pulse: { 
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 rgba(0, 150, 200, 0)',
        '0 0 15px rgba(0, 150, 200, 0.7)',
        '0 0 0 rgba(0, 150, 200, 0)'
      ],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  // Feature list animation
  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5
      }
    })
  };
  
  return (
    <motion.div 
      ref={cardRef}
      className="relative h-[360px] perspective-[1000px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
    >
      {/* Front face of card */}
      <motion.div 
        className={`absolute inset-0 bg-primary rounded-xl p-8 shadow-lg transform-gpu backface-hidden ${isFlipped ? 'rotate-y-180' : ''}`}
        animate={isFlipped ? { rotateY: 180 } : { rotateY: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
        variants={gradientVariants}
        initial="initial"
        whileHover="hover"
      >
        {/* Floating sparkle effects that appear on hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={`sparkle-${i}`}
                  className="absolute z-0"
                  style={{ 
                    top: `${40 + (i * 15)}%`, 
                    left: `${65 + (i * 10)}%`,
                    color: '#3cc7e6'
                  }}
                  variants={floatingIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  custom={i}
                >
                  <Sparkles size={i === 1 ? 16 : 12} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
        
        {/* Main icon with pulse animation */}
        <motion.div 
          className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 text-secondary mb-6 z-10 overflow-hidden"
          variants={iconPulseVariants}
          initial="initial"
          animate={isHovered ? "pulse" : "initial"}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-secondary/5 blur-xl rounded-full"></div>
          {/* Icon */}
          <i className={`${icon} text-3xl relative z-10`}></i>
        </motion.div>
        
        {/* Title with hover animation */}
        <motion.h3 
          className="text-2xl font-serif font-bold text-white mb-4 relative z-10"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-8 relative z-10">{description}</p>
        
        {/* Interactive button to flip card */}
        <motion.button
          className="absolute bottom-8 right-8 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary group"
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "rgba(0, 150, 200, 0.5)",
            color: "#ffffff" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleFlip}
        >
          <motion.div
            animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
      
      {/* Back face of card (Features) */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light rounded-xl p-8 shadow-xl transform-gpu backface-hidden rotate-y-180 ${!isFlipped ? 'rotate-y-180' : ''}`}
        animate={isFlipped ? { rotateY: 0 } : { rotateY: 180 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="h-full flex flex-col">
          <h3 className="text-2xl font-serif font-bold text-white mb-2 flex items-center">
            <i className={`${icon} text-secondary mr-3`}></i>
            {title}
          </h3>
          
          <div className="w-1/3 h-1 bg-secondary mb-6"></div>
          
          <h4 className="text-lg text-secondary font-medium mb-4">Features:</h4>
          
          <ul className="text-gray-300 space-y-3 mb-auto">
            {features.map((feature, i) => (
              <motion.li 
                key={`feature-${i}`}
                className="flex items-start gap-3"
                variants={featureItemVariants}
                initial="hidden"
                animate={isFlipped ? "visible" : "hidden"}
                custom={i}
              >
                <Check className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-6 flex justify-between items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-white bg-secondary px-5 py-2 rounded-lg hover:bg-secondary-light transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
            
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-300"
              whileHover={{ scale: 1.1, backgroundColor: "#333" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFlip}
            >
              <motion.div
                animate={{ rotate: 180 }}
              >
                <ChevronRight size={20} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
