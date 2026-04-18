import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 5, label: 'Years Experience' },
  { target: 50, label: 'Projects Delivered' },
  { target: 50, label: 'Satisfied Clients' },
]

function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = Math.ceil(1800 / target)
        let cur = 0
        const timer = setInterval(() => {
          cur++
          setCount(cur)
          if (cur >= target) clearInterval(timer)
        }, step)
      }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="glass grid grid-cols-1 md:grid-cols-3">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <div className="stat-num">
              <Counter target={s.target} />+
            </div>
            <div className="text-gray-300 font-semibold mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
