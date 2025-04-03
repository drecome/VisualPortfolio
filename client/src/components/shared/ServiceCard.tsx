import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';
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
  const cardRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <motion.div 
      ref={cardRef}
      className="bg-primary p-8 rounded-lg hover:translate-y-[-10px] transition-transform duration-300 group reveal"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary/20 text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
        <i className={`${icon} text-2xl`}></i>
      </div>
      
      <h4 className="text-xl font-serif font-bold text-white mb-4">{title}</h4>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="text-gray-300 space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <i className="fas fa-check text-secondary"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href="/contact" 
        className="inline-flex items-center gap-2 text-secondary group-hover:text-accent transition-colors"
      >
        <span>Learn More</span>
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
