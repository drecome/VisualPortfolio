import { Link } from 'wouter';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  index?: number;
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  image, 
  category, 
  date, 
  readTime,
  index = 0 
}: BlogCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  // Map categories to background colors
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Design': 'bg-secondary',
      'Development': 'bg-accent',
      'Branding': 'bg-emerald-500',
      'UX': 'bg-purple-500'
    };
    
    return colors[category] || 'bg-secondary';
  };
  
  return (
    <motion.article 
      ref={cardRef}
      className="bg-primary-light rounded-lg overflow-hidden hover:transform hover:translate-y-[-10px] transition-all duration-300 group reveal"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute bottom-0 left-0 ${getCategoryColor(category)} text-white text-sm py-1 px-3`}>
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-gray-400">
          <span className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {readTime}
          </span>
        </div>
        
        <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors">
          {title}
        </h4>
        
        <p className="text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          href={`/blog/${id}`} 
          className="inline-flex items-center text-secondary group-hover:text-accent transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
