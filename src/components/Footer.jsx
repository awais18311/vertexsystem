import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MoveRight } from 'lucide-react'
import { navLinks, footerServices, socialLinks } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="vx-footer">
      <div className="container vx-footer__top">
        <div className="vx-footer__col vx-footer__brand">
          <Link to="/" className="vx-logo">
            <span className="vx-logo__mark" aria-hidden="true">
              <MoveRight size={20} strokeWidth={2.6} />
            </span>
            <span className="vx-logo__text">
              VERTEX <span>SYSTEMS</span>
            </span>
          </Link>
          <p>Professional truck dispatching support built to help carriers find freight, communicate with brokers, and stay focused on the road.</p>
          <div className="vx-footer__social">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="vx-footer__col">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="vx-footer__col">
          <h3>Our Services</h3>
          <ul>
            {footerServices.map((s) => (
              <li key={s}><Link to="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div className="vx-footer__col">
          <h3>Contact</h3>
          <ul className="vx-footer__contact">
            <li><Phone size={16} /><a href="tel:+18005550188">+1 (800) 555-0188</a></li>
            <li><Mail size={16} /><a href="mailto:info@dispatchvs.com">info@dispatchvs.com</a></li>
            <li><MapPin size={16} /><span>Joliet, IL 60435</span></li>
          </ul>
        </div>
      </div>

      <div className="vx-footer__bottom">
        <div className="container vx-footer__bottom-inner">
          <p>© 2026 Vertex Systems. All Rights Reserved.</p>
          <div className="vx-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
