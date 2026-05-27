const projects = [
    {
        icon: 'fas fa-id-card',
        title: 'Personal Portfolio Website',
        category: ['Next.js', 'JavaScript', 'CSS3', 'Web3Forms'],
        period: 'March 2026',
        desc: 'Fully responsive personal portfolio built with Next.js. Features dynamic theme switcher, smooth AOS animations, TypeAnimation hero section, Web3Forms contact form integration, and sections for Skills, Projects, Certifications & Experience.',
        github: 'https://github.com/dhanugholap/portfolio-Next-JS',
        // live: 'https://dhananjaygholap.vercel.app/',
    },
    {
        icon: 'fas fa-users',
        title: 'Student Management System',
        category: ['React.js', 'REST API', 'MySQL'],
        period: 'Aug 2025',
        desc: 'Dynamic Student Management System using React.js for efficiently managing student records. Implemented CRUD functionalities, reusable modular components, and fully responsive cross-browser compatible UI.',
        github: 'https://github.com/dhanugholap',
        live: null,
    },
]

export default function Portfolio() {
    return (
        <section className="portfolio" id="work">
            <p className="section-tag" data-aos="fade-up">Portfolio</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">My Projects</h2>
            <p className="section-desc" style={{ margin: '0 auto' }} data-aos="fade-up" data-aos-delay="150">
                Here are some of the projects I have built using React.js, Next.js, Python and more.
            </p>
            <div className="portfolio-grid">
                {projects.map((p, i) => (
                    <div className="portfolio-card" key={p.title}
                        data-aos="fade-up" data-aos-delay={i * 150}>
                        <div className="portfolio-card-inner">
                            <i className={p.icon}></i>
                            <h3>{p.title}</h3>
                            <p className="portfolio-period">{p.period}</p>
                            <p className="portfolio-desc">{p.desc}</p>
                            <div className="portfolio-tags">
                                {p.category.map(tag => (
                                    <span key={tag} className="portfolio-tag">{tag}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                                <button
                                    onClick={() => window.open(p.github, '_blank')}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        padding: '7px 16px', borderRadius: '20px',
                                        border: '1px solid var(--border)', color: 'var(--text)',
                                        fontSize: '0.78rem', fontWeight: 600,
                                        background: 'var(--bg-card)', transition: 'all 0.2s',
                                        cursor: 'pointer',
                                    }}>
                                    <i className="fab fa-github" /> GitHub
                                </button>
                                {p.live && (
                                    <button
                                        onClick={() => window.open(p.live, '_blank')}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            padding: '7px 16px', borderRadius: '20px',
                                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                            color: '#fff', fontSize: '0.78rem', fontWeight: 600,
                                            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                                        }}>
                                        <i className="fas fa-external-link-alt" /> Live
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
