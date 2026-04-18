import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const glowRef = useRef(null)

  useEffect(() => {
    const move = e => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px'
        glowRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <Hero />
      <ClientLogos />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}
