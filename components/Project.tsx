import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <>
    <div className='grid md:grid-cols-3 gap-1  gap-y-10'>
        <div className=' flex flex-col gap-10 md:border-r md:pr-5 border-[#eeeeee26] '>
            <div>
                <div className='h-[250px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>
            <div>
                <div className='h-[250px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>

           
        </div>
        <div className=' flex flex-col gap-10 md:border-r md:px-5 border-[#eeeeee26]'>
            <div>
                <div className='h-[500px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>
            <div>
                <div className='h-[250px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>
           
        </div>
        <div className=' flex flex-col gap-10  md:pl-5 '>
             <div>
                <div className='h-[260px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>
            <div>
                <div className='h-[250px] bg-[#636363]'></div>
                <div className='flex justify-between pt-4'>
                    <h2>XY’s Portfolio</h2>
                    <Link href="#">
                        <p className=' opacity-70'>View Site</p>
                    </Link>

                </div>
                <div className=' text-[#707070] pt-2 font-space-grotesk '>
                    <p className=' text-[14px]'>
                    A retro-styled photography portfolio with cinematic scroll effects.
                    </p>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Project