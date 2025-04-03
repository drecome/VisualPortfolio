import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/lib/hooks/useScrollReveal';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  className
}: SectionHeadingProps) => {
  const headingRef = useScrollReveal<HTMLDivElement>({ once: true });
  
  return (
    <div 
      ref={headingRef}
      className={cn(
        "mb-16 reveal",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-sm uppercase tracking-widest text-secondary font-accent font-medium mb-2">
        {subtitle}
      </h2>
      <h3 className={cn(
        "text-4xl md:text-5xl font-serif font-bold mb-6",
        light ? "text-primary" : "text-white"
      )}>
        {title.split(' ').map((word, i) => 
          i % 3 === 1 ? (
            <span key={i} className="text-secondary"> {word} </span>
          ) : (
            <span key={i}> {word} </span>
          )
        )}
      </h3>
      {description && (
        <p className={cn(
          "max-w-2xl",
          centered && "mx-auto",
          light ? "text-gray-600" : "text-gray-300"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
