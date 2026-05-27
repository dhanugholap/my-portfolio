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
                "Developed and enhanced reusable UI components using React.js for training institute and web-based platforms.",
                "Designed and implemented responsive web pages ensuring compatibility across desktop, tablet, and mobile devices.",
                "Collaborated with backend developers and design teams to integrate frontend functionalities and improve user experience.",
                "Worked on debugging, testing, and resolving UI-related issues to improve application stability and performance.",
                "Gained hands-on experience in version control systems like Git and collaborative development workflows using GitHub.",
            ],
            tech: ["React.js", "MySQL", "Redux", "JavaScript", "CSS3", "REST API"],
        },
    ]

    const education = [
        {
            degree: "Master of Computer Applications (M.C.A)",
            college: "Aditya Engineering College, Beed",
            period: "2026 – 2027",
            icon: "fas fa-graduation-cap",
            status: "Currently Pursuing",
        },
        {
            degree: "Bachelor of Computer Applications (B.C.A)",
            college: "Tulsi College of Computer Science and Information Technology",
            university: "Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhaji Nagar",
            period: "Jun 2022 – Jun 2025",
            grade: "CGPA: 7.0",
            icon: "fas fa-graduation-cap",
        },
        {
            degree: "Higher Secondary Education (12th)",
            college: "Champavati Secondary & Higher Secondary School, Beed",
            period: "Jun 2021 – Jun 2022",
            grade: "Percentage: 72.33%",
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
                                {edu.grade && (
                                    <span style={{
                                        background: 'rgba(59,130,246,0.12)',
                                        color: '#2563eb',
                                        border: '1.5px solid #2563eb',
                                        fontWeight: '700',
                                        padding: '2px 10px',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                    }}>
                                        <i className="fas fa-star" style={{ marginRight: '4px' }}></i>{edu.grade}
                                    </span>
                                )}
                                {edu.status && (
                                    <span style={{
                                        background: 'rgba(16,185,129,0.12)',
                                        color: '#059669',
                                        border: '1.5px solid #059669',
                                        fontWeight: '600',
                                        padding: '2px 10px',
                                        borderRadius: '20px',
                                        fontSize: '0.75rem',
                                    }}>
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
