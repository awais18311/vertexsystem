import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import './PrivacyPolicy.css'

const sections = [
  {
    title: '1. Introduction',
    body: `Vertex Systems ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or submit an inquiry through our contact form.`,
  },
  {
    title: '2. Information We Collect',
    body: `When you submit our contact form, we may collect the information you provide, such as your full name, company name, phone number, email address, equipment type, preferred lanes, and any message details.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `Information submitted through this website is used only to respond to your inquiry and to discuss potential dispatch services with you. We do not sell, rent, or trade your information to third parties.`,
  },
  {
    title: '4. Cookies',
    body: `This website does not use tracking cookies or third-party advertising cookies. Basic browser functionality may still store minimal technical data required for the site to load correctly.`,
  },
  {
    title: '5. Data Security',
    body: `We take reasonable measures to protect any information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '6. Third-Party Links',
    body: `Our website may contain links to third-party sites, such as social media pages. We are not responsible for the privacy practices or content of those external sites.`,
  },
  {
    title: '7. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.`,
  },
  {
    title: '8. Contact Us',
    body: `If you have any questions about this Privacy Policy, please contact us at dispatch@vertexsystems.com or +1 (800) 555-0188.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text="Last updated: January 2026. Please read this policy to understand how Vertex Systems handles your information."
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