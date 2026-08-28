const projects = [
    {
        icon: 'fas fa-id-card',
        title: 'Personal Portfolio Website',
        category: ['Next.js', 'JavaScript', 'CSS3', 'Web3Forms'],
        period: 'March 2026',
        desc: 'Fully responsive personal portfolio built with Next.js. Features dynamic theme switcher, smooth AOS animations, TypeAnimation hero section, Web3Forms contact form integration, and sections for Skills, Projects, Certifications & Experience.',
        github: 'https://github.com/dhanugholap/portfolio-Next-JS',
        live: 'https://dhanugholap.vercel.app',
    },
    {
        icon: 'fas fa-building',
        title: 'Real Estate Application',
        category: ['React.js', 'Node.js', 'SQL'],
        period: 'Aug 2025',
        desc: 'Full-stack real estate website with property highlights, pricing, amenities, gallery, location details, and a site visit enquiry flow. Built using React.js, Node.js and SQL for a responsive property browsing experience.',
        github: null,
        live: 'https://realesatate1.netlify.app/',
    },
    // {
    //     icon: 'fas fa-shopping-cart',
    //     title: 'E-Commerce Frontend Application',
    //     category: ['React.js', 'Redux', 'JavaScript', 'CSS3'],
    //     period: 'July 2025',
    //     desc: 'Full-featured e-commerce platform frontend with product catalog, shopping cart, filtering and sorting. Implemented state management with Redux and responsive design.',
    //     github: 'https://github.com/dhanugholap/ecommerce-frontend',
    //     live: null,
    // },
    // {
    //     icon: 'fas fa-film',
    //     title: 'Movie Recommendation Engine',
    //     category: ['React.js', 'REST API', 'JavaScript'],
    //     period: 'June 2025',
    //     desc: 'Movie recommendation app with API integration (TMDB). Features movie search, ratings, genre filtering, and detailed movie information with responsive UI.',
    //     github: 'https://github.com/dhanugholap/movie-app',
    //     live: null,
    // },
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
                            <div className="portfolio-card-topline">
                                <span className="portfolio-index">0{i + 1}</span>
                                <span className="portfolio-period">{p.period}</span>
                            </div>
                            <div className="portfolio-icon"><i className={p.icon}></i></div>
                            <h3>{p.title}</h3>
                            <p className="portfolio-desc">{p.desc}</p>
                            <div className="portfolio-tags">
                                {p.category.map(tag => (
                                    <span key={tag} className="portfolio-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="portfolio-actions">
                                {p.github && (
                                    <a className="portfolio-action portfolio-action-secondary" href={p.github} target="_blank" rel="noreferrer">
                                        <i className="fab fa-github" /> GitHub
                                    </a>
                                )}
                                {p.live && (
                                    <a className="portfolio-action portfolio-action-primary" href={p.live} target="_blank" rel="noreferrer">
                                        <i className="fas fa-external-link-alt" /> Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
