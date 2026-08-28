import { TypeAnimation } from 'react-type-animation'
import { useEffect, useRef } from 'react'

function Particles() {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const particles = Array.from({ length: 30 }, () => ({ 
            x: Math.random() * canvas.width, 
            y: Math.random() * canvas.height, 
            r: Math.random() * 2 + 0.5, 
            dx: (Math.random() - 0.5) * 0.4, 
            dy: (Math.random() - 0.5) * 0.4, 
            alpha: Math.random() * 0.5 + 0.1,
            color: Math.random() > 0.5 ? '#00d4aa' : '#6c63ff',
        }))
        let raf
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.globalAlpha = p.alpha
                ctx.fill()
                p.x += p.dx; p.y += p.dy
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1
            })
            ctx.globalAlpha = 1
            raf = requestAnimationFrame(draw)
        }
        draw()
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
        window.addEventListener('resize', resize)
        return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
    }, [])
    return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />
}

export default function Hero() {
    return (
        <section className="hero" id="home">
            <Particles />
            <div className="hero-image" data-aos="zoom-in" data-aos-delay="200">
                <div className="hero-img-wrap">
                    <div className="hero-img-circle">
                        <img
                            src="/DSC_6460.jpeg"
                            alt="Dhananjay Gholap"
                            priority="true"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 15%',
                                transform: 'scale(1.1)',
                                filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                            }}
                        />
                    </div>
                </div>
                <div className="hero-badge">
                    ⚡ <span>Software Developer</span> | Engineer 
                </div>
            </div>

            <div className="hero-content">
                <h1 data-aos="fade-up" data-aos-delay="200">
                    Hey! I am<br />
                    <span className="hero-name">Dhananjay Gholap</span>
                </h1>
                <div className="hero-typing" data-aos="fade-up" data-aos-delay="300">
                    <TypeAnimation
                        sequence={['Python Full Stack Developer', 2200, 'React & Next.js Developer', 2200, 'Software Engineer', 2200]}
                        wrapper="span" speed={50} repeat={Infinity}
                    />
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="hero-desc-box">
                    <p>
                        Full Stack Developer building responsive, scalable web applications with React.js, Next.js, and Python. I focus on clean interfaces, reusable components, REST API integration, and practical end-to-end solutions.
                    </p>
                </div>
                <div className="hero-btns" data-aos="fade-up" data-aos-delay="500">
                    <button className="btn-primary hero-cta" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                        <span>LEARN MORE</span>
                    </button>
                    <button className="btn-dark hero-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        HIRE ME
                    </button>
                    <a className="btn-outline-green hero-cta" href="/Dhananjay-Gholap-Resume.pdf" target="_blank" rel="noreferrer">
                        <i className="fas fa-download"></i> RESUME
                    </a>
                </div>
                <div className="hero-socials" data-aos="fade-up" data-aos-delay="600">
                    <a href="https://github.com/dhanugholap" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/dhanu07" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/__dhanu_2005/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </section>
    )
}
