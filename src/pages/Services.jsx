import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/siteData'
import './Services.css'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional Dispatch Services for Carriers"
        text="Vertex Systems handles the dispatch workload so carriers can spend more time focused on the road."
      />

      <section className="section">
        <div className="container">
          <div className="vx-services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Put Your Truck to Work"
        text="Tell Vertex Systems about your equipment and preferred lanes and discover how professional dispatch support can simplify your operation."
        buttonLabel="Get Started"
        to="/contact"
      />
    </>
  )
}
