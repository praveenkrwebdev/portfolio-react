import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/#' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav className="fixed top-2 w-full flex justify-center px-3 py-2 z-50">
        <div className="glass max-w-6xl w-full flex justify-between items-center px-6 py-3">

          <div className="font-bold flex items-center gap-2">
            <a href="/">
              <img src="/praveen-logo.svg" className="main-logo" alt="ArtsByPraveen"
                onError={e => e.target.style.display='none'} />
            </a>
          </div>

          <div className="hidden md:flex gap-1 text-gray-300 items-center">
            {navItems.map(item => (
              <a key={item.label} href={item.href}
                className="nav-link px-4 py-2 rounded-lg text-sm font-medium hover:text-white transition relative">
                {item.label}
              </a>
            ))}
            <a href="https://wa.me/919815898567" target="_blank" rel="noreferrer"
              className="hero-btn-primary ml-3">Get A Quote</a>
          </div>

          <button onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg" style={{ background:'rgba(255,255,255,0.06)' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'60px',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 16px',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <img src="/praveen-web-design-main-logo.svg" alt="logo" style={{height:'32px',width:'auto'}}
            onError={e => e.target.style.display='none'} />
          <button className="menu-close" onClick={() => setMenuOpen(false)}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {[
          { href:'/#', label:'Home', stroke:'#8B5CF6', icon:<><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke="#8B5CF6" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 21V12h6v9" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></> },
          { href:'/#about', label:'About', icon:<><circle cx="12" cy="8" r="4" stroke="#22D3EE" strokeWidth="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></> },
          { href:'/#services', label:'Services', icon:<><rect x="3" y="3" width="18" height="18" rx="3" stroke="#22D3EE" strokeWidth="1.8"/><path d="M3 9h18M9 21V9" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></> },
          { href:'/#projects', label:'Projects', icon:<><rect x="2" y="3" width="20" height="14" rx="2" stroke="#EC4899" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round"/></> },
          { href:'/#contact', label:'Contact', icon:<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/> },
        ].map(item => (
          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
            <svg width="15" height="15" fill="none" viewBox="0 0 24 24">{item.icon}</svg>
            {item.label}
          </a>
        ))}

        <div className="menu-divider" />
        <a href="https://wa.me/919815898567?text=Hello%20there" target="_blank" rel="noreferrer"
          className="mt-2" style={{background:'rgba(37,211,102,0.12)',color:'#25D366',borderRadius:'10px'}}>
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.812A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#25D366"/>
            <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" fill="white"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  )
}
