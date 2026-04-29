import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Hobbies from './components/Hobbies'
import Services from './components/Services'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement
            const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight) * 100
            setWidth(scrolled)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, height: '3px',
            width: `${width}%`, background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            zIndex: 99999, transition: 'width 0.1s linear',
        }} />
    )
}

function BackToTop() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    if (!show) return null
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
                position: 'fixed', bottom: '2rem', right: '2rem',
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                border: 'none', color: '#fff', fontSize: '1.1rem',
                cursor: 'pointer', zIndex: 9999,
                boxShadow: '0 4px 20px var(--glow)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            title="Back to top"
        >
            <i className="fas fa-chevron-up"></i>
        </button>
    )
}

function App() {
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false,
            easing: 'ease-out',
            offset: 50,
            delay: 0,
            throttleDelay: 99,
            disable: false,
        })
    }, [])

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Stats />
            <Services />
            <Skills />
            <Portfolio />
            <Certifications />
            <Hobbies />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    )
}

export default App
