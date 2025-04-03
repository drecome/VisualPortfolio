import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { useRef, useState } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import { SERVICES, PRICING_PLANS } from '@/lib/constants';
import { Check, X, Gamepad, Shield, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("services"); // "services" or "pricing"
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create parallax effect for background elements
  const rightCircleY = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
  const leftCircleY = useTransform(scrollYProgress, [0, 1], ['25%', '-25%']);
  
  // Dynamic heading animations based on active tab
  const headingAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: { duration: 0.5 }
  };
  
  return (
    <section id="services" className="py-24 bg-primary-light relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background elements with parallax effect */}
      <motion.div 
        className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-secondary/5 blur-3xl -z-0"
        style={{ y: rightCircleY }}
      />
      <motion.div 
        className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-0"
        style={{ y: leftCircleY }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Animated tab switching */}
        <div className="flex justify-center mb-12">
          <div className="bg-primary p-1.5 rounded-xl shadow-xl flex gap-2">
            <motion.button
              className={`py-2.5 px-6 rounded-lg flex items-center gap-2 font-medium ${activeTab === "services" ? "bg-secondary text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("services")}
              whileHover={activeTab !== "services" ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Gamepad size={18} />
              <span>Game Development</span>
            </motion.button>
            <motion.button
              className={`py-2.5 px-6 rounded-lg flex items-center gap-2 font-medium ${activeTab === "pricing" ? "bg-secondary text-white" : "text-gray-400 hover:text-white"}`}
              onClick={() => setActiveTab("pricing")}
              whileHover={activeTab !== "pricing" ? { scale: 1.05 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Zap size={18} />
              <span>Pricing Plans</span>
            </motion.button>
          </div>
        </div>
        
        {/* Content based on active tab */}
        {activeTab === "services" ? (
          <motion.div 
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              subtitle="What I Do"
              title="Game Development Services"
              description="I craft immersive gaming experiences with cutting-edge technologies and creative design, from concept to launch across multiple platforms."
            />
            
            {/* Interactive cards with 3D flip effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
            
            <motion.div 
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact" className="bg-gradient-to-r from-secondary to-secondary-light text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                <Sparkles size={20} />
                <span className="font-bold">Start Your Game Project</span>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              subtitle="Pricing Plans"
              title="Select Your Development Package"
              description="Choose from my carefully crafted game development packages designed to bring your gaming vision to life, from indie projects to AAA experiences."
            />
            
            {/* Enhanced pricing cards with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
            
            <motion.div 
              className="text-center mt-12 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="max-w-2xl mx-auto">
                Need a custom solution? <Link href="/contact" className="text-secondary hover:underline">Contact me</Link> for a personalized quote tailored to your specific game development requirements.
              </p>
            </motion.div>
          </motion.div>
        )}
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
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Feature animation variants
  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };
  
  // Badge animation
  const badgeVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  // Button animation
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      className={cn(
        "bg-gradient-to-b p-8 rounded-xl transition-all duration-300 relative overflow-hidden group",
        popular 
          ? "from-primary to-secondary/10 border-2 border-secondary/50 shadow-lg shadow-secondary/20" 
          : "from-primary to-primary-light/90 border border-gray-800 hover:border-secondary/30"
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: popular ? "0 20px 30px -10px rgba(0, 150, 200, 0.3)" : "0 20px 30px -10px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"
        animate={isHovered ? { scale: 1.2, opacity: 0.7 } : { scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      
      {/* Popular badge */}
      {popular && (
        <motion.div 
          className="absolute top-0 right-5 bg-secondary text-white text-xs font-accent uppercase py-1.5 px-4 rounded-b-lg shadow-md"
          variants={badgeVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Popular Choice
        </motion.div>
      )}
      
      {/* Title section */}
      <h4 className="text-xl font-serif font-bold text-white mb-2">{title}</h4>
      <p className="text-gray-400 mb-6">{subtitle}</p>
      
      {/* Price with animated highlight */}
      <motion.div 
        className="flex items-end mb-8 relative"
        animate={isHovered && popular ? { 
          x: [0, 5, 0],
          transition: { duration: 0.5 } 
        } : {}}
      >
        <span className="text-5xl font-serif font-bold text-white mr-2">{price}</span>
        <div className="text-gray-400 mb-2">
          <span className="block text-xs uppercase tracking-wider">Starting at</span>
          <span className="block">per project</span>
        </div>
        
        {/* Price highlight effect */}
        {popular && (
          <motion.div 
            className="absolute -z-10 inset-0 rounded-full blur-md bg-secondary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHovered ? { 
              opacity: [0.2, 0.5, 0.2], 
              scale: [0.8, 1.1, 0.8],
              transition: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop" as const
              }
            } : { opacity: 0 }}
          />
        )}
      </motion.div>
      
      {/* Features list with staggered animation */}
      <div className="mb-8">
        <motion.h5 
          className="text-white font-medium mb-4 flex items-center gap-2"
          animate={showDetails ? { color: "#22D3EE" } : {}}
        >
          <span>{showDetails ? "All Features" : "Key Features"}</span>
          <motion.button
            className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Show Less" : "Show All"}
          </motion.button>
        </motion.h5>
        
        <motion.ul className="text-gray-300 space-y-3">
          {/* Always show first 3 features */}
          {features.slice(0, 3).map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-2"
              variants={featureVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <Check className="text-secondary mt-1 h-4 w-4 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
          
          {/* Conditionally show more features */}
          {showDetails && (
            <>
              {features.slice(3).map((feature, i) => (
                <motion.li 
                  key={`more-${i}`} 
                  className="flex items-start gap-2"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + 3}
                >
                  <Check className="text-secondary mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
              
              {/* Not included features */}
              {notIncluded.map((feature, i) => (
                <motion.li 
                  key={`not-${i}`} 
                  className="flex items-start gap-2 text-gray-500"
                  variants={featureVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i + features.length}
                >
                  <X className="mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </>
          )}
        </motion.ul>
      </div>
      
      {/* CTA Button with animation */}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link 
          href="/contact" 
          className={cn(
            "block text-center text-white font-accent py-3.5 rounded-lg transition-all shadow-lg",
            popular 
              ? "bg-secondary hover:bg-secondary-light shadow-secondary/30" 
              : "bg-gray-800 hover:bg-gray-700 shadow-black/30"
          )}
        >
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
