import { useState, useEffect, useRef } from "react";

const certificates = [
    {
        title: "Codeathon 2025 - Certificate of Achievement",
        organization: "Technosignia Software Training Institute",
        duration: "2025",
        description: "Participated in Codeathon 2025 in recognition of outstanding performance, skill, and innovation in competitive programming.",
        certificateNo: "Issued by: Mr. Mallinath Paratnale, Director",
        media: [
            { type: "image", src: "/codeathon-2025.jpg.png" },
            { type: "image", src: "/Codethon 1.jpg" },
            { type: "image", src: "/Codethon2.jpg" },
            { type: "video", src: "/codethon3.mp4" },
        ],
    },
    {
        title: "Python Full Stack Developer Course",
        organization: "Technosignia Software Training Institute",
        duration: "June 2024 – December 2024 (7 months)",
        description: "Successfully completed comprehensive Python Full Stack Development course covering frontend and backend technologies.",
        certificateNo: "Certificate NO: TS-2025250901",
        media: [{ type: "image", src: "/FullStack- Developer Certification.jpg" }],
        fitMode: "contain",
    },
    {
        title: "Frontend Development Internship",
        organization: "StarCentauri Technologies Pvt Ltd, Pune",
        duration: "Jun 2025 – Dec 2025 (6 months)",
        description: "Worked as Frontend Intern on live projects using React.js, Next.js, and MySQL. Services were satisfactory.",
        certificateNo: "Issued: Jul 2025",
        media: [{ type: "image", src: "/intership complted 1.png" }],
        fitMode: "contain",
    },
];

function CertCard({ cert, index }) {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const timerRef = useRef(null);
    const videoRef = useRef(null);
    const fit = cert.fitMode || "cover";

    const goTo = (i) => {
        if (i === active || animating) return;
        setAnimating(true);
        setTimeout(() => {
            setActive(i);
            setAnimating(false);
        }, 250);
    };

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActive(prev => {
                const next = (prev + 1) % cert.media.length;
                setAnimating(true);
                setTimeout(() => setAnimating(false), 250);
                return next;
            });
        }, 3000);
    };

    useEffect(() => {
        if (cert.media.length <= 1) return;
        const current = cert.media[active];
        if (current.type === "video") {
            clearInterval(timerRef.current);
        } else {
            startTimer();
        }
        return () => clearInterval(timerRef.current);
    }, [active]);

    const current = cert.media[active];

    return (
        <div className="cert-card-new" data-aos="fade-up" data-aos-delay={index * 100}>
            {/* Media Area */}
            <div className="cert-media-area">
                <div className={`cert-media-inner ${animating ? "cert-fade-out" : "cert-fade-in"}`}>
                    {current.type === "video" ? (
                        <video
                            ref={videoRef}
                            src={current.src}
                            autoPlay
                            muted
                            playsInline
                            onEnded={() => goTo((active + 1) % cert.media.length)}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                    ) : (
                        <img
                            src={current.src}
                            alt={cert.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: fit,
                                objectPosition: "center",
                                display: "block",
                                background: fit === "contain" ? "#fff" : "transparent",
                            }}
                        />
                    )}
                </div>

                {/* Dots — only if multiple media */}
                {cert.media.length > 1 && (
                    <div className="cert-dots-bar">
                        {cert.media.map((item, i) => (
                            <button
                                key={i}
                                className={`cert-dot-btn ${i === active ? "active" : ""}`}
                                onClick={() => goTo(i)}
                                aria-label={`Slide ${i + 1}`}
                            >
                                {item.type === "video" && <i className="fas fa-play" style={{ fontSize: "0.5rem" }}></i>}
                            </button>
                        ))}
                    </div>
                )}

                {/* Slide counter */}
                {cert.media.length > 1 && (
                    <div className="cert-counter">{active + 1} / {cert.media.length}</div>
                )}
            </div>

            {/* Info Area */}
            <div className="cert-info-new">
                <h3>{cert.title}</h3>
                <p className="cert-org"><i className="fas fa-building" style={{ marginRight: "6px" }}></i>{cert.organization}</p>
                <p className="cert-duration"><i className="fas fa-calendar-alt" style={{ marginRight: "6px" }}></i>{cert.duration}</p>
                <p className="cert-desc">{cert.description}</p>
                <p className="cert-no"><i className="fas fa-certificate" style={{ marginRight: "6px" }}></i>{cert.certificateNo}</p>
            </div>
        </div>
    );
}

export default function Certifications() {
    return (
        <section className="certifications" id="certifications">
            <div className="cert-header" data-aos="fade-up">
                <p className="section-tag">Achievements</p>
                <h2 className="section-title">Certifications & Experience</h2>
                <p className="section-desc">
                    Professional certifications and internship experience that showcase my learning journey and practical expertise in software development.
                </p>
            </div>

            <div className="cert-grid">
                {certificates.map((cert, i) => (
                    <CertCard key={i} cert={cert} index={i} />
                ))}
            </div>
        </section>
    );
}
