import { motion } from 'framer-motion'
import './PageHero.css'

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="vx-page-hero">
      <div className="vx-page-hero__grid" aria-hidden="true" />
      <div className="container vx-page-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
          <h1>{title}</h1>
          {text && <p>{text}</p>}
        </motion.div>
      </div>
    </section>
  )
}
