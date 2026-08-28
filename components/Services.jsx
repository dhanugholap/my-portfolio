const services = [
    { icon: 'fab fa-react', title: 'React JS Development', desc: 'Building fast, dynamic, and interactive frontend applications using React with component-based architecture, hooks, and state management for scalable solutions.' },
    { icon: 'fas fa-code', title: 'Next JS Development', desc: 'Developing server-side rendered and statically generated web apps with Next.js for superior performance, SEO optimization, and dynamic routing.' },
    { icon: 'fab fa-python', title: 'Python Development', desc: 'Building robust backend systems, automation scripts, and data processing applications using Python with clean, maintainable code.' },
    { icon: 'fas fa-database', title: 'MySQL & Databases', desc: 'Designing and managing relational databases with optimized queries, efficient data structures, and proper indexing strategies.' },
    { icon: 'fas fa-mobile-alt', title: 'Responsive UI/UX Design', desc: 'Creating fully responsive, mobile-first interfaces that work seamlessly across all devices with excellent user experience and accessibility.' },
    { icon: 'fas fa-code-branch', title: 'Full Stack Solutions', desc: 'Developing complete end-to-end solutions combining React.js frontend with Python backend, REST APIs, and database integration.' },
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
