import { motion } from 'framer-motion'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import Stats from '../components/Stats'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import {
  trustIndicators, whyCards, processSteps, equipmentList, testimonials,
} from '../data/siteData'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="vx-hero">
        <div className="vx-hero__bg" aria-hidden="true" />
        <div className="vx-hero__overlay" aria-hidden="true" />
        <div className="vx-hero__route" aria-hidden="true">
          <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M-50 380 C 250 260, 500 420, 750 240 S 1150 60, 1260 20" />
          </svg>
        </div>

        <div className="container vx-hero__inner">
          <motion.span
            className="eyebrow eyebrow--light"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
   
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Your Truck. Our Dispatch. <span>Your Success.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Vertex Systems helps carriers find quality freight, communicate with brokers, negotiate rates, and manage the dispatch process — so you can stay focused on the road.
          </motion.p>

          <motion.div
            className="vx-hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <Button to="/contact" variant="primary">Get Started</Button>
            <Button to="/services" variant="outline" icon={false}>Explore Services</Button>
          </motion.div>

          <motion.ul
            className="vx-hero__trust"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
          >
            {trustIndicators.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <Stats />

      {/* Why Vertex Systems */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Vertex Systems"
            title="Your Business Moves. We Handle the Dispatch."
            text="Running a trucking operation involves much more than driving. Vertex Systems helps reduce the daily administrative workload by handling load searches, broker communication, rate discussions, and dispatch coordination."
          />
          <div className="vx-why-grid">
            {whyCards.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                className="vx-why-card"
                key={title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="vx-why-card__icon"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section vx-process">
        <div className="container">
          <SectionTitle
            align="center"
            eyebrow="Our Process"
            title="How Vertex Systems Works"
          />
          <div className="vx-process__timeline">
            <div className="vx-process__line" aria-hidden="true" />
            {processSteps.map((step, i) => (
              <motion.div
                className="vx-process__step"
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="vx-process__num">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Equipment"
            title="Dispatch Support for Different Equipment"
          />
          <div className="vx-equipment-grid">
            {equipmentList.map(({ icon: Icon, name, text }, i) => (
              <motion.div
                className="vx-equipment-card"
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <span className="vx-equipment-card__icon"><Icon size={24} /></span>
                <h3>{name}</h3>
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionTitle align="center" eyebrow="Carrier Partners" title="What Our Carrier Partners Say" />
          <div className="vx-testimonial-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
         
        </div>
      </section>
    </>
  )
}
