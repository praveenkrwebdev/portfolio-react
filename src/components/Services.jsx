const services = [
  {
    title: 'WordPress Development',
    desc: 'Custom themes, plugins and full site builds tailored to your brand and goals.',
    iconBg: 'linear-gradient(135deg,rgba(139,92,246,0.2),rgba(34,211,238,0.1))',
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" stroke="#8B5CF6" strokeWidth="1.8"/><path d="M3 9h18M9 21V9" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></>,
    tags: [
      { label:'Elementor', style:{background:'rgba(139,92,246,0.15)',color:'#a78bfa'} },
      { label:'ACF', style:{background:'rgba(34,211,238,0.1)',color:'#67e8f9'} },
      { label:'Custom Plugins', style:{background:'rgba(255,255,255,0.06)',color:'#9ca3af'} },
    ],
  },
  {
    title: 'WooCommerce',
    desc: 'High-converting ecommerce stores with smooth checkout, payments and inventory.',
    iconBg: 'linear-gradient(135deg,rgba(34,211,238,0.2),rgba(139,92,246,0.1))',
    icon: <><path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#22D3EE" strokeWidth="1.8"/><path d="M9 11l2 2 4-4" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 7h8M8 15h5" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/></>,
    tags: [
      { label:'WooCommerce', style:{background:'rgba(34,211,238,0.15)',color:'#67e8f9'} },
      { label:'Payments', style:{background:'rgba(139,92,246,0.1)',color:'#a78bfa'} },
      { label:'SEO', style:{background:'rgba(255,255,255,0.06)',color:'#9ca3af'} },
    ],
  },
  {
    title: 'Shopify',
    desc: 'Modern Shopify stores with custom themes, apps and conversion-focused design.',
    iconBg: 'linear-gradient(135deg,rgba(236,72,153,0.2),rgba(139,92,246,0.1))',
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#EC4899" strokeWidth="1.8" strokeLinejoin="round"/><path d="M2 17l10 5 10-5" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12l10 5 10-5" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/></>,
    tags: [
      { label:'Shopify', style:{background:'rgba(236,72,153,0.15)',color:'#f9a8d4'} },
      { label:'Liquid', style:{background:'rgba(139,92,246,0.1)',color:'#a78bfa'} },
      { label:'Apps', style:{background:'rgba(255,255,255,0.06)',color:'#9ca3af'} },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="section-title">
        <h2 className="section-bg">SERVICES</h2>
        <h2 className="section-main">Services</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(s => (
          <div className="service-card" key={s.title}>
            <div className="service-icon" style={{background:s.iconBg}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">{s.icon}</svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.tags.map(t => (
                <span key={t.label} className="text-xs px-3 py-1 rounded-full" style={t.style}>{t.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
