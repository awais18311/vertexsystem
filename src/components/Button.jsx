import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Button.css'

export default function Button({ to, href, onClick, type = 'button', variant = 'primary', icon = true, children, className = '' }) {
  const classes = `vx-btn vx-btn--${variant} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={18} className="vx-btn__icon" aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
