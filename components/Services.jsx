const services = [
    { icon: 'fab fa-react', title: 'React JS Development', desc: 'Creating fast, dynamic and interactive frontend web applications using React JS with component-based architecture.' },
    { icon: 'fas fa-code', title: 'Next JS Development', desc: 'Building server-side rendered and statically generated web apps with Next.js for better performance and SEO.' },
    { icon: 'fab fa-python', title: 'Python Development', desc: 'Building backend systems, automation scripts and data processing applications using Python.' },
    { icon: 'fas fa-database', title: 'MySQL & Database', desc: 'Designing and managing relational databases with optimized queries and efficient data structures.' },
    { icon: 'fas fa-mobile-alt', title: 'Responsive UI Design', desc: 'Designing fully responsive, mobile-first interfaces that work seamlessly across all devices and browsers.' },
]

export default function Services() {
    return (
        <section className="services" id="services">
            <p className="section-tag" data-aos="fade-up">Services</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">What do I offer</h2>
            <p className="section-desc" data-aos="fade-up" data-aos-delay="150">
                I specialize in building modern, responsive web applications with clean code and great user experience.
            </p>
            <div className="services-grid">
                {services.map((s, i) => (
                    <div className="service-card" key={s.title}
                        data-aos="fade-up" data-aos-delay={i * 80}>
                        <div className="service-icon">
                            <i className={s.icon}></i>
                        </div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
