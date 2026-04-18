import { useRef, useState, useEffect } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [idx, setIdx] = useState(0)
  const trackRef = useRef(null)
  const touchX = useRef(0)
  const total = projects.length
  const all = [...projects, ...projects] // clone for infinite loop

  const cardW = () => {
    const card = trackRef.current?.querySelector('.proj-card')
    return card ? card.offsetWidth + 24 : 374
  }

  const move = (n, anim = true) => {
    if (!trackRef.current) return
    trackRef.current.style.transition = anim ? 'transform .45s ease' : 'none'
    trackRef.current.style.transform = `translateX(-${n * cardW()}px)`
  }

  useEffect(() => { move(idx, false) }, [])

  useEffect(() => {
    const onResize = () => move(idx, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [idx])

  const next = () => {
    const newIdx = idx + 1
    setIdx(newIdx)
    move(newIdx)
    if (newIdx >= total) setTimeout(() => { setIdx(0); move(0, false) }, 450)
  }

  const prev = () => {
    if (idx <= 0) {
      move(total, false)
      setTimeout(() => { setIdx(total - 1); move(total - 1) }, 20)
    } else {
      setIdx(idx - 1)
      move(idx - 1)
    }
  }

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="section-title">
        <h2 className="section-bg">PROJECTS</h2>
        <h2 className="section-main">Featured Work</h2>
        <p style={{position:'relative',color:'rgba(255,255,255,0.4)',fontSize:'14px',marginTop:'10px'}}>
          Here are some of the websites I have designed and developed for businesses and agencies across Delhi NCR, clients across India, and international projects.
        </p>
      </div>

      <div className="proj-nav">
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.3)'}}>
          Showing <span>{(idx % total) + 1}</span> of {total}
        </p>
        <div className="proj-nav-btns">
          <button type="button" onClick={prev}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button type="button" onClick={next}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div className="proj-carousel">
        <div className="proj-track" ref={trackRef}
          onTouchStart={e => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const d = touchX.current - e.changedTouches[0].clientX
            if (d > 40) next()
            else if (d < -40) prev()
          }}>
          {all.map((p, i) => (
            <div className="proj-card" key={`${p.id}-${i}`}>
              <div className="proj-img">
                <img src={p.img} alt={p.title} />
                <div className="proj-overlay">
                  <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">View Live ↗</a>
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-tag" style={p.tagStyle}>
                  <span className="proj-tag-dot" style={{background:p.dotColor}}></span>
                  {p.tag}
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex gap-3 justify-center">
        <a href="/projects" className="hero-btn-primary">
          <div style={{width:'28px',height:'28px',borderRadius:'8px',background:'rgba(236,72,153,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"/>
              <path d="M8 21h8M12 17v4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          View All Projects
        </a>
      </div>
    </section>
  )
}
