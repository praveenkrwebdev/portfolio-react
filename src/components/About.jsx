const highlights = [
  { label:'Clean Code', bg:'rgba(139,92,246,0.08)', border:'rgba(139,92,246,0.2)', iconBg:'rgba(139,92,246,0.2)', icon:<path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#a78bfa" strokeWidth="1.8" strokeLinejoin="round"/>, icon2:<path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/> },
  { label:'On-Time Delivery', bg:'rgba(34,211,238,0.08)', border:'rgba(34,211,238,0.2)', iconBg:'rgba(34,211,238,0.15)', icon:<><circle cx="12" cy="12" r="10" stroke="#22D3EE" strokeWidth="1.8"/><path d="M12 6v6l4 2" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></> },
  { label:'Fast Performance', bg:'rgba(236,72,153,0.08)', border:'rgba(236,72,153,0.2)', iconBg:'rgba(236,72,153,0.15)', icon:<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/> },
  { label:'5★ Rated Work', bg:'rgba(251,191,36,0.08)', border:'rgba(251,191,36,0.2)', iconBg:'rgba(251,191,36,0.12)', icon:<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fbbf24" strokeWidth="1.8" strokeLinejoin="round"/> },
]

const techStack = [
  { label:'HTML5', color:'#e34c26', bg:'rgba(227,76,38,0.25)', hoverBg:'rgba(227,76,38,0.12)', icon:<><path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5L4 3z" stroke="#e34c26" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 8h8M8.5 12h7l-.5 5-3 1-3-1-.2-2" stroke="#e34c26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></> },
  { label:'CSS3', color:'#264de4', bg:'rgba(38,77,228,0.25)', hoverBg:'rgba(38,77,228,0.12)', icon:<><path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5L4 3z" stroke="#264de4" strokeWidth="1.8" strokeLinejoin="round"/><path d="M8 8h8M8 12h8" stroke="#264de4" strokeWidth="1.5" strokeLinecap="round"/></> },
  { label:'JavaScript', color:'#f7df1e', bg:'rgba(247,223,30,0.2)', hoverBg:'rgba(247,223,30,0.1)', icon:<><rect x="3" y="3" width="18" height="18" rx="2" stroke="#f7df1e" strokeWidth="1.8"/><path d="M8 17v-6M16 11c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2" stroke="#f7df1e" strokeWidth="1.5" strokeLinecap="round"/></> },
  { label:'PHP', color:'#777bb4', bg:'rgba(119,107,180,0.25)', hoverBg:'rgba(119,107,180,0.15)', icon:<path d="M12 3C7 3 3 5.5 3 8.5c0 1.5 1 2.8 2.5 3.8L5 17l4-1.5c1 .3 2 .5 3 .5 5 0 9-2.5 9-5.5S17 3 12 3z" stroke="#777bb4" strokeWidth="1.8" strokeLinejoin="round"/> },
  { label:'WordPress', color:'#21759b', bg:'rgba(33,117,155,0.25)', hoverBg:'rgba(33,117,155,0.15)', icon:<><circle cx="12" cy="12" r="9" stroke="#21759b" strokeWidth="1.8"/><path d="M12 3a9 9 0 010 18M3 12h18" stroke="#21759b" strokeWidth="1.5" strokeLinecap="round"/></> },
  { label:'WooCommerce', color:'#96588a', bg:'rgba(150,88,138,0.25)', hoverBg:'rgba(150,88,138,0.15)', icon:<><path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#96588a" strokeWidth="1.8"/><path d="M9 11l2 2 4-4" stroke="#96588a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></> },
  { label:'Shopify', color:'#95bf47', bg:'rgba(149,191,71,0.25)', hoverBg:'rgba(149,191,71,0.12)', icon:<><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#95bf47" strokeWidth="1.8" strokeLinejoin="round"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#95bf47" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></> },
  { label:'Wix', color:'#00b9e8', bg:'rgba(0,185,232,0.25)', hoverBg:'rgba(0,185,232,0.12)', icon:<><rect x="3" y="3" width="18" height="18" rx="3" stroke="#00b9e8" strokeWidth="1.8"/><path d="M8 12h8M12 8v8" stroke="#00b9e8" strokeWidth="1.5" strokeLinecap="round"/></> },
  { label:'React', color:'#61dafb', bg:'rgba(97,218,251,0.2)', hoverBg:'rgba(97,218,251,0.1)', icon:<><circle cx="12" cy="12" r="3" stroke="#61dafb" strokeWidth="1.8"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)"/></> },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto relative">
      <div className="section-title">
        <h2 className="section-bg">ABOUT</h2>
        <h2 className="section-main">About Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div style={{width:'40px',height:'2px',background:'linear-gradient(90deg,#8B5CF6,#22D3EE)'}}></div>
            <span className="text-xs uppercase tracking-widest" style={{color:'#a78bfa'}}>Who I Am</span>
          </div>
          <h3 className="text-3xl font-bold mb-5 leading-snug">
            Crafting digital experiences that <span className="gradient">convert & perform</span>
          </h3>
          <p className="leading-relaxed mb-4" style={{fontFamily:'Roboto,sans-serif',color:'rgba(255,255,255,0.7)',fontSize:'15px'}}>
            Hi, I'm <span className="text-white font-semibold">Praveen Sharma</span> — a web designer and developer based in Delhi NCR with 5+ years of experience working with businesses, startups, and agencies.
          </p>
          <p className="leading-relaxed mb-4" style={{fontFamily:'Roboto,sans-serif',color:'rgba(255,255,255,0.55)',fontSize:'15px'}}>
            I specialize in WordPress, WooCommerce, and Shopify development, creating fast, scalable, and SEO-optimized websites tailored to business goals.
          </p>
          <p className="leading-relaxed mb-4" style={{fontFamily:'Roboto,sans-serif',color:'rgba(255,255,255,0.55)',fontSize:'15px'}}>
            Along with local and agency work, I have also worked with international clients, delivering high-quality websites that meet global standards.
          </p>
          <p className="leading-relaxed mb-8" style={{fontFamily:'Roboto,sans-serif',color:'rgba(255,255,255,0.55)',fontSize:'15px'}}>
            Whether you need a business website, eCommerce store, or custom solution, I focus on building websites that not only look modern but also perform, convert, and grow your online presence.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map(h => (
              <div key={h.label} className="flex items-center gap-3 p-3 rounded-xl"
                style={{background:h.bg, boxShadow:`inset 0 0 0 1px ${h.border}`}}>
                <div style={{width:'32px',height:'32px',borderRadius:'8px',background:h.iconBg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">{h.icon}{h.icon2}</svg>
                </div>
                <span style={{fontSize:'13px',color:'rgba(255,255,255,0.8)',fontWeight:500}}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Card */}
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',inset:'-3px',borderRadius:'32px',background:'linear-gradient(135deg,#8B5CF6,#22D3EE,#EC4899)',padding:'3px',zIndex:0}}>
            <div style={{width:'100%',height:'100%',borderRadius:'30px',background:'#0B0F19'}}></div>
          </div>
          <div style={{position:'relative',zIndex:1,borderRadius:'28px',overflow:'hidden',background:'linear-gradient(135deg,rgba(139,92,246,0.1),rgba(34,211,238,0.05))',backdropFilter:'blur(20px)',boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.07)',padding:'32px'}}>
            <div style={{position:'absolute',top:'-60px',right:'-60px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(139,92,246,0.18),transparent 70%)',pointerEvents:'none'}}></div>

            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'24px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'28px',height:'2px',background:'linear-gradient(90deg,#8B5CF6,#22D3EE)'}}></div>
                <span style={{fontSize:'11px',textTransform:'uppercase',letterSpacing:'.1em',color:'#a78bfa'}}>Tech Stack & Tools</span>
              </div>
              <div style={{display:'inline-flex',alignItems:'center',gap:'5px',background:'rgba(37,211,102,0.12)',borderRadius:'50px',padding:'5px 12px',boxShadow:'inset 0 0 0 1px rgba(37,211,102,0.25)'}}>
                <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#25D366',animation:'blink .7s step-end infinite'}}></div>
                <span style={{fontSize:'11px',color:'#25D366',fontWeight:600}}>Available</span>
              </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'}}>
              {techStack.map(t => (
                <div key={t.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl"
                  style={{background:'rgba(255,255,255,0.05)',boxShadow:'inset 0 0 0 1px rgba(255,255,255,0.07)',transition:'.2s',cursor:'default'}}
                  onMouseOver={e => { e.currentTarget.style.background=t.hoverBg; e.currentTarget.style.transform='translateY(-4px)' }}
                  onMouseOut={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.transform='translateY(0)' }}>
                  <div style={{width:'36px',height:'36px',borderRadius:'10px',background:`linear-gradient(135deg,${t.bg},transparent)`,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">{t.icon}</svg>
                  </div>
                  <span className="text-xs font-medium text-gray-300">{t.label}</span>
                  <div style={{width:'100%',height:'2px',borderRadius:'2px',background:`linear-gradient(90deg,${t.color},transparent)`}}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
