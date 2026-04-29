const skillList = [
    { name: 'React JS', level: 92 },
    { name: 'Next JS', level: 87 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 90 },
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'MySQL', level: 85 },
    { name: 'Redux', level: 78 },
    { name: 'REST API Integration', level: 83 },
    { name: 'Git / GitHub', level: 85 },
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
                    Proficient in Git, GitHub, VS Code, Postman, Webpack, and MySQL Workbench.
                    Additional knowledge in AI / Generative AI / LLM and Secure Coding Practices.
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
            </div>
            <div className="skills-right">
                {skillList.map((s, i) => (
                    <div className="skill-item" key={s.name}
                        data-aos="fade-left" data-aos-delay={i * 80}>
                        <div className="skill-header">
                            <span>{s.name}</span>
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
