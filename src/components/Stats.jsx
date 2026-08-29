import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../data/siteData'
import './Stats.css'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="vx-stat__value">
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="vx-stats">
      <div className="container vx-stats__grid">
        {stats.map((stat, i) => (
          <motion.div
            className="vx-stat"
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="vx-stat__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
      <p className="vx-stats__disclaimer container">Illustrative statistics for website demonstration.</p>
    </section>
  )
}
