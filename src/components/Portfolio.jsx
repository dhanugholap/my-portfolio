const projects = [
    {
        icon: 'fas fa-globe',
        title: 'Personal Portfolio Website',
        category: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        period: 'Aug 2025 – Sep 2025',
        desc: 'Developed a personal portfolio using Next.js and TypeScript. Optimized performance and SEO using modern routing techniques. Designed fully responsive UI using Tailwind CSS.',
        github: 'https://github.com/dhanu07',
        live: null,
    },
    {
        icon: 'fas fa-users',
        title: 'Student Management System',
        category: ['React.js', 'REST API', 'MySQL'],
        period: 'Mar 2025 – Jun 2025',
        desc: 'Developed a React.js-based application with dynamic CRUD operations. Designed modular and reusable components for scalability. Implemented responsive UI and integrated frontend with backend APIs for real-time data handling.',
        github: 'https://github.com/dhanu07',
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
