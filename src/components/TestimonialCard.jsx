import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import './TestimonialCard.css'

export default function TestimonialCard({ name, role, quote, index = 0 }) {
  return (
    <motion.figure
      className="vx-testimonial"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <Quote className="vx-testimonial__icon" size={30} aria-hidden="true" />
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <span className="vx-testimonial__avatar" aria-hidden="true">{name.charAt(0)}</span>
        <div>
          <span className="vx-testimonial__name">{name}</span>
          <span className="vx-testimonial__role">{role}</span>
        </div>
      </figcaption>
    </motion.figure>
  )
}
