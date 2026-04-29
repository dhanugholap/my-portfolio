const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '2+', label: 'Projects Done' },
    { value: '2', label: 'Certifications' },
    { value: '1', label: 'Internship' },
]

export default function Stats() {
    return (
        <div className="stats">
            {stats.map((s, i) => (
                <div className="stat-item" key={s.label}
                    data-aos="zoom-in" data-aos-delay={i * 120}>
                    <h2>{s.value}</h2>
                    <p>{s.label}</p>
                </div>
            ))}
        </div>
    )
}
