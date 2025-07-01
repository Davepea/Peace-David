"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const zoomCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      }
    });

    // Set initial states
    gsap.set([firstTextRef.current, secondTextRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.8
    });

    gsap.set(zoomCircleRef.current, {
      scale: 1
    });

    // Animation sequence
    tl
      // First text animation
      .to(firstTextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(firstTextRef.current, {
        opacity: 1,
        duration: 1.5
      })
      .to(firstTextRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.in"
      })
      // Second text animation
      .to(secondTextRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.3")
      .to(secondTextRef.current, {
        opacity: 1,
        duration: 1.5
      })
    
      

      // Zooming circle exit animation
      .to(zoomCircleRef.current, {
        scale: 1000,
        duration: 1,
        ease: "power4.inOut"
      })

      // Fade out container
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      })

      // Hide after animation
      .set(containerRef.current, { display: "none" })

      // Progress bar animation starts early
      .to(progressBarRef.current, {
        width: "100%",
        duration: 4.5,
        ease: "power2.inOut"
      }, 0);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#131313] via-[#1c1c1c] to-[#0c0c0c] overflow-hidden"
    >
      {/* Background animation elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#70707038] rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#f2a53118] rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-[#a43b3712] rounded-full blur-xl animate-pulse delay-500"></div>
      </div> */}

      {/* Text containers */}
      <div className="relative z-20 text-center p-10">
         <div className="absolute inset-0 pointer-events-none">
                        {/* Top-left corner */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-1 border-l-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-purple-300"></div>
                        
                        {/* Top-right corner */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-1 border-r-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-purple-300"></div>
                        
                        {/* Bottom-left corner */}
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-1 border-l-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-purple-300"></div>
                        
                        {/* Bottom-right corner */}
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-1 border-r-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-purple-300"></div>
                      </div>
        <div 
          ref={firstTextRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl frt-header tracking-tight">
             You bring the spark 
          </h1>
          

          
        </div>
        
        <div 
          ref={secondTextRef}
          className="flex items-center justify-center h-full"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl  tracking-tight frt-header ">
          I’ll build the <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#A43B37] via-[#F2A531] to-[#f2a53194]'>
            fire.
          </span>
          </h1>
        </div>
      </div>


      {/* Zooming circle for exit animation */}
      <div 
        ref={zoomCircleRef}
        className="absolute z-10 w-1 h-1 bg-[#171617] rounded-full"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%) scale(1)' }}
      ></div>
    </div>
  );
};

export default Preloader;
