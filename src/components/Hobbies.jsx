import { useState } from 'react'

const hobbies = [
    { name: 'Coding', icon: 'fas fa-laptop-code' },
    { name: 'AI / Machine Learning', icon: 'fas fa-robot' },
    { name: 'React JS', icon: 'fab fa-react' },
    { name: 'Next JS', icon: 'fas fa-code' },
    { name: 'Open Source', icon: 'fab fa-github' },
    { name: 'Problem Solving', icon: 'fas fa-brain' },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
    { name: 'Gaming', icon: 'fas fa-gamepad' },
    { name: 'Reading', icon: 'fas fa-book' },
    { name: 'Music', icon: 'fas fa-music' },
    { name: 'Photography', icon: 'fas fa-camera' },
    { name: 'Football', icon: 'fas fa-futbol' },
]

export default function Hobbies() {
    const [active, setActive] = useState('Coding')

    return (
        <section className="hobbies" id="hobbies">
            <p className="section-tag" data-aos="fade-up">Hobbies</p>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">Things I <span>Love to Do</span></h2>
            <div className="hobbies-grid" data-aos="fade-up" data-aos-delay="200">
                {hobbies.map(h => (
                    <div
                        key={h.name}
                        className={`hobby-tag ${active === h.name ? 'active' : ''}`}
                        onClick={() => setActive(h.name)}
                    >
                        <i className={h.icon}></i>
                        {h.name}
                    </div>
                ))}
            </div>
        </section>
    )
}
