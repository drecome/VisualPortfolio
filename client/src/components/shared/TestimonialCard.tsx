import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, position, image, text, rating }: TestimonialCardProps) => {
  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-accent text-accent" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-accent text-accent" />);
    }
    
    return stars;
  };
  
  return (
    <div className="testimonial-slide w-full flex-shrink-0 px-4">
      <div className="bg-primary-light p-8 md:p-12 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
            />
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold text-white">{name}</h4>
            <p className="text-secondary">{position}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex text-accent mb-4">
            {renderStars()}
          </div>
          <p className="text-gray-300 italic text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
