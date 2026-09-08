import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import './TermsConditions.css'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the Vertex Systems website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use this website.`,
  },
  {
    title: '2. Nature of Services',
    body: `Vertex Systems provides truck dispatching support services, including load searching, broker communication, rate negotiation, documentation assistance, and dispatch coordination for carriers and owner-operators. This website is for informational purposes and does not constitute a binding service agreement.`,
  },
  {
    title: '3. No Guarantee of Loads or Rates',
    body: `While we work to find suitable freight and negotiate competitive rates, Vertex Systems does not guarantee the availability of loads, specific rates, or outcomes of any broker negotiation.`,
  },
  {
    title: '4. Carrier Responsibilities',
    body: `Carriers remain responsible for maintaining valid operating authority, insurance, licensing, and compliance with all applicable federal, state, and local transportation regulations.`,
  },
  {
    title: '5. Website Content',
    body: `All content on this website, including text, graphics, logos, and images, is provided for general informational purposes. Statistics and testimonials shown on this website are illustrative and used for demonstration purposes.`,
  },
  {
    title: '6. Limitation of Liability',
    body: `Vertex Systems shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on any information presented here.`,
  },
  {
    title: '7. Changes to These Terms',
    body: `We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: '8. Governing Law',
    body: `These Terms & Conditions are governed by the laws applicable in the state of Texas, USA, without regard to conflict of law principles.`,
  },
  {
    title: '9. Contact Us',
    body: `If you have any questions about these Terms & Conditions, please contact us at info@dispatchvs.com or +1 (815) 219 7595 `,
  },
]

export default function TermsConditions() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        text="Last updated: January 2026. Please read these terms carefully before using the Vertex Systems website."
      />

      <section className="section">
        <div className="container vx-policy">
          {sections.map((s, i) => (
            <motion.div
              className="vx-policy__block"
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}