import { useState } from 'react'

const themes = [
    { id: 'dark', label: '🌑 Space Black', dot: '#00d4aa', class: 'dark' },
    { id: 'theme-purple', label: '🟣 Purple Night', dot: '#a855f7', class: 'theme-purple' },
    { id: 'theme-ocean', label: '🔵 Ocean Blue', dot: '#0ea5e9', class: 'theme-ocean' },
    { id: 'theme-ember', label: '🔴 Red Ember', dot: '#f43f5e', class: 'theme-ember' },
    { id: 'theme-gold', label: '🟡 Gold Dark', dot: '#f59e0b', class: 'theme-gold' },
    { id: 'theme-light', label: '☀️ Light Mode', dot: '#00d4aa', class: 'theme-light' },
]

const allClasses = themes.map(t => t.class).filter(Boolean)

export default function ThemeSwitcher() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('dark')

    const applyTheme = (theme) => {
        document.body.classList.remove(...allClasses)
        if (theme.class) document.body.classList.add(theme.class)
        setActive(theme.id)
        setOpen(false)
    }

    return (
        <div className="theme-switcher">
            <div className={`theme-panel ${open ? 'open' : ''}`}>
                <div className="theme-panel-title">Themes</div>
                {themes.map(t => (
                    <button
                        key={t.id}
                        className={`theme-btn ${active === t.id ? 'active' : ''}`}
                        onClick={() => applyTheme(t)}
                    >
                        <span className="theme-dot" style={{ background: t.dot }} />
                        {t.label}
                    </button>
                ))}
            </div>
            <button className="theme-switcher-toggle" onClick={() => setOpen(!open)}>
                {open ? '✕' : 'THEME'}
            </button>
        </div>
    )
}
