const skillList = [
    { name: 'React JS', level: 92, icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Next JS', level: 87, icon: 'fas fa-code', color: 'var(--primary)' },
    { name: 'JavaScript (ES6+)', level: 88, icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'Python', level: 90, icon: 'fab fa-python', color: '#3776ab' },
    { name: 'HTML5 / CSS3', level: 95, icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'MySQL', level: 85, icon: 'fas fa-database', color: '#00758f' },
    { name: 'REST API Integration', level: 83, icon: 'fas fa-plug', color: '#10b981' },
    { name: 'Git / GitHub', level: 85, icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'Node.js (Basic)', level: 65, icon: 'fab fa-node-js', color: '#68a063' },
    { name: 'Redux', level: 78, icon: 'fas fa-layer-group', color: '#764abc' },
    { name: 'AI & GenAI Tools', level: 80, icon: 'fas fa-robot', color: '#8b5cf6' },
]

export default function Skills() {
    return (
        <section className="skills" id="skill">
            <div className="skills-left" data-aos="fade-right">
                <p className="section-tag">my skill</p>
                <h2 className="section-title">I am expert in</h2>
                <p className="section-desc">
                    Hands-on experience with React.js, Next.js, Python, and MySQL.
                    Certified Python Full Stack Developer from TechnoSignia Software Training Institute.
                    Proficient in Git, GitHub, VS Code, Postman, and AI tools like ChatGPT, GitHub Copilot, Gemini, Claude, Cursor AI.
                    Additional knowledge in AI / Generative AI and Prompt Engineering.
                </p>
                <br />
                <div className="cert-card" data-aos="fade-up" data-aos-delay="200">
                    <i className="fas fa-trophy"></i>
                    Python Full Stack Developer Certification — TechnoSignia (Jun 2025)
                </div>
                <div className="cert-card" data-aos="fade-up" data-aos-delay="350">
                    <i className="fas fa-certificate"></i>
                    Internship Completion Certificate — StarCentauri Technologies (Jul–Dec 2025)
                </div>
                <div className="cert-card" data-aos="fade-up" data-aos-delay="500">
                    <i className="fas fa-robot"></i>
                    Generative AI Landscape — Infosys Springboard (May 2026)
                </div>
            </div>
            <div className="skills-right">
                {skillList.map((s, i) => (
                    <div className="skill-item" key={s.name}
                        data-aos="fade-left" data-aos-delay={i * 80}>
                        <div className="skill-header">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {s.icon === 'ts-badge' ? (
                                    <span style={{
                                        background: '#3178c6',
                                        color: '#fff',
                                        fontSize: '0.6rem',
                                        fontWeight: 800,
                                        borderRadius: '4px',
                                        padding: '1px 4px',
                                        width: '18px',
                                        textAlign: 'center',
                                        flexShrink: 0,
                                        letterSpacing: '0.5px',
                                    }}>TS</span>
                                ) : (
                                    <i className={s.icon} style={{ color: s.color, fontSize: '1.1rem', width: '18px', textAlign: 'center' }} />
                                )}
                                {s.name}
                            </span>
                            <span>{s.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
