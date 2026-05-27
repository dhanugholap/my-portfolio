import { useState, useEffect, useRef } from 'react'

const links = ['Home', 'About Us', 'Certifications', 'Skill', 'Work', 'Services', 'Contact']

const themes = [
    { id: 'theme-light', color: '#ffffff', border: '#94a3b8', label: 'White' },
    { id: 'dark', color: '#0f172a', border: '#3b82f6', label: 'Black' },
    { id: 'theme-green', color: '#10b981', border: '#10b981', label: 'Green' },
]

const allThemeIds = themes.map(t => t.id)

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('Home')
    const [scrolled, setScrolled] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('theme-light')
    const [themeOpen, setThemeOpen] = useState(false)
    const themeRef = useRef(null)

    useEffect(() => {
        document.body.classList.remove(...allThemeIds)
        document.body.classList.add('theme-light')
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (themeRef.current && !themeRef.current.contains(e.target)) {
                setThemeOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
            const sections = ['home', 'about', 'certifications', 'skill', 'work', 'services', 'contact']
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

    const applyTheme = (themeId) => {
        document.body.classList.remove(...allThemeIds)
        document.body.classList.add(themeId)
        setCurrentTheme(themeId)
        setThemeOpen(false)
    }

    const activeTheme = themes.find(t => t.id === currentTheme)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={scrolled ? { boxShadow: '0 4px 30px rgba(0,212,170,0.1)' } : {}}>
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

                {/* Theme picker button + dropdown */}
                <div ref={themeRef} style={{ position: 'relative' }}>
                    <button
                        onClick={() => setThemeOpen(!themeOpen)}
                        title="Change Theme"
                        style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: 'var(--bg-card)',
                            border: '1.5px solid var(--border)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            outline: 'none',
                            position: 'relative',
                        }}
                    >
                        {/* Moon icon */}
                        <i className="fas fa-moon" style={{ fontSize: '1rem', color: 'var(--text)' }} />
                    </button>

                    {/* Dropdown */}
                    {themeOpen && (
                        <div style={{
                            position: 'absolute',
                            top: 'calc(100% + 10px)',
                            right: 0,
                            background: 'rgba(10,10,20,0.97)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border)',
                            borderRadius: '14px',
                            padding: '10px 8px',
                            minWidth: '150px',
                            zIndex: 99999,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            animation: 'dropIn 0.2s ease',
                        }}>
                            <div style={{
                                fontSize: '0.62rem',
                                fontWeight: 700,
                                letterSpacing: '2px',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                padding: '2px 8px 8px',
                                borderBottom: '1px solid rgba(255,255,255,0.06)',
                                marginBottom: '6px',
                            }}>
                                Themes
                            </div>
                            {themes.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => applyTheme(t.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        width: '100%',
                                        padding: '8px 10px',
                                        borderRadius: '8px',
                                        border: currentTheme === t.id ? `1px solid ${t.border}` : '1px solid transparent',
                                        background: currentTheme === t.id ? 'rgba(255,255,255,0.07)' : 'transparent',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        fontSize: '0.82rem',
                                        fontWeight: 500,
                                        fontFamily: 'Space Grotesk, sans-serif',
                                        textAlign: 'left',
                                        transition: 'all 0.2s',
                                        outline: 'none',
                                        boxShadow: currentTheme === t.id ? `0 0 8px ${t.border}33` : 'none',
                                    }}
                                >
                                    <span style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        background: t.color,
                                        border: `1.5px solid ${t.border}`,
                                        flexShrink: 0,
                                        display: 'inline-block',
                                    }} />
                                    {t.label}
                                    {currentTheme === t.id && (
                                        <span style={{ marginLeft: 'auto', fontSize: '0.7rem', color: t.border }}>✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <button className="nav-btn" onClick={() => scrollTo('Contact')}>LETS TALK</button>

                <div className="hamburger" onClick={() => setOpen(!open)}>
                    <span /><span /><span />
                </div>
            </div>
        </nav>
    )
}
