"use client"
import { useLenisScroll } from '@/hooks/useLenisScroll'
import React, { useRef, useState } from 'react'
import { projects } from '@/data';
import { useScroll } from 'motion/react';
import Image from 'next/image';
import Marquee from '@/components/MarqueeProps';
import CustomCursor from '@/components/CustomCursor';
import Project from '@/components/Project';
import Preloader from '@/components/Preloader';



const Page = () => {
    useLenisScroll()

    const container = useRef<HTMLInputElement | null>(null)
      const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
    const [showPreloader, setShowPreloader] = useState(true);
  
    const handlePreloaderComplete = () => {
      setShowPreloader(false);
    };
  
  return (
    <div className="min-h-screen ">
    {showPreloader && (
      <Preloader onComplete={handlePreloaderComplete} />
    )}
    
    {!showPreloader && (
       <>
       <section className='md:h-screen md:px-[150px] border-b border-[#eeeeee0c]  px-[20px] md:pt-0 pt-[50vw] md:items-start  flex items-end md:pb-[6vw] pb-[100px]'>
        <CustomCursor/>
         <div className='grid md:grid-cols-6 w-full gap-y-10 md:h-full'>
              <div className='md:col-span-4  flex  flex-col  justify-between'>
          
                  
                <div className=' md:pt-40'>
                        <h1 className=' leading-[1.3] md:text-[4.5vw] text-4xl font-plus-jakarta pb-[20px]  font-medium  '>
                          <span className='text-[#707070]'> Hello 👋🏾, I&apos;m Peace David,  </span><br className="md:block hidden" />
                          <span className='frt-header'>A Creative Developer</span>

                        </h1>

                        {/* Basic Corner Border Button */}

                    
              
                
                        <small className=' md:text-[0.8vw] text-[10px] font-mono tracking-widest   p-1 bg-[#212121] text-[#707070]'>a rare mix of software engineer and design obsessive.


                          
                        </small>  
                </div>
                    
                <div>
                    <p className=' max-w-lg mt-10 font-space-grotesk  md:text-[1vw] text-[16px] text-[#707070]'>
                    I build websites that feel as good as they function — fast, responsive, and unmistakably you.
                  </p>
                  <button className=' border border-[#3d3d3d] mt-10 py-[1px] px-[2px]  flex items-center  rounded-lg shadow-2xl'>
                    <small className='text-[16px] font-semibold px-4 py-2 text-[#b0b0b0]'>
                      Download CV
                    </small>
                    <div className='text-[#EEE] px-3 py-3 rounded-lg h-full'>
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg> */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>

  
                    </div>
                  </button>
                </div>
              </div>
              <div className='flex items-end md:justify-end justify-between md:col-span-2 relative'>
             
                   
              {/* <div className='border-[#232323]  border-1 p-3 rounded-2xl shadow-xl'>
                    <div className='grid grid-cols-5 rounded-xl bg-[#212121] p-[14px] gap-[20px]'>
                      <div className='col-span-3'>
                          <h2 className='md:text-2xl font-plus-jakarta font-semibold text-[#b0b0b0] text-2xl'>Peace David</h2>
                          <p className=' text-wrap font-space-grotesk md:text-[14px] text-[12px] text-[#707070]'>dev.peacedave@gmail.com</p>
                           <div className='group relative p-[6px]'>
                
                     <div className='flex flex-row md:gap-5 gap-2   pt-10 py-2 rounded-sm bg-[#212121]'>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
    
                      </div>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                      </div>
                    
                    
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
    
                      </div>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
    
                      </div>
                      <div>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                      </div>
                     </div>
                   
                  </div>
                      </div>
                      <div className='col-span-2 h-full overflow-hidden '>
                         <div className='w-full h-full overflow-hidden rounded-md '>
                           <Image
                              src='/img/pdgff.png'
                              width={100}
                              height={100}
                              alt='Peace David'
                              className='w-full h-full object-cover'
                          />
                         </div>
                      </div>
                  </div>
              </div> */}
                  
                  <div className='group relative p-[6px] border border-[#eeeeee0c]'>
                       <div className="absolute inset-0 pointer-events-none">
                      
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-1 border-l-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-[#707070]"></div>
                        
                       
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-1 border-r-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-[#707070]"></div>
                        
                      
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-1 border-l-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-[#707070]"></div>
                        
                      
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-1 border-r-1 border-[#707070] transition-all duration-300 group-hover:w-8 group-hover:h-8 group-hover:border-[#707070]"></div>
                      </div>
                     <div className='flex md:flex-col flex-row gap-5 p-2  py-3 rounded-sm bg-[#212121]'>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
    
                      </div>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                      </div>
                    
                    
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
    
                      </div>
                      <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
    
                      </div>
                      <div>
                      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
                      </div>
                     </div>
                   
                  </div>
              </div>
         </div>
       </section>
       <section className='pt-[100px] md:px-[150px] px-[20px] pb-[20px]'>
            <div className='grid'>
              <div className='text-center pb-[60px]'>
                <h1 className=' md:text-[5.5vw] text-5xl frt-header '>The Creative Developer</h1>  
              </div>
             <div className='grid md:grid-cols-2  gap-10'>
               <div className='flex md:justify-start justify-center  w-full '>
               <div className='w-full' >
                 <Image
                src='/img/pdgff.png'
                height={600}
                width={300}
                alt='peace-david'
                className=' md:w-[300px] w-full object-cover'
                />
               </div>
              </div>
              <div className=''>
                <p className='md:text-[24px] text-[16px] font-space-grotesk font-[200] leading-[2] max-w-[500px] text-[#707070]'>
                  I didn’t set out to become just another developer.
                  I fell in love with websites because of how they made me feel. <br /> 
  
                  While others were learning to code line by line,
                  I was sketching interfaces, obsessing over color palettes,
                  and wondering why every good idea didn’t have a site that looked and felt like it meant something. <br />
  
                  Fast-forward to today —
                  I build websites with personality.
                  Design-driven. Story-fueled. Technically sound.
                  And yes, my folks call me a Creative Developer — and I wear that badge proudly.
                </p>
  
              </div>
             </div>
            </div>
       </section>
        
       <section>
        <Marquee/>
       </section>
       <section className=' md:px-[150px] pt-[20px] px-[20px] md:pb-[6vw] pb-[100px] border-b border-[#eeeeee0c] '>
          <div className='grid md:grid-cols-9'>
            <div className='header md:col-span-3'>
            <h1 className=' font-plus-jakarta text-[18px] text-sefont-semibold0b0]'>What drives me...💡</h1>
            </div>
            <div className='md:col-span-6 grid md:grid-cols-5 gap-10 '>
                <div className='flex flex-col gap-4 md:col-span-2'>
                  <div className=''>
                    <h2 className='text-[14px] font-bold font-space-grotesk pb-[6px] text-[#b0b0b0]'>Empathy-first design </h2>
                    <p className='text-[12px] font-mono font-[100] max-w-[350px]'> I think like your users.</p>
                  </div>
                  <div className=''>
                    <h2 className='text-[14px] font-bold font-space-grotesk pb-[6px] text-[#b0b0b0]'>Developer precision</h2>
                    <p className='text-[12px] font-mono font-[100] max-w-[350px]'>I build with performance and accessibility in mind.</p>
                  </div>
                  <div className=''>
                    <h2 className='text-[14px] font-bold font-space-grotesk pb-[6px] text-[#b0b0b0]'>Creative intuition</h2>
                    <p className='text-[12px] font-mono font-[100] max-w-[350px]'>I don’t just code, I craft.</p>
                  </div>
                </div>
                <div className=' md:col-span-3'>
                  <p className=' text-[14px] font-mono text-[#707070]'>
                    I approach every project with an empathy-first mindset, designing experiences from the user’s perspective to ensure every interaction feels intuitive, thoughtful, and human. My development process is grounded in precision — I build with performance and accessibility as non-negotiables, ensuring that what I create is not only fast and scalable but also inclusive and usable by all. Beyond the technical, I bring creative intuition to the craft; I don’t just write code, I shape experiences that feel alive — with intentional motion, clear hierarchy, and storytelling in every detail. The result is digital work that’s not just functional, but emotionally resonant and built to last.
                  </p>
                </div>
            </div>
          </div>
  
       </section>
      
      
  
       <section className='md:px-[150px] px-[20px] pt-[100px] md:pb-[6vw] pb-[100px] border-b border-[#eeeeee0c] '>
        <div className="header flex flex-col items-center">
          <div>
             <small className='md:text-[0.8vw] text-[10px] font-mono tracking-widest   p-1 bg-[#212121] text-[#707070]'>
          Work / Projcts
         </small>
          </div>
         <h1  className=' md:text-8xl text-5xl text-center frt-header pb-[20px] '>Pixels With Purpose</h1>
          <p className=' font-space-grotesk font-[200] md:text-[16px] text-[14px] text-center text-[#707070]'>
          Every project I take on starts with one goal: Make it unforgettable.
        </p>
  
        </div>
        <Project/>
       
           {/* <main ref={container} className="relative  ">
                {
                  projects.map( (project, i) => {
                    const targetScale = 1 - ( (projects.length - i) * 0.05);
                    return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                  })
                }
              </main> */}
       </section>
       <section className=' md:px-[150px] px-[20px] pt-[120px] md:pb-[6vw] pb-[100px] border-b border-[#eeeeee0c] '>
        <div className='text-center pb-[60px]'>
            <div>
             <small className='md:text-[0.8vw] text-[10px] font-mono tracking-widest   p-1 bg-[#212121] text-[#707070]'>
          Service 
         </small>
          </div>
          <h1 className='md:text-[5.5vw] text-5xl frt-header pb-[20px]'>Here’s What I Can Do For You</h1>
          <p className='font-space-grotesk font-[200] md:text-[18px] text-[14px] text-[#707070]'>I help founders, brands, and designers bring their visions to life — cleanly, creatively, and code-consciously.</p>
         
        </div>
          <div className='pb-[30px]'>
               
                
              </div>
              <div className='grid md:grid-cols-2 max-w-4xl gap-8  pb-[60px] md:col-span-3  justify-center m-auto'>
                <div className='border-[#232323]   border-1 p-3 rounded-xl shadow-xl'>
                  <div className=' p-6  md:h-[55vh] flex flex-col justify-between bg-[#212121] rounded-lg '>
                  <div className='flex justify-between pb-[100px]'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
  
                  </div>
  
  
                  </div>
                  <div>
                    <h2 className=' font-plus-jakarta text-[40px] font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#717171] to-white leading-[1.1]'>Frontend Engineering</h2>
                  <p className=' font-space-grotesk text-[#707070] text-[16px]'>
                    React / Next.js / Angular
  
                    Responsive, pixel-perfect layouts
  
                  </p>
                  </div>
            
                  </div>
                </div>
                <div className='border-[#232323]   border-1 p-3 rounded-xl shadow-xl'>
                  <div className='p-6  md:h-[55vh] flex flex-col justify-between bg-[#212121] rounded-lg '>
                  <div className='flex justify-between pb-[100px]'>
                  <div>
                   <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="0.2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-palette"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" /><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
  
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
  
                  </div>
  
  
                  </div>
                  <div>
                    <h2 className=' font-plus-jakarta text-[40px] font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#717171] to-white leading-[1.1]'>Creative Web Development</h2>
                  <p className=' font-space-grotesk text-[#707070]'>
                    Custom animations
  
                    Design-to-code implementation
  
                  </p>
                  </div>
                </div>
                </div>
               <div className='border-[#232323]   border-1 p-3 rounded-xl shadow-xl'>
                 <div className='p-6  md:h-[55vh] flex flex-col justify-between bg-[#212121] rounded-lg  '>
                   <div className='flex justify-between pb-[100px]'>
                  <div>
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="0.2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-browser-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" /><path d="M4 8h16" /><path d="M8 4v4" /><path d="M9.5 14.5l1.5 1.5l3 -3" /></svg>
                  
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
  
                  </div>
  
  
                  </div>
                    <div>
                      <h2 className=' font-plus-jakarta text-[40px] font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#717171] to-white leading-[1.1]'>Web <br /> Experiences</h2>
                      <p className=' font-space-grotesk text-[#707070]'>
                        Landing pages, portfolios, brand sites
                        Scalable web platforms
  
                      </p>
                    </div>
                </div>
               </div>
               <div className='border-[#232323]   border-1 p-3 rounded-xl shadow-xl'>
                 <div className='p-6  md:h-[55vh] flex flex-col justify-between bg-[#212121] rounded-lg '>
                   <div className='flex justify-between pb-[100px]'>
                  <div>
                   <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="#707070"  strokeWidth="0.2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-puzzle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" /></svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
  
                  </div>
  
  
                  </div>
                  <div>
                    <h2 className=' font-plus-jakarta text-[40px] font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#717171] to-white leading-[1.1]'>Design Collaboration</h2>
                  <p className=' font-space-grotesk text-[#707070]'>
                    Work hand-in-hand with your designer
                    Or wear both hats when needed
  
                  </p>
                  </div>
                </div>
               </div>
  
         
  
              </div>
               {/* <p className='text-3xl pb-[10px] text-[#b0b0b0]'>What I Offer :</p>
                <p className=' font-space-grotesk text-[16px] text-[#707070]'>
                  Want something off-script? I’m all ears. I thrive on custom ideas.
                </p>
      */}
  
        
  
  
  
  
  
  
  
  
  
       </section>
      
      
     </>
    )}
  </div>
    
  

  )
}

export default Page