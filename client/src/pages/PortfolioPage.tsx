import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'wouter';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '@/lib/constants';
import { pageTransition, fadeIn } from '@/lib/animations';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/shared/ProjectCard';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(project => project.categories.includes(activeCategory));

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="bg-primary-light min-h-screen"
    >
      <Helmet>
        <title>Game Portfolio | Alex Parker - Game Developer</title>
        <meta name="description" content="Explore Alex Parker's game development portfolio showcasing innovative games and interactive experiences." />
      </Helmet>
      
      <div className="pt-40 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading
            subtitle="My Game Development Portfolio"
            title="Featured Projects"
            description="Explore a collection of my past game development projects that showcase my passion for creating engaging and innovative gaming experiences."
            centered
          />
          
          {/* Filter Categories */}
          <motion.div 
            variants={fadeIn('up', 0.3)}
            className="flex flex-wrap justify-center items-center gap-4 mt-12 mb-16"
          >
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-secondary text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                className="h-full"
              >
                <Link href={`/project/${project.id}`}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    index={index}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeIn('up', 0.2)}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-lg">
                No projects found in this category. 
                Please check back later or select a different category.
              </div>
            </motion.div>
          )}
          
          {/* Call To Action */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
              Have a game project in mind?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new game development projects or partnership opportunities.
              Let's collaborate and bring your game ideas to life!
            </p>
            <Link href="/contact">
              <a className="bg-secondary hover:bg-secondary-light text-white font-accent px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center gap-2">
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;