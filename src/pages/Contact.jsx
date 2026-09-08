import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { equipmentOptions, socialLinks } from '../data/siteData'
import './Contact.css'

const initialForm = {
  fullName: '',
  companyName: '',
  phone: '',
  email: '',
  equipment: '',
  lanes: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[+0-9()\-.\s]{7,20}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.equipment) errors.equipment = 'Please select your equipment type.'
  if (!form.message.trim()) errors.message = 'Tell us a little about your operation.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const foundErrors = validate(form)
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Trucking Operation"
        text="Have questions about dispatching with Vertex Systems? Send us an inquiry and our team will get back to you."
      />

      <section className="section">
        <div className="container vx-contact-grid">
          {/* Info column */}
          <div className="vx-contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <span className="vx-contact-info__icon"><Phone size={19} /></span>
                <div>
                  <span className="vx-contact-info__label">Phone</span>
                  <a href="tel:+1 815 219 7597 ">+1 (815) 219 7595 </a>
                </div>
              </li>
              <li>
                <span className="vx-contact-info__icon"><Mail size={19} /></span>
                <div>
                  <span className="vx-contact-info__label">Email</span>
                  <a href="mailto:info@dispatchvs.com">info@dispatchvs.com</a>
                </div>
              </li>
              <li>
                <span className="vx-contact-info__icon"><MapPin size={19} /></span>
                <div>
                  <span className="vx-contact-info__label">Office</span>
                  <span>Joliet, IL 60435</span>
                </div>
              </li>
              <li>
                <span className="vx-contact-info__icon"><Clock size={19} /></span>
                <div>
                  <span className="vx-contact-info__label">Business Hours</span>
                  <span>Monday – Friday<br />8:00 AM – 6:00 PM EST</span>
                </div>
              </li>
            </ul>

            <div className="vx-contact-social">
              <span className="vx-contact-info__label">Follow Us</span>
              <div>
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="vx-contact-form-wrap">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="vx-contact-success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2 size={44} />
                  <h3>Thank you!</h3>
                  <p>Your inquiry has been received. Our team will contact you soon.</p>
                  <button type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="vx-contact-form"
                  noValidate
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="vx-form-row">
                    <div className="vx-form-field">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName" name="fullName" type="text"
                        value={form.fullName} onChange={handleChange}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && <span className="vx-form-error" id="fullName-error">{errors.fullName}</span>}
                    </div>
                    <div className="vx-form-field">
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        id="companyName" name="companyName" type="text"
                        value={form.companyName} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="vx-form-row">
                    <div className="vx-form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && <span className="vx-form-error" id="phone-error">{errors.phone}</span>}
                    </div>
                    <div className="vx-form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email" name="email" type="email"
                        value={form.email} onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <span className="vx-form-error" id="email-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="vx-form-row">
                    <div className="vx-form-field">
                      <label htmlFor="equipment">Equipment Type</label>
                      <select
                        id="equipment" name="equipment"
                        value={form.equipment} onChange={handleChange}
                        aria-invalid={!!errors.equipment}
                        aria-describedby={errors.equipment ? 'equipment-error' : undefined}
                      >
                        <option value="">Select equipment</option>
                        {equipmentOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.equipment && <span className="vx-form-error" id="equipment-error">{errors.equipment}</span>}
                    </div>
                    <div className="vx-form-field">
                      <label htmlFor="lanes">Preferred Lanes</label>
                      <input
                        id="lanes" name="lanes" type="text" placeholder="e.g. TX to CA"
                        value={form.lanes} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="vx-form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message" rows="5"
                      value={form.message} onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <span className="vx-form-error" id="message-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="vx-btn vx-btn--primary">
                    <span>Send Inquiry</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
