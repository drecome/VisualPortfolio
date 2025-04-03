import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { SKILLS } from '@/lib/constants';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

const SkillBar = ({ name, level, color, icon }: { name: string; level: number; color: string; icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-7" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          <i className={`${icon} text-lg`} style={{ color }}></i>
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      {isHovered && (
        <motion.div 
          className="mt-2 text-xs text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          Projects: {Math.floor(level / 10)} completed
        </motion.div>
      )}
    </div>
  );
};

const SkillCard = ({ name, level, color, icon, index }: { name: string; level: number; color: string; icon: string; index: number }) => {
  return (
    <motion.div 
      className="bg-primary-light rounded-lg p-6 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-4xl mb-4" style={{ color }}><i className={icon}></i></div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i < Math.round(level / 20) ? 'bg-secondary' : 'bg-gray-700'}`}
          ></div>
        ))}
        <span className="text-gray-400 text-xs ml-2">{level}%</span>
      </div>
      <div className="text-gray-400 text-sm">
        {level >= 90 ? 'Expert Level' : level >= 75 ? 'Advanced Level' : level >= 50 ? 'Intermediate Level' : 'Beginner Level'}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeView, setActiveView] = useState<'bars' | 'cards'>('bars');
  
  return (
    <section id="skills" className="py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="My Expertise"
          title="Game Development Skills"
          description="I've honed my skills across various game development technologies and frameworks to create compelling gaming experiences."
        />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-primary-light p-1 rounded-lg">
            <button 
              className={`px-4 py-2 rounded ${activeView === 'bars' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
              onClick={() => setActiveView('bars')}
            >
              Skill Bars
            </button>
            <button 
              className={`px-4 py-2 rounded ${activeView === 'cards' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
              onClick={() => setActiveView('cards')}
            >
              Skill Cards
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeView === 'bars' ? (
            <div className="space-y-2">
              {SKILLS.map((skill, index) => (
                <SkillBar 
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  icon={skill.icon}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;