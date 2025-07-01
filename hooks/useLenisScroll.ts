'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2, // Increase touch sensitivity for mobile
    
      // Mobile-specific fixes
      autoResize: true,
      syncTouch: true, // Important for mobile touch events
      syncTouchLerp: 0.1, // Smoother touch interpolation
      touchInertiaMultiplier: 35, // Better touch inertia on mobile
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Additional mobile scroll fix - prevent default touch behavior conflicts
    const preventTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchmove', preventTouchMove, { passive: false })

    return () => {
      lenis.destroy()
      document.removeEventListener('touchmove', preventTouchMove)
    }
  }, [])
}