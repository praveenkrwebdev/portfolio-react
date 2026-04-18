import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | string
  const [loading, setLoading] = useState(false)

  const handle = e => {
    let val = e.target.value
    if (e.target.name === 'phone') val = val.replace(/[^0-9]/g, '').slice(0, 10)
    setForm(f => ({ ...f, [e.target.name]: val }))
  }

  const submit = async e => {
    e.preventDefault()
    setStatus(null)
    const { name, email, phone, message } = form
    if (!name || !email || !phone || !message) return setStatus('Please fill all fields')
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,}$/.test(email)) return setStatus('Enter a valid email')
    if (!/^[0-9]{10}$/.test(phone)) return setStatus('Enter valid 10 digit phone number')

    setLoading(true)
    try {
      const data = new FormData()
      Object.entries(form).forEach(([k,v]) => data.append(k, v))
      data.append('_template', 'table')
      data.append('_captcha', 'false')
      data.append('_subject', 'New Portfolio Message!')
      const res = await fetch('https://formsubmit.co/praveenkr.webdev@gmail.com', {
        method: 'POST', body: data, headers: { Accept: 'application/json' }
      })
      if (res.ok) { setStatus('success'); setForm({ name:'', email:'', phone:'', message:'' }) }
      else throw new Error()
    } catch { setStatus('Something went wrong. Try again.') }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="section-title">
        <h2 className="section-bg">CONTACT</h2>
        <h2 className="section-main">Contact</h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-info">
          <h3 className="text-2xl font-bold mb-3">Let's work <span className="gradient">together</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Looking for a web designer and developer in Delhi NCR, South Delhi, or Noida? Let's discuss your project.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            I work with businesses, startups, and agencies across Delhi NCR, India, and international clients.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { label:'Email', value:'praveenkr.webdev@gmail.com', bg:'rgba(139,92,246,0.15)', icon:<><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#8B5CF6" strokeWidth="1.8"/><path d="M22 6l-10 7L2 6" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></> },
              { label:'WhatsApp', value:'+91 98158 98567', bg:'rgba(37,211,102,0.15)', icon:<path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#25D366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/> },
              { label:'Website', value:'artsbypraveen.in', bg:'rgba(34,211,238,0.12)', icon:<><circle cx="12" cy="12" r="10" stroke="#22D3EE" strokeWidth="1.8"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round"/></> },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:item.bg}}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-sm text-gray-200">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-side">
          <form onSubmit={submit} className="flex flex-col gap-0">
            {[
              { name:'name', placeholder:'Your Name', type:'text', icon:<><circle cx="12" cy="8" r="4" stroke="#8B5CF6" strokeWidth="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"/></> },
              { name:'email', placeholder:'Email Address', type:'email', icon:<><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#8B5CF6" strokeWidth="1.8"/><path d="M22 6l-10 7L2 6" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"/></> },
              { name:'phone', placeholder:'Phone (10 digits)', type:'tel', icon:<path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round"/> },
            ].map(f => (
              <div className="form-field" key={f.name}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">{f.icon}</svg>
                <input className="form-input" name={f.name} type={f.type}
                  placeholder={f.placeholder} value={form[f.name]}
                  onChange={handle} required />
              </div>
            ))}

            <div className="form-field textarea-field">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#8B5CF6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <textarea rows="4" className="form-input" name="message"
                placeholder="Tell me about your project" value={form.message}
                onChange={handle} required />
            </div>

            <button type="submit" disabled={loading}
              className="btn w-full mt-2" style={{borderRadius:'12px'}}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p style={{color:'#22c55e',marginTop:'10px'}}>✅ Thank you! Your message has been sent.</p>}
            {status && status !== 'success' && <p style={{color:'#ef4444',marginTop:'10px'}}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
