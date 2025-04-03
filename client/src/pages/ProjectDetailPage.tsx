import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useRoute, Link } from 'wouter';
import SectionHeading from '@/components/shared/SectionHeading';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { pageTransition } from '@/lib/animations';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectDetailPage = () => {
  const [, params] = useRoute('/portfolio/:id');
  const projectId = params?.id ? parseInt(params.id) : null;
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [prevProject, setPrevProject] = useState<any>(null);
  
  useEffect(() => {
    if (projectId) {
      const foundProject = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
      setProject(foundProject);
      
      const currentIndex = PORTFOLIO_PROJECTS.findIndex(p => p.id === projectId);
      
      if (currentIndex > 0) {
        setPrevProject(PORTFOLIO_PROJECTS[currentIndex - 1]);
      } else {
        setPrevProject(PORTFOLIO_PROJECTS[PORTFOLIO_PROJECTS.length - 1]);
      }
      
      if (currentIndex < PORTFOLIO_PROJECTS.length - 1) {
        setNextProject(PORTFOLIO_PROJECTS[currentIndex + 1]);
      } else {
        setNextProject(PORTFOLIO_PROJECTS[0]);
      }
    }
  }, [projectId]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <h2 className="text-2xl text-white">Loading project details...</h2>
      </div>
    );
  }
  
  // Mock additional project details that would come from a full API in a real implementation
  const projectDetails = {
    overview: "This project was an ambitious game development effort focused on creating an immersive and engaging player experience with cutting-edge graphics and innovative gameplay mechanics.",
    challenge: "The main challenge was to create a game that stood out in a crowded market, balancing visual fidelity with performance across multiple platforms while delivering innovative gameplay that feels both fresh and familiar.",
    solution: "I developed a custom game engine module for specialized rendering effects while optimizing core systems for cross-platform compatibility. The implementation includes advanced AI behaviors, procedural content generation, and responsive controls that provide satisfying player feedback.",
    technologies: ["Unity", "C#", "Shader Graph", "FMOD Audio", "Visual Scripting"],
    role: "Lead Game Developer",
    duration: "18 months",
    year: "2024",
    platforms: "PC, PlayStation 5, Xbox Series X/S",
    storeUrl: "https://store.steampowered.com",
    githubUrl: "https://github.com",
    testimonial: {
      quote: "Working with Alex on this game was an incredible experience. Their technical expertise and creative vision helped us overcome numerous development challenges and deliver a game that has exceeded our players' expectations and our sales targets.",
      author: "Studio Director",
      position: `${project.title.split(' ')[0]} Studios`
    },
    additionalImages: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ],
    features: [
      "Stunning real-time ray-traced lighting",
      "Adaptive AI that learns from player behavior",
      "Procedurally generated world with over 100 unique locations",
      "Advanced physics-based interaction system"
    ],
    results: [
      "500,000+ copies sold in first month",
      "92/100 average review score",
      "Featured in major gaming publications",
      "Nominated for 'Best Indie Game' award"
    ]
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>{project.title} | Game Portfolio - Alex Parker</title>
        <meta name="description" content={`Game showcase: ${project.title} - ${project.description}. Explore this game development project.`} />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-secondary/20 to-primary"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-secondary hover:text-accent mb-6 transition-colors">
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {projectDetails.technologies.map((tech, index) => (
                <span key={index} className="bg-primary-light text-white px-4 py-2 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div>
                <h3 className="text-secondary text-sm font-medium uppercase tracking-wider mb-1">Studio</h3>
                <p className="text-white">{project.title.split(' ')[0]} Studios</p>
              </div>
              <div>
                <h3 className="text-secondary text-sm font-medium uppercase tracking-wider mb-1">Year</h3>
                <p className="text-white">{projectDetails.year}</p>
              </div>
              <div>
                <h3 className="text-secondary text-sm font-medium uppercase tracking-wider mb-1">Development Time</h3>
                <p className="text-white">{projectDetails.duration}</p>
              </div>
              <div>
                <h3 className="text-secondary text-sm font-medium uppercase tracking-wider mb-1">Platforms</h3>
                <p className="text-white">{projectDetails.platforms}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={projectDetails.storeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <span>View on Steam</span>
                <ExternalLink size={16} />
              </a>
              
              <a 
                href={projectDetails.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white hover:border-secondary hover:text-secondary text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <span>Development Blog</span>
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Image */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Project Info */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-8">{projectDetails.overview}</p>
                
                <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-300 mb-8">{projectDetails.challenge}</p>
                
                <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-4">The Solution</h3>
                <p className="text-lg text-gray-300 mb-8">{projectDetails.solution}</p>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-6">Key Features</h3>
              <ul className="space-y-4 mb-12">
                {projectDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-secondary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-serif font-bold text-white mt-12 mb-6">Results</h3>
              <ul className="space-y-4 mb-12">
                {projectDetails.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-secondary mt-1">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
              
              {/* Testimonial */}
              <div className="bg-primary-light p-8 rounded-lg my-12">
                <div className="text-2xl text-gray-300 font-serif italic mb-6">
                  "{projectDetails.testimonial.quote}"
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-white font-medium">{projectDetails.testimonial.author}</div>
                    <div className="text-gray-400">{projectDetails.testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary-light p-8 rounded-lg sticky top-24">
                <h3 className="text-xl font-serif font-bold text-white mb-6">Project Highlights</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectDetails.technologies.map((tech, index) => (
                        <span key={index} className="bg-primary text-white px-3 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">My Role</h4>
                    <p className="text-gray-300">{projectDetails.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">Timeline</h4>
                    <p className="text-gray-300">{projectDetails.duration}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-secondary font-medium text-sm uppercase tracking-wider mb-2">Studio</h4>
                    <p className="text-gray-300">{project.title.split(' ')[0]} Studios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Images */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">More Project Visuals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDetails.additionalImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={img} 
                  alt={`${project.title} additional visual ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next/Prev Navigation */}
      <section className="py-12 bg-primary border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {prevProject && (
              <Link 
                href={`/portfolio/${prevProject.id}`}
                className="group flex items-center gap-3 mb-6 md:mb-0"
              >
                <ArrowLeft className="text-secondary group-hover:translate-x-[-5px] transition-transform" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Previous Project</div>
                  <div className="text-white group-hover:text-secondary transition-colors">{prevProject.title}</div>
                </div>
              </Link>
            )}
            
            <Link 
              href="/portfolio"
              className="text-secondary hover:text-accent transition-colors hidden md:block"
            >
              View All Projects
            </Link>
            
            {nextProject && (
              <Link 
                href={`/portfolio/${nextProject.id}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <div className="text-sm text-gray-400">Next Project</div>
                  <div className="text-white group-hover:text-secondary transition-colors">{nextProject.title}</div>
                </div>
                <ArrowRight className="text-secondary group-hover:translate-x-[5px] transition-transform" size={20} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailPage;