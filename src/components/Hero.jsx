import { useState, useEffect, useRef } from 'react'

const words = ['Hello','नमस्ते','வணக்கம்','నమస్కారం','السلام','નમસ્તે','ਸਤ ਸ੍ਰੀ ਅਕਾਲ']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [wi, setWi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const parallaxRef = useRef(null)

  // typing effect
  useEffect(() => {
    const word = words[wi]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(word.slice(0, ci + 1))
        if (ci + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1400)
        } else {
          setCi(c => c + 1)
        }
      } else {
        setTyped(word.slice(0, ci - 1))
        if (ci - 1 === 0) {
          setDeleting(false)
          setWi(w => (w + 1) % words.length)
          setCi(0)
        } else {
          setCi(c => c - 1)
        }
      }
    }, deleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [wi, ci, deleting])

  // parallax
  useEffect(() => {
    if (window.innerWidth <= 768) return
    const onScroll = () => {
      if (parallaxRef.current)
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <div>
        <div className="typing-wrap">
          <span className="typed-text">{typed}</span>
          <span className="cursor-blink" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          I'm Praveen - <span className="gradient">Web Designer & Developer in Delhi NCR</span>
        </h1>

        <p className="text-gray-400 mt-6">
          Helping businesses and agencies in Delhi, South Delhi, Noida, and across India build fast,
          high-converting websites using WordPress, Wix, Shopify, and WooCommerce.
        </p>
        <p className="text-gray-400">
          I deliver modern, SEO-friendly, and performance-driven websites that help brands grow online
          and generate real results.
        </p>

        <div className="mt-8 flex gap-3">
          <a href="https://wa.me/919815898567" target="_blank" rel="noreferrer" className="hero-btn-primary">
            <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(236,72,153,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            Start A Project
          </a>
          <a href="#projects" className="hero-btn-ghost">
            <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"/>
                <path d="M8 21h8M12 17v4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            View My Work
          </a>
        </div>
      </div>

      <div className="parallax" ref={parallaxRef}>
        <img className="rounded-xl" src="/Praveen-shrama-web-design-and-development.webp"
          alt="Praveen - Web Designer & Developer" />
      </div>
    </section>
  )
}
