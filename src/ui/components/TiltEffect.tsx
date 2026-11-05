'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  MotionStyle,
  SpringOptions,
} from 'motion/react';

export interface TiltEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: MotionStyle;
  rotationFactor?: number;
  isReverse?: boolean;
  springOptions?: SpringOptions;
  enable3D?: boolean;
  
}

export function TiltEffect({
  children,
  className,
  style,
  rotationFactor = 15,
  isReverse = false,
  springOptions,
  enable3D = false,
  
}: TiltEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    isReverse
      ? [rotationFactor, -rotationFactor]
      : [-rotationFactor, rotationFactor]
  );
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    isReverse
      ? [-rotationFactor, rotationFactor]
      : [rotationFactor, -rotationFactor]
  );

  const scale = enable3D ? 1.05 : 1;
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPos = mouseX / rect.width - 0.5;
    const yPos = mouseY / rect.height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        ...style,
        transform,
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
}
