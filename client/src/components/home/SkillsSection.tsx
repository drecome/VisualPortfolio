import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { SKILLS } from '@/lib/constants';
import useScrollReveal from '@/lib/hooks/useScrollReveal';
import { LayoutGrid, BarChart3, Info } from 'lucide-react';

// Helper function to get skill description
function getSkillDescription(name: string): string {
  switch(name) {
    case "Unity Engine":
      return "Expert-level proficiency with Unity for 2D and 3D game development. Created numerous commercial titles with advanced shader programming and performance optimization.";
    case "Unreal Engine":
      return "Strong skills in Unreal Engine 4/5 for developing visually stunning games. Experience with Blueprint visual scripting and C++ for custom gameplay systems.";
    case "C# / C++":
      return "Advanced programming skills in C# and C++ for game development. Created complex systems including physics, AI, networking, and custom rendering pipelines.";
    case "Game Design":
      return "Comprehensive expertise in game design principles, balancing, level design, and player psychology. Created engaging gameplay loops and progression systems.";
    case "3D Modeling":
      return "Skilled in creating optimized 3D assets for games using Blender and Maya. Experience with modeling, texturing, and optimizing assets for real-time rendering.";
    case "Animation":
      return "Strong animation skills for both 2D and 3D games. Experience with keyframe animation, rigging, and implementing animation state machines in game engines.";
    default:
      return "Advanced expertise in this technology for game development with several years of professional experience.";
  }
}

// Enhanced SkillBar component with improved animations and interaction
const SkillBar = ({ name, level, color, icon, index }: { 
  name: string; 
  level: number; 
  color: string; 
  icon: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="mb-8" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center" 
            style={{ backgroundColor: `${color}20` }}
          >
            <i className={`${icon} text-lg`} style={{ color }}></i>
          </div>
          <span className="text-white font-medium">{name}</span>
        </div>
        <motion.span 
          className="text-gray-300 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 1.5 }}
        >
          {level}%
        </motion.span>
      </div>
      
      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut", 
            delay: index * 0.1 + 0.2 
          }}
          viewport={{ once: true }}
        />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="mt-3 text-sm text-gray-400 bg-primary-light p-3 rounded-lg"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start gap-2">
              <Info size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <p>{getSkillDescription(name)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Enhanced SkillCard component with circular progress
const SkillCard = ({ name, level, color, icon, index }: { 
  name: string; 
  level: number; 
  color: string; 
  icon: string; 
  index: number; 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const circumference = 2 * Math.PI * 45; // 2πr where r=45

  return (
    <motion.div 
      className="relative h-[220px] select-none perspective-[1000px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Card front */}
      <motion.div 
        className={`absolute inset-0 bg-primary-light rounded-lg p-6 backface-hidden cursor-pointer transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        onClick={() => setIsFlipped(true)}
      >
        <div className="flex justify-between items-start">
          <div className="text-4xl mb-4" style={{ color }}>
            <i className={icon}></i>
          </div>
          
          {/* Circular progress */}
          <div className="relative w-16 h-16">
            <svg width="64" height="64" viewBox="0 0 100 100">
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="#2A2A2A" 
                strokeWidth="10"
              />
              <motion.circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke={color} 
                strokeWidth="10" 
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ 
                  strokeDashoffset: circumference - (level / 100) * circumference 
                }}
                transition={{ duration: 2, delay: index * 0.1 }}
                style={{
                  transformOrigin: "center",
                  transform: "rotate(-90deg)"
                }}
              />
              <text 
                x="50" y="55" 
                textAnchor="middle" 
                className="text-lg font-mono font-semibold"
                fill="white"
              >
                {level}%
              </text>
            </svg>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4">{name}</h3>
        
        <div className="text-gray-400 text-sm flex items-center mt-auto">
          <motion.div
            className="flex items-center gap-1 hover:text-secondary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Info size={14} />
            <span>Tap for details</span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Card back */}
      <motion.div 
        className={`absolute inset-0 bg-primary-light rounded-lg p-6 backface-hidden cursor-pointer rotate-y-180 transform-gpu ${!isFlipped ? 'rotate-y-180' : ''}`}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 0.6, type: "spring" }}
        onClick={() => setIsFlipped(false)}
      >
        <div className="h-full flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3">{name}</h3>
          
          <div 
            className="px-2 py-1 rounded-full text-xs inline-flex items-center w-fit mb-4"
            style={{ backgroundColor: color }}
          >
            <span className="text-white font-medium">
              {level >= 90 ? 'Expert' : level >= 75 ? 'Advanced' : level >= 60 ? 'Intermediate' : 'Beginner'}
            </span>
          </div>
          
          <p className="text-gray-300 text-sm mb-auto">
            {getSkillDescription(name)}
          </p>
          
          <div className="text-gray-400 text-xs mt-4 flex items-center justify-end">
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>Tap to flip back</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [activeView, setActiveView] = useState<'bars' | 'cards'>('bars');
  const sectionRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <section id="skills" className="py-24 bg-primary" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          subtitle="My Expertise"
          title="Game Development Skills"
          description="I've honed my skills across various game development technologies and frameworks to create compelling gaming experiences."
          light
        />
        
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-primary-light p-1 rounded-lg shadow-lg">
            <motion.button 
              className={`px-4 py-2 rounded flex items-center gap-2 ${activeView === 'bars' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
              onClick={() => setActiveView('bars')}
              whileTap={{ scale: 0.95 }}
            >
              <BarChart3 size={16} />
              <span>Skill Bars</span>
            </motion.button>
            <motion.button 
              className={`px-4 py-2 rounded flex items-center gap-2 ${activeView === 'cards' ? 'bg-secondary text-white' : 'text-gray-400 hover:text-white'} transition-colors`}
              onClick={() => setActiveView('cards')}
              whileTap={{ scale: 0.95 }}
            >
              <LayoutGrid size={16} />
              <span>Skill Cards</span>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          layout
          transition={{ layout: { duration: 0.3, type: "spring" } }}
        >
          <AnimatePresence mode="wait">
            {activeView === 'bars' ? (
              <motion.div
                key="bars"
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {SKILLS.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    icon={skill.icon}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cards"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;