import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import { coreValues } from '../data/siteData'
import './About.css'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Vertex Systems"
        title="Built to Support the People Behind the Truck"
        text="Vertex Systems provides professional dispatch support designed to simplify the business side of trucking."
      />

      {/* Our Story */}
      <section className="section">
        <div className="container vx-story">
          <motion.div
            className="vx-story__image"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?q=80&w=1200&auto=format&fit=crop"
              alt="Dispatcher coordinating freight logistics at a desk with a map"
            />
          </motion.div>
          <div className="vx-story__text">
            <SectionTitle eyebrow="Who We Are" title="Who We Are" />
            <p>Vertex Systems is a carrier-focused truck dispatching company dedicated to helping owner-operators and trucking businesses simplify their daily operations.</p>
            <p>From finding suitable freight to communicating with brokers and organizing load details, our team helps take care of the dispatch workload so carriers can focus on what they do best — moving freight.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section vx-mission">
        <div className="vx-mission__bg" aria-hidden="true" />
        <div className="vx-mission__overlay" aria-hidden="true" />
        <div className="container vx-mission__inner">
          <span className="eyebrow eyebrow--light">Our Mission</span>
          <h2>Our Mission</h2>
          <p>Our mission is to provide dependable dispatch support that helps carriers save time, stay organized, and keep their trucks moving.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <SectionTitle align="center" eyebrow="What Drives Us" title="Our Core Values" />
          <div className="vx-values-grid">
            {coreValues.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                className="vx-value-card"
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="vx-value-card__icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Keep Your Truck Moving?"
        text="Let Vertex Systems handle the dispatch workload while you focus on delivering freight safely and efficiently."
        buttonLabel="Talk to Our Team"
        to="/contact"
      />
    </>
  )
}
