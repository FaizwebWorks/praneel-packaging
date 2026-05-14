import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 2,
      infinite: false,
    })

    window.lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)

    function updateLenis(time) {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    function handleClick(e) {
      const link = e.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        lenis.scrollTo(target, { offset: 80 })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      gsap.ticker.remove(updateLenis)
      lenis.off('scroll', ScrollTrigger.update)
      if (window.lenis === lenis) {
        delete window.lenis
      }
      lenis.destroy()
    }
  }, [])

  return children
}
