import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollReveal from '@/lib/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const brandsRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  const updateSlider = (index: number) => {
    if (sliderRef.current) {
      setIsAnimating(true);
      setCurrentIndex(index);
      const slideWidth = sliderRef.current.clientWidth;
      const track = sliderRef.current.querySelector('.testimonials-track') as HTMLElement;
      if (track) {
        track.style.transform = `translateX(${-index * slideWidth}px)`;
      }
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    const newIndex = currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    updateSlider(newIndex);
  };
  
  const goToNext = () => {
    if (isAnimating) return;
    const newIndex = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;
    updateSlider(newIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;
      updateSlider(newIndex);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section id="testimonials" className="py-24 bg-primary relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Clients Say"
          description="Don't just take my word for it. Here's what some of my clients have to say about working together."
        />
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="testimonials-slider overflow-hidden" ref={sliderRef}>
            <div className="testimonials-track flex transition-transform duration-500">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  position={testimonial.position}
                  image={testimonial.image}
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-secondary hover:bg-secondary-light rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none transition-colors md:translate-x-0 z-10"
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-secondary hover:bg-secondary-light rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none transition-colors md:translate-x-0 z-10"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button 
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex ? "bg-secondary" : "bg-gray-600"
                )}
                onClick={() => updateSlider(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Clients/Brands */}
        <div className="mt-24">
          <div className="text-center mb-12 reveal">
            <h4 className="text-2xl font-serif font-bold text-white mb-4">Trusted By</h4>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <motion.div 
            ref={brandsRef}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 reveal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            whileHover={{ opacity: 1, filter: "grayscale(0)" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {['GreenLife', 'NexGen', 'Aroma', 'WealthWise', 'FitLife', 'TechVision'].map((brand, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <div className="text-white text-2xl font-serif font-bold">{brand}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
