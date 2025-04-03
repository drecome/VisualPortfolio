import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionHeading from '@/components/shared/SectionHeading';
import BlogCard from '@/components/shared/BlogCard';
import { BLOG_POSTS } from '@/lib/constants';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

const BlogSection = () => {
  const buttonRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <section id="blog" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="Latest Articles"
          title="From The Blog"
          description="Insights, tips, and thoughts on design, development, and creative processes."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          ref={buttonRef}
          className="mt-12 text-center reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            href="/blog" 
            className="bg-primary-light hover:bg-secondary text-white font-accent px-8 py-3 rounded-md transition-colors inline-block"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
