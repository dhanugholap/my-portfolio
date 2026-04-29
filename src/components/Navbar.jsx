import { useState, useEffect } from 'react'

const links = ['Home', 'About Us', 'Services', 'Skill', 'Work', 'Certifications', 'Contact']

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('Home')
    const [scrolled, setScrolled] = useState(false)
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.body.classList.remove('theme-light', 'theme-green')
        document.body.classList.add('dark')
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            const sections = ['home', 'about', 'services', 'skill', 'work', 'certifications', 'contact']
            for (const id of sections) {
                const el = document.getElementById(id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        setActive(id.charAt(0).toUpperCase() + id.slice(1))
                        break
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (name) => {
        const id = name.toLowerCase().replace(' us', '').replace(' ', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setActive(name)
        setOpen(false)
    }

    const toggleTheme = () => {
        const themes = ['dark', 'theme-green', 'theme-light']
        const currentIndex = themes.indexOf(theme)
        const nextIndex = (currentIndex + 1) % themes.length
        const nextTheme = themes[nextIndex]

        document.body.classList.remove(...themes)
        document.body.classList.add(nextTheme)
        setTheme(nextTheme)
    }

    return (
        <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 30px rgba(0,212,170,0.1)' } : {}}>
            <div className="nav-logo-wrap">
                <div className="nav-logo">Dhananjay<span> Gholap</span></div>
            </div>

            <ul className={`nav-links ${open ? 'open' : ''}`}>
                {links.map(l => (
                    <li key={l}>
                        <a
                            href={`#${l.toLowerCase().replace(' us', '').replace(' ', '')}`}
                            className={active === l ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); scrollTo(l) }}
                        >
                            {l}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="nav-right">
                <button className="nav-btn" onClick={() => scrollTo('Contact')}>LETS TALK</button>
                <button className="nav-btn" onClick={toggleTheme} style={{ marginLeft: '0.5rem' }}>
                    {theme === 'dark' ? '🌙' : theme === 'theme-green' ? '🟢' : '☀️'}
                </button>

                <div className="hamburger" onClick={() => setOpen(!open)}>
                    <span /><span /><span />
                </div>
            </div>
        </nav>
    )
}
