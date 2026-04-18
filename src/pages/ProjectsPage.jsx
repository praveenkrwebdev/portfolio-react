import { allProjects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'160px 24px 80px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'700px',height:'700px',borderRadius:'50%',background:'radial-gradient(circle,rgba(139,92,246,0.13) 0%,transparent 70%)',pointerEvents:'none'}}></div>
        <div style={{position:'relative',zIndex:1,maxWidth:'760px',margin:'auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(139,92,246,0.12)',boxShadow:'inset 0 0 0 1px rgba(139,92,246,0.3)',borderRadius:'50px',padding:'6px 16px',marginBottom:'28px'}}>
            <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#8B5CF6',animation:'blink .7s step-end infinite'}}></div>
            <span style={{fontSize:'12px',fontWeight:600,color:'#a78bfa',letterSpacing:'.06em',textTransform:'uppercase'}}>Portfolio</span>
          </div>
          <h1 style={{fontSize:'clamp(2.4rem,6vw,4.2rem)',fontWeight:800,lineHeight:1.1,marginBottom:'20px'}}>
            Work That <span style={{background:'linear-gradient(135deg,#8B5CF6,#ee4622)',WebkitBackgroundClip:'text',color:'transparent'}}>Speaks</span> For Itself
          </h1>
          <p style={{color:'rgba(255,255,255,0.45)',fontSize:'16px',lineHeight:1.7,maxWidth:'520px',margin:'0 auto 36px'}}>
            A curated collection of real projects — built with precision, delivered on time, and live in the wild.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://wa.me/919815898567" target="_blank" rel="noreferrer" className="hero-btn-primary">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round"/></svg>
              Start A Project
            </a>
            <a href="/#contact" className="hero-btn-ghost">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{padding:'0 24px 100px',maxWidth:'1200px',margin:'auto'}}>
        <div style={{textAlign:'center',marginBottom:'60px'}}>
          <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'10px'}}>
            Featured <span style={{background:'linear-gradient(135deg,#8B5CF6,#22D3EE)',WebkitBackgroundClip:'text',color:'transparent'}}>Projects</span>
          </h2>
          <p style={{color:'rgba(255,255,255,0.35)',fontSize:'14px'}}>Real clients. Real results. Live & delivering.</p>
        </div>

        <div className="proj-grid">
          {allProjects.map(p => (
            <div className="pcard" key={p.id}>
              <div className="pcard-img" style={p.imgStyle || {}}>
                <img src={p.img} alt={p.title} style={p.imgStyle ? {objectFit:'contain',padding:'40px',width:'100%',height:'100%'} : {}} />
                <div className="pcard-overlay">
                  <a href={p.link} target="_blank" rel="noreferrer" className="pcard-btn">View Live ↗</a>
                </div>
              </div>
              <div className="pcard-body">
                <span className="ptag" style={p.tagStyle}>{p.tag}</span>
                <h3 className="ptitle">{p.title}</h3>
                <p className="pdesc">{p.desc}</p>
                <div className="pstack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
