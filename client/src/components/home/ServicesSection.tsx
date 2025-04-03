import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import { SERVICES, PRICING_PLANS } from '@/lib/constants';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-primary-light">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="What I Do"
          title="My Services"
          description="I offer comprehensive design and development solutions to help businesses build their digital presence and engage their audience effectively."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
        
        {/* Pricing Packages */}
        <div className="mt-24">
          <SectionHeading
            subtitle="Pricing Plans"
            title="Select Your Package"
            description="Choose from my carefully crafted service packages designed to meet different needs and budgets."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                subtitle={plan.subtitle}
                price={plan.price}
                features={plan.features}
                notIncluded={plan.notIncluded}
                popular={plan.popular}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  index?: number;
}

const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  features, 
  notIncluded, 
  popular,
  index = 0 
}: PricingCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <motion.div 
      ref={cardRef}
      className={cn(
        "bg-primary p-8 rounded-lg transition-all duration-300 reveal relative",
        popular 
          ? "border-2 border-secondary shadow-lg shadow-secondary/20 transform hover:scale-105" 
          : "border border-gray-800 hover:border-secondary"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-accent uppercase py-1 px-3 tracking-wider transform translate-y-[-50%]">
          Popular
        </div>
      )}
      
      <h4 className="text-xl font-serif font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 mb-6">{subtitle}</p>
      
      <div className="flex items-end mb-6">
        <span className="text-4xl font-serif font-bold text-white">{price}</span>
        <span className="text-gray-400 ml-1 mb-1">/ project</span>
      </div>
      
      <ul className="text-gray-300 space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="text-secondary mt-1 h-4 w-4 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
        
        {notIncluded.map((feature, i) => (
          <li key={`not-${i}`} className="flex items-start gap-2 text-gray-500">
            <X className="mt-1 h-4 w-4 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href="/contact" 
        className={cn(
          "block text-center text-white font-accent py-3 rounded-md transition-colors",
          popular 
            ? "bg-secondary hover:bg-secondary-light" 
            : "bg-primary-light hover:bg-secondary"
        )}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default ServicesSection;
