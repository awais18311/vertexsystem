import { motion } from 'framer-motion'
import './SectionTitle.css'

export default function SectionTitle({ eyebrow, title, text, align = 'left', light = false }) {
  return (
    <motion.div
      className={`vx-section-title vx-section-title--${align} ${light ? 'vx-section-title--light' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p className="vx-section-title__text">{text}</p>}
    </motion.div>
  )
}
