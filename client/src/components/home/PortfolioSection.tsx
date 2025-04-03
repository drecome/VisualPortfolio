import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/shared/ProjectCard';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(project => project.categories.includes(activeCategory));
  
  return (
    <section id="portfolio" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="My Work"
          title="Selected Projects"
          description="Explore a curated collection of my most impactful work, showcasing the intersection of strategic design and technical implementation."
        />
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-6 py-2 rounded-md transition-colors",
                activeCategory === category.id 
                  ? "bg-secondary text-white" 
                  : "bg-primary-light hover:bg-secondary text-white"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center reveal"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light border-b-2 border-secondary hover:border-secondary-light pb-1 transition-colors"
          >
            <span>Have a project in mind? Let's talk</span>
            <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
