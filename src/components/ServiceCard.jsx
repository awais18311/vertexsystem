import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './ServiceCard.css'

export default function ServiceCard({ index, title, summary, features }) {
  return (
    <motion.article
      className="vx-service-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
    >
      <span className="vx-service-card__num">{String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {features.map((f) => (
          <li key={f}>
            <Check size={16} strokeWidth={2.6} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
