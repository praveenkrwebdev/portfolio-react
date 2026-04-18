export default function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="glass max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-bold flex items-center gap-2 mb-3">
              <img src="/praveen-web-design-main-logo.svg" alt="ArtsByPraveen"
                style={{height:'36px',width:'auto',objectFit:'contain'}}
                onError={e => e.target.style.display='none'} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web Designer & Developer in Delhi NCR | WordPress, Wix, Shopify & WooCommerce Expert.
              Serving clients in South Delhi, Noida, Gurgaon, and across India.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-4 text-gray-200">Quick Links</div>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              {['about','services','projects','contact'].map(l => (
                <a key={l} href={`/#${l}`} className="hover:text-white transition capitalize">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4 text-gray-200">Get In Touch</div>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <span>praveenkr.webdev@gmail.com</span>
              <span>Available for freelance work</span>
            </div>
            <div className="flex gap-4 mt-5">
              {['in','gh','tw'].map(s => (
                <a key={s} href="#" className="glass w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition text-sm">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <span>© 2026 ArtsByPraveen. All rights reserved.</span>
          <span className="gradient font-medium">Designed & Built by Praveen</span>
        </div>
      </div>
    </footer>
  )
}
