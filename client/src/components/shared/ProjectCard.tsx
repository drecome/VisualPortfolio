import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  index?: number;
}

const ProjectCard = ({ id, title, description, image, index = 0 }: ProjectCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <motion.div
      ref={cardRef}
      className="project-card relative group overflow-hidden rounded-lg reveal"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h4 className="text-xl font-serif font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link 
          href={`/portfolio/${id}`} 
          className="text-secondary hover:text-accent inline-flex items-center gap-2 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
