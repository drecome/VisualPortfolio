import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionHeading from '@/components/shared/SectionHeading';
import { SKILLS, EXPERIENCE } from '@/lib/constants';
import useScrollReveal from '@/lib/hooks/useScrollReveal';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const imageRef = useScrollReveal<HTMLDivElement>({ once: true });
  const contentRef = useScrollReveal<HTMLDivElement>({ once: true });
  const skillsRef = useScrollReveal<HTMLDivElement>({ once: true });
  const buttonRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <section id="about" className="py-24 bg-primary-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image column */}
          <motion.div 
            ref={imageRef}
            className="lg:w-2/5 reveal"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-40 h-40 border-2 border-secondary z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Alexander Chen Portrait" 
                className="w-full h-auto object-cover rounded-md z-10 relative"
                style={{ maxHeight: "600px" }}
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-2 border-accent z-0"></div>
            </div>
          </motion.div>
          
          {/* Content column */}
          <div className="lg:w-3/5">
            <motion.div 
              ref={contentRef}
              className="mb-6 reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-sm uppercase tracking-widest text-secondary font-accent font-medium mb-2">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Turning Ideas Into <span className="text-secondary">Digital Reality</span></h3>
              <div className="w-20 h-1 bg-accent"></div>
            </motion.div>
            
            <motion.div 
              className="text-gray-300 space-y-4 mb-8 reveal" 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p>Hello! I'm Alexander, a seasoned designer and developer with over 8 years of experience creating digital experiences that leave a lasting impression. I blend technical expertise with artistic vision to deliver solutions that not only look stunning but perform flawlessly.</p>
              <p>My approach combines strategic thinking with meticulous attention to detail, ensuring that every project I undertake achieves its objectives while exceeding aesthetic expectations.</p>
            </motion.div>
            
            {/* Skills */}
            <motion.div 
              ref={skillsRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {SKILLS.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-secondary text-xl"><i className={skill.icon}></i></div>
                  <span className="text-white">{skill.name}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              ref={buttonRef}
              className="reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a 
                href="#" 
                className="bg-secondary hover:bg-secondary-light text-white font-accent px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Download Resume</span>
                <Download size={16} />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Experience Timeline */}
        <div className="mt-24">
          <SectionHeading
            subtitle="My Journey"
            title="Professional Experience"
          />
          
          <div className="max-w-4xl mx-auto relative pl-10 md:pl-12 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-700">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`timeline-item relative pb-12 reveal ${index === EXPERIENCE.length - 1 ? '' : 'pb-12'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-1 text-secondary font-medium">{exp.years}</div>
                <h4 className="text-xl font-serif font-bold text-white mb-2">{exp.title}</h4>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
