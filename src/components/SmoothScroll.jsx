import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

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
      lenis.destroy()
    }
  }, [])

  return children
}