export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-left" data-aos="fade-right" data-aos-delay="100">
                <div className="about-img-wrap">
                    <div className="about-img-frame">
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop"
                            alt="Coding Laptop"
                            style={{ objectPosition: 'center' }}
                        />
                    </div>
                    <div className="about-img-accent"></div>
                </div>
            </div>
            <div className="about-right" data-aos="fade-left" data-aos-delay="200">
                <p className="section-tag">About me</p>
                <h2 className="section-title">I am a Passionate Software Developer</h2>
                <p className="section-desc">
                    Full Stack Developer with hands-on experience in building responsive and scalable web applications using React.js, Next.js, and Python. Strong expertise in frontend development, component-based architecture, and REST API integration, along with solid backend fundamentals. Skilled in creating high-performance, user-friendly interfaces. Familiar with modern technologies including AI/Generative AI.
                </p>
                <div className="about-features">
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="300">
                        <i className="fas fa-briefcase"></i>
                        <h4>Experience</h4>
                        <p>Frontend Development Intern at StarCentauri Technologies Pvt. Ltd, Pune (Jun 2025 – Dec 2025).</p>
                    </div>
                    <div className="feature-card" data-aos="flip-left" data-aos-delay="450">
                        <i className="fas fa-graduation-cap"></i>
                        <h4>Education</h4>
                        <p>B.C.A from Dr. Babasaheb Ambedkar Marathwada University, Chh. Sambhaji Nagar (2022–2025). MCA from Aditya Engineering College (Currently Pursuing).</p>
                    </div>
                </div>
                <button className="btn-primary" data-aos="fade-up" data-aos-delay="550"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    HIRE ME
                </button>
            </div>
        </section>
    )
}
