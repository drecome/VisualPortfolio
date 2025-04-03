import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionHeading from '@/components/shared/SectionHeading';
import BlogSection from '@/components/home/BlogSection';
import { pageTransition } from '@/lib/animations';

const BlogPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>Blog | Alexander Chen - Designer & Developer</title>
        <meta name="description" content="Insights, tips, and thoughts on design, development, and creative processes by Alexander Chen." />
      </Helmet>
      
      <div className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="My Articles"
            title="Design & Development Blog"
            description="Explore my thoughts, insights, and tutorials on various aspects of design, development, and creative processes."
          />
        </div>
      </div>
      
      <BlogSection />
    </motion.div>
  );
};

export default BlogPage;
