import { motion } from 'framer-motion'
import Button from './Button'
import './CTASection.css'

export default function CTASection({ heading, text, buttonLabel, to = '/contact' }) {
  return (
    <section className="vx-cta">
      <div className="vx-cta__bg" aria-hidden="true" />
      <div className="vx-cta__overlay" aria-hidden="true" />
      <div className="container vx-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{heading}</h2>
          <p>{text}</p>
          <Button to={to} variant="primary">{buttonLabel}</Button>
        </motion.div>
      </div>
    </section>
  )
}
