import { useState } from 'react'
import { Mail, Send, Copy, Check, Sparkles, MessageSquare, Clock, MapPin } from 'lucide-react'

export function ContactSection({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isCopied, setIsCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2500)
    } catch (err) {
      console.error('Failed to copy email', err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const trimmedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    if (!trimmedFormData.name || !trimmedFormData.email || !trimmedFormData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('https://contact-api-5jn9.onrender.com/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trimmedFormData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result?.message || result?.detail || 'Unable to send your message right now.')
      }

      setStatus({
        type: 'success',
        message: result.message || 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending your message.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="content-section" aria-label="Contact information">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">06.</span>
          Get In Touch
        </h2>
      </div>

      <div className="contact-container">
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-main)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}
        >
          Let's Build Something Together
        </h3>

        <p className="contact-lead-text">
          Whether you have an exciting project opportunity, a question about my work, or simply want to connect — my inbox is always open. I'll do my best to get back to you!
        </p>

        {/* Quick Email & Copy Bar */}
        <div className="quick-contact-bar">
          <div className="quick-email-label">
            <Mail size={18} style={{ color: 'var(--accent-teal)' }} />
            <span>{personal.email}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="quick-copy-btn"
              title="Copy email to clipboard"
            >
              {isCopied ? (
                <>
                  <Check size={14} style={{ color: '#5eead4' }} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="btn-primary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.75rem' }}
            >
              <span>Say Hello</span>
            </a>
          </div>
        </div>

        {/* Status Alert */}
        {status && (
          <div
            className={`status-alert ${
              status.type === 'success' ? 'status-success' : 'status-error'
            }`}
            style={{ marginBottom: '1.5rem' }}
          >
            {status.type === 'success' ? <Sparkles size={18} /> : null}
            <span>{status.message}</span>
          </div>
        )}

        {/* Interactive Direct Message Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-grid-2">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name <span style={{ color: 'var(--accent-teal)' }}>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email <span style={{ color: 'var(--accent-teal)' }}>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject" className="form-label">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Project Collaboration / Job Opportunity"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span style={{ color: 'var(--accent-teal)' }}>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Subin, I'd like to discuss a project..."
              className="form-textarea"
            />
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} style={{ color: 'var(--accent-teal)' }} />
                <span>Quick reply</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} style={{ color: 'var(--accent-teal)' }} />
                <span>{personal.location}</span>
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-solid"
            >
              {isSubmitting ? (
                <span>Sending message...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
