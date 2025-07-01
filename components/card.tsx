'use client'
import Image from 'next/image';
import Link from 'next/link';

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  const scale = useTransform(progress, range, [1, targetScale]);
  // const blur = useTransform(scale, [1, targetScale], [0, 100]);
  const blur = useTransform(progress, [0, 1], [0, 20]); 

  return (
    <>
      <Link href="#">
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
          <motion.div 
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              scale,
              top: `calc(-5vh + ${i * 40}px)`,
              filter: `blur(${blur}px)`
            }} 
            className="flex flex-col relative top-[-45%] bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-[#222323]
 md:h-[90vh] xs:h-[50vh] rounded-2xl md:px-[40px] xs:px-[20px] py-6 w-full border border-[#232323]"
          >
            <div className="flex md:justify-between xs:justify-end flex-wrap items-center">
              <div className="md:block xs:hidden">{title} 2024</div>
              <div className="flex list-none justify-end items-center gap-1">
                <li className="p-1 px-4 bg-[#000] rounded-full">UI/UX</li>
                <li className="p-1 px-4 bg-[#000] rounded-full">Web Development</li>
              </div>
            </div>
            <h2 className="absolute grid place-items-center top-0 bottom-0 right-0 left-0 md:text-8xl text-center p-10 font-Archivo font-thin">
              {title}
            </h2>
            <div className='w-[200px] h-[400px]'>
              <motion.div style={{scale: imageScale}} className='w-full h-full overflow-hidden'>
                <Image
                  fill
                  src='https://images.pexels.com/photos/32472372/pexels-photo-32472372/free-photo-of-youth-holding-sign-at-outdoor-event-in-ankara.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt="image" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    </>
  );
};

export default Card;