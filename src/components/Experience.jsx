export default function Experience() {
    const experiences = [
        {
            role: "Frontend Development Intern",
            company: "StarCentauri Technologies Pvt. Ltd",
            location: "Pune, Maharashtra",
            period: "Jun 2025 – Dec 2025",
            type: "Internship",
            icon: "fas fa-briefcase",
            color: "var(--primary)",
            points: [
                "Developed and enhanced reusable UI components using React.js for training institute platforms.",
                "Built responsive web pages ensuring compatibility across devices and browsers.",
                "Collaborated with backend and design teams to implement UI features.",
                "Identified and fixed UI bugs, improving performance and usability.",
                "Handled assigned modules independently from development to testing and bug fixing.",
            ],
            tech: ["React.js", "JavaScript", "CSS3", "REST API"],
        },
    ]

    const education = [
        {
            degree: "Master of Computer Applications (M.C.A)",
            college: "Aditya Engineering College",
            period: "2025 – Present",
            icon: "fas fa-graduation-cap",
            status: "Currently Pursuing",
        },
        {
            degree: "Bachelor of Computer Applications (B.C.A)",
            college: "Tulsi College of Computer Science and Information Technology",
            university: "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhaji Nagar",
            period: "Jun 2022 – Jun 2025",
            icon: "fas fa-graduation-cap",
        },
    ]

    return (
        <section className="experience" id="experience">
            <div className="exp-header" data-aos="fade-up">
                <p className="section-tag">Journey</p>
                <h2 className="section-title">Experience & Education</h2>
            </div>

            <div className="exp-container">
                <div className="exp-col" data-aos="fade-right" data-aos-delay="100">
                    <h3 className="exp-col-title"><i className="fas fa-briefcase"></i> Work Experience</h3>
                    {experiences.map((exp, i) => (
                        <div className="exp-card" key={i}>
                            <div className="exp-card-header">
                                <div>
                                    <h4 className="exp-role">{exp.role}</h4>
                                    <p className="exp-company"><i className="fas fa-building"></i> {exp.company}</p>
                                    <p className="exp-meta">
                                        <span><i className="fas fa-map-marker-alt"></i> {exp.location}</span>
                                        <span><i className="fas fa-calendar"></i> {exp.period}</span>
                                        <span className="exp-badge">{exp.type}</span>
                                    </p>
                                </div>
                            </div>
                            <ul className="exp-points">
                                {exp.points.map((point, j) => (
                                    <li key={j}><i className="fas fa-chevron-right"></i> {point}</li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {exp.tech.map(t => (
                                    <span key={t} className="exp-tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="exp-col" data-aos="fade-left" data-aos-delay="200">
                    <h3 className="exp-col-title"><i className="fas fa-graduation-cap"></i> Education</h3>
                    {education.map((edu, i) => (
                        <div className="exp-card" key={i}>
                            <h4 className="exp-role">{edu.degree}</h4>
                            <p className="exp-company"><i className="fas fa-university"></i> {edu.college}</p>
                            {edu.university && (
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '4px' }}></i>{edu.university}
                                </p>
                            )}
                            <p className="exp-meta">
                                <span><i className="fas fa-calendar"></i> {edu.period}</span>
                                {edu.status && (
                                    <span className="exp-badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981', border: '1px solid #10b981' }}>
                                        {edu.status}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
