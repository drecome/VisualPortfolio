import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '@/components/shared/SectionHeading';
import PortfolioSection from '@/components/home/PortfolioSection';
import { pageTransition } from '@/lib/animations';

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>Portfolio | Alexander Chen - Designer & Developer</title>
        <meta name="description" content="Browse through Alexander Chen's portfolio of stunning web designs, UI/UX projects, and brand identity work." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="My Work"
            title="Portfolio Showcase"
            description="Explore my latest projects and creative work across various industries and disciplines."
          />
        </div>
      </div>
      
      <PortfolioSection />
    </motion.div>
  );
};

export default PortfolioPage;
