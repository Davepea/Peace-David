'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// Import ChevronDown icon





// Update navItems - remove 'Shop' since we'll handle it separately
const navItems = ['Works', 'About Me', 'Get in Touch']

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)
  // Add dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navContainerRef = useRef<HTMLDivElement | null>(null)
  const audioElementRef = useRef<HTMLAudioElement | null>(null)
  // Add dropdown ref for click outside detection
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const { y: currentScrollY } = useWindowScroll()


  useEffect(() => {
    if (!navContainerRef.current) return

    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    if (!navContainerRef.current) return

    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    const audio = audioElementRef.current
    if (!audio) return

    if (isAudioPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isAudioPlaying])


  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null; 
  }
  if (pathname.startsWith("/community")) {
    return null; 
  }

  return (
    <>
      <div
        ref={navContainerRef}
        className='!fixed inset-x-0 top-10 z-50  border-none transition-all duration-700 sm:inset-x-1 text-[#707070]'
      >
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
          <nav className='flex size-full items-start justify-between p-4 md:px-[50px]'>
            {/* Logo Section */}
            <div className='flex items-center gap-7'>
              <Link href='/'>
            <div className='flex gap-[2px] items-center'>
                
                <div className='md:flex hidden gap-[2px]'>
                  <b className='font-title font-bold text-[16px]'>PEACE.DAVID</b>
                  
                </div>
              </div>
              </Link>
            </div>

           <div>
             {/* Nav Items */}
            <div className='hidden md:flex  gap-6 text-end  font-space-mono '>
              
              {/* Other nav items */}
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className='nav-hover-btn text-[12px] font-[200] text-[#707070]'
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className='flex h-full items-center gap-1'>
              <div className='ml-10 flex gap-4 items-center'>
                
               
                {/* <button
                  className='music flex items-center space-x-0.5'
                  onClick={toggleAudioIndicator}
                >
                  <audio
                    ref={audioElementRef}
                    className='hidden'
                    src='/audio/loop.mp3'
                    loop
                  />
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={`indicator-line cursor-pointer ${
                        isIndicatorActive ? 'active' : ''
                      }`}
                      style={{ animationDelay: `${bar * 0.1}s` }}
                    />
                  ))}
                </button> */}
              </div>
            </div>
           </div>
          </nav>
        </header>
      </div>
  
    </>
  )
}

export default Navbar