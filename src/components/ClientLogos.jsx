import { clientLogosRow1, clientLogosRow2 } from '../data/projects'

function MarqueeRow({ logos, reverse }) {
  const doubled = [...logos, ...logos]
  return (
    <div className="marquee-outer mb-5">
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {doubled.map((logo, i) => (
          <div className="logo-card" key={i}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="py-16 px-6">
      <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10">
        Trusted by businesses and agencies across Delhi NCR, South Delhi, Noida, and clients across India.
      </p>
      <MarqueeRow logos={clientLogosRow1} />
      <MarqueeRow logos={clientLogosRow2} reverse />
    </section>
  )
}
