const plans = [
    {
        name: 'Basic',
        price: 120,
        featured: false,
        features: [
            'Single Page Website',
            'Responsive Design',
            'Contact Form',
            '3 Revisions',
            'Delivery in 3 Days',
        ],
    },
    {
        name: 'Standard',
        price: 350,
        featured: true,
        badge: 'Popular',
        features: [
            'Multi-Page Website',
            'React / Next.js Frontend',
            'API Integration',
            'Admin Dashboard',
            '7 Days Support',
        ],
    },
    {
        name: 'Premium',
        price: 700,
        featured: false,
        features: [
            'Full Stack Web App',
            'Python + React + MySQL',
            'AI Feature Integration',
            'Deployment Included',
            '30 Days Support',
        ],
    },
]

function formatUSD(value) {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

export default function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <p className="section-tag" data-aos="fade-up">Pricing</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Affordable Plans</h2>
            <p className="section-desc" data-aos="fade-up" data-aos-delay="150">
                Transparent pricing for every project size — from simple landing pages to full-stack web apps.
            </p>
            <div className="pricing-grid">
                {plans.map((p, i) => (
                    <div className={`pricing-card ${p.featured ? 'featured' : ''}`} key={p.name}
                        data-aos="fade-up" data-aos-delay={i * 130}>
                        {p.badge && <div className="pricing-badge">{p.badge}</div>}
                        <div className="pricing-plan">{p.name}</div>
                        <div className="pricing-price">
                            <div>{formatUSD(p.price)}<sub>/project</sub></div>
                        </div>
                        <ul className="pricing-features">
                            {p.features.map(f => (
                                <li key={f}><i className="fas fa-check"></i>{f}</li>
                            ))}
                        </ul>
                        <button className="pricing-btn"
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
