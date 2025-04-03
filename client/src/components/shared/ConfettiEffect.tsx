import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface ConfettiEffectProps {
  run: boolean;
  duration?: number;
  recycle?: boolean;
  numberOfPieces?: number;
}

const ConfettiEffect = ({ 
  run, 
  duration = 3000, 
  recycle = false, 
  numberOfPieces = 200 
}: ConfettiEffectProps) => {
  const [isActive, setIsActive] = useState(run);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setIsActive(run);
    
    if (run && !recycle) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [run, duration, recycle]);

  return isActive ? (
    <Confetti
      width={width}
      height={height}
      recycle={recycle}
      numberOfPieces={numberOfPieces}
      gravity={0.15}
      colors={[
        '#5D5DFF', // primary
        '#22D3EE', // secondary
        '#F471B5', // accent pink
        '#FB923C', // accent orange
        '#FBBF24', // yellow
        '#4ADE80'  // green
      ]}
    />
  ) : null;
};

export default ConfettiEffect;