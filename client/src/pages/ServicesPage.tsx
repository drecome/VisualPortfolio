import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '@/components/shared/SectionHeading';
import ServicesSection from '@/components/home/ServicesSection';
import { pageTransition } from '@/lib/animations';

const ServicesPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>Services | Alexander Chen - Designer & Developer</title>
        <meta name="description" content="Professional design and development services including UI/UX design, web development, branding, and more." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="My Offerings"
            title="Professional Services"
            description="Comprehensive design and development solutions tailored to meet your business needs and goals."
          />
        </div>
      </div>
      
      <ServicesSection />
    </motion.div>
  );
};

export default ServicesPage;
