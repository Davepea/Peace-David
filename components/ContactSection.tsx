'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <>
     <section className='md:px-[120px] px-[20px] pt-[120px] pb-[100px] h-screen flex flex-col justify-center'>
      <div className="header text-center">
        <div className='flex justify-center'>
        
          <div className='  m-auto flex items-center gap-2 p-1 px-2'>
              <span className="relative flex h-3 w-3 justify-center items-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <small className=''>
          Let’s Make It Happen
        </small>
        </div>
        </div>
      </div>
        <div className=' text-center'>
          <div className='flex flex-col gap-3'>
            <h2 className='font-space-grotesk text-[16px] text-[#707070]'>Do you have a wild idea? </h2> <h2 className='font-space-grotesk text-[16px] text-[#707070]'>A polished brand in need of a digital home? </h2> <h2 className='font-space-grotesk text-[16px] text-[#707070]'>
            Or maybe just a sketch that needs a code whisperer?
            </h2>
            <br />


            <p className='text-[#b0b0b0] text-[18px] font-space-grotesk'>
              Whatever stage you&apos;re in — <br />
            <span className=' '>
              I&apos;m here to bring it to life.
            </span>
            </p>
            <br />

            <div className="space-y-1 text-base">
         
          <p className=' font-space-grotesk text-[#dbdbdb]'>I am available for freelance, collabs, and full-time roles</p>
        </div>
        <div><a
          href="mailto:you@example.com"
          className="inline-block mt-4 px-6 py-3 bg-[#ffffff] text-black rounded-full font-semibold font-space-grotesk hover:bg-[#00cc9f] transition"
        >
          Let’s Talk →
        </a></div>
        <p className="text-sm mt-4 text-[#707070]">Or just say hi. I’m always down to connect.</p>
           

           
          </div>
        </div>
     </section>
    </>
  );
}
