import { Link } from 'wouter';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  index?: number;
}

const ProjectCard = ({ id, title, description, image, index = 0 }: ProjectCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>({ once: true });
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const iconVariants = {
    initial: { scale: 0, rotate: -45 },
    hover: { 
      scale: 1, 
      rotate: 0, 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 0.1
      }
    }
  };
  
  const titleVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.3, 
        delay: 0.2
      }
    }
  };
  
  const descriptionVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.3, 
        delay: 0.3
      }
    }
  };
  
  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    hover: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.3, 
        delay: 0.4
      }
    }
  };
  
  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { 
        duration: 0.6
      }
    }
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="project-card relative overflow-hidden rounded-lg reveal h-full cursor-pointer transform-gpu"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute top-4 right-4 z-10 bg-secondary w-10 h-10 rounded-full flex items-center justify-center"
        variants={iconVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        <Gamepad2 className="text-white" size={20} />
      </motion.div>
      
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover"
        variants={imageVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.95 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h4 
          className="text-xl font-serif font-bold text-white mb-2"
          variants={titleVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {title}
        </motion.h4>
        
        <motion.p 
          className="text-gray-300 mb-4"
          variants={descriptionVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          {description}
        </motion.p>
        
        <motion.div
          variants={linkVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        >
          <Link 
            href={`/project/${id}`} 
            className="text-secondary hover:text-accent inline-flex items-center gap-2 transition-colors"
          >
            <span>View Project</span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse"
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
