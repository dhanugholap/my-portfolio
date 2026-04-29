export default function Footer() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo"><span className="first-name">Dhananjay</span><span>Gholap</span></div>
                    <p>Software Engineer — Python FullStack Developer With Ai  </p>
                    <div className="footer-socials">
                        <a href="https://github.com/dhanu07" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/dhanu07" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://instagram.com/30.dhanu_" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    {/* <ul>
                        {['home', 'about', 'services', 'skill', 'work', 'contact'].map(id => (
                            <li key={id}>
                                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul> */}
                </div>
                {/* <div className="footer-contact">
                    <h4>Contact</h4>
                    <p><i className="fas fa-envelope"></i> dhanugholap007@gmail.com</p>
                    <p><i className="fas fa-phone"></i> +91 8805451745</p>
                    <p><i className="fas fa-map-marker-alt"></i> Pune, Maharashtra</p>
                </div> */}
            </div>
            <div className="footer-bottom">
                <p className="animated-text">Thank you for visiting my portfolio!</p>
                <p className="animated-text">Built with ❤️ Dhananjay Gholap</p>
            </div>
        </footer>
    )
}
