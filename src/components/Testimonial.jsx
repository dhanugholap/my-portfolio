const testimonials = [
    {
        text: "Dhananjay delivered our React.js project on time with clean code and great attention to detail. His frontend skills are impressive for someone at his level.",
        name: "Starcentauri Technologies ",
        role: "Software Engineer — Intern",
        avatar: "S",
    },
]

export default function Testimonial() {
    return (
        <section className="testimonial" id="testimonial">
            <p className="section-tag" data-aos="fade-up">Testimonials</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">What People Say</h2>
            <div className="testimonial-grid">
                {testimonials.map((t, i) => (
                    <div className="testimonial-card" key={i}
                        data-aos="zoom-in" data-aos-delay={i * 150}>
                        <div className="stars">★★★★★</div>
                        <p className="testimonial-text">"{t.text}"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">{t.avatar}</div>
                            <div className="author-info">
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
