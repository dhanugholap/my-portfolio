import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState({ loading: false, success: '', error: '' })

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ loading: true, success: '', error: '' })

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '2fa8514b-e4e3-494c-921a-26dc072ab16c',
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                }),
            })
            const data = await res.json()
            if (data.success) {
                setStatus({ loading: false, success: 'Thank you! ✅ Message sent. I will get back to you soon.', error: '' })
                setForm({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus({ loading: false, success: '', error: '❌ Something went wrong. Please try again.' })
            }
        } catch {
            setStatus({ loading: false, success: '', error: '❌ Failed to send. Please try again.' })
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-left" data-aos="fade-right">
                <p className="section-tag">contact</p>
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-desc">
                    Feel free to reach out for collaborations, freelance work, or just a friendly hello.
                </p>
                <br />
                {[
                    { icon: 'fas fa-envelope', label: 'Email', value: 'dhanugholap007@gmail.com', link: 'mailto:dhanugholap007@gmail.com' },
                    { icon: 'fas fa-phone', label: 'Phone', value: '+91 8805451745', link: 'tel:+918805451745' },
                    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Pune, Maharashtra, India', link: null },
                    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'dhanu07', link: 'https://linkedin.com/in/dhanu07' },
                    { icon: 'fab fa-instagram', label: 'Instagram', value: '@30.dhanu_', link: 'https://instagram.com/30.dhanu_' },
                ].map(item => (
                    <div className="contact-info-item" key={item.label}>
                        <div className="contact-icon"><i className={item.icon}></i></div>
                        <div>
                            <h4>{item.label}</h4>
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.82rem' }}>
                                    {item.value}
                                </a>
                            ) : (
                                <p>{item.value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="contact-right" data-aos="fade-left">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                    </div>
                    {status.success && <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>{status.success}</p>}
                    {status.error && <p style={{ color: '#f87171', fontWeight: '600', fontSize: '0.9rem' }}>{status.error}</p>}
                    <button type="submit" className="btn-primary" disabled={status.loading}>
                        {status.loading ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                </form>
            </div>
        </section>
    )
}
