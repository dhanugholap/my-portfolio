export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-left" data-aos="fade-right" data-aos-delay="100">
                <div style={{
                    display: 'inline-block',
                    padding: '3px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent), var(--primary))',
                    backgroundSize: '300% 300%',
                    animation: 'borderRotate 4s linear infinite',
                    boxShadow: '0 0 25px var(--glow)',
                    overflow: 'hidden',
                }}>
                    <img
                        src="/DSC_6460.jpeg"
                        alt="Dhananjay Gholap"
                        style={{
                            width: '280px',
                            height: '320px',
                            objectFit: 'cover',
                            objectPosition: 'center 0%',
                            borderRadius: '20px',
                            display: 'block',
                            transform: 'scale(1.3)',
                            transformOrigin: 'top center',
                        }}
                    />
                </div>
            </div>

            <div className="about-right" data-aos="fade-left" data-aos-delay="200">
                <p className="section-tag">About Me</p>
                <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>Passionate Full Stack Developer</h2>

                <p className="section-desc" style={{ marginBottom: '0.5rem' }}>
                    I'm <strong>Dhananjay Gholap</strong>, a Full Stack Developer specializing in <strong>React.js, Next.js</strong> and <strong>Python</strong>. I build responsive, high-performance applications with clean interfaces and reliable backend integration.
                </p>

                <p className="section-desc" style={{ marginBottom: '0.5rem' }}>
                    Currently pursuing <strong>MCA</strong> at Aditya Engineering College, after completing <strong>B.C.A</strong> with 7.0 CGPA. As a Frontend Development Intern at <strong>StarCentauri Technologies</strong>, I worked with React.js, MySQL and REST APIs on real-world projects.
                </p>

                <div className="about-features" style={{ margin: '0.8rem 0' }}>
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="300">
                        <i className="fas fa-briefcase"></i>
                        <h4>Experience</h4>
                        <p>Frontend Development Intern at StarCentauri Technologies Pvt. Ltd., Pune — React.js, MySQL, Redux & REST APIs.</p>
                    </div>
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="450">
                        <i className="fas fa-graduation-cap"></i>
                        <h4>Education</h4>
                        <p>
                            <strong>B.C.A</strong> — Tulsi College of Computer Science and IT, Beed<br />
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Dr. Babasaheb Ambedkar Marathwada University (2022–2025)</span><br />
                            <strong>MCA</strong> — Aditya Engineering College, Beed<br />
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>2026 – 2027 | Currently Pursuing</span>
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1rem' }} data-aos="fade-up" data-aos-delay="550">
                    <button className="btn-primary"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        <i className="fas fa-paper-plane" style={{ marginRight: '8px' }} />
                        HIRE ME
                    </button>
                    <a className="btn-outline-green" href="/Dhananjay-Gholap-Resume.pdf" target="_blank" rel="noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <i className="fas fa-download" />
                        RESUME
                    </a>
                    <a href="https://github.com/dhanugholap" target="_blank" rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '10px 20px', borderRadius: '25px',
                            border: '1px solid var(--border)', color: 'var(--text)',
                            fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none',
                            background: 'var(--bg-card)', transition: 'all 0.3s',
                        }}>
                        <i className="fab fa-github" />
                        GITHUB
                    </a>
                </div>
            </div>
        </section>
    )
}
