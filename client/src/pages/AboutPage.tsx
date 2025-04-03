import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '@/components/shared/SectionHeading';
import AboutSection from '@/components/home/AboutSection';
import { pageTransition } from '@/lib/animations';

const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>About | Alexander Chen - Designer & Developer</title>
        <meta name="description" content="Learn more about Alexander Chen, a creative designer and developer with over 8 years of experience crafting stunning digital experiences." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="About Me"
            title="The Story Behind My Work"
            description="Discover the journey, philosophy, and skills that shape my approach to design and development."
          />
        </div>
      </div>
      
      <AboutSection />
    </motion.div>
  );
};

export default AboutPage;
