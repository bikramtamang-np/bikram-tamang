import React from 'react';
import './Hero.css';

const facts = [
    { k: 'Certification', v: 'AWS Solutions Architect – Associate' },
    { k: 'English', v: 'IELTS Academic 7.0 (C1)' },
    { k: 'Status', v: 'Open to internships' },
];

const Hero = () => {
    return (
        <section id="top" className="hero">
            <div className="wrap hero-inner">
                <p className="mono hero-coords reveal">
                    Kathmandu, Nepal · 27.7172° N, 85.3240° E
                </p>

                <h1 className="hero-name reveal">Bikram Tamang</h1>

                <p className="hero-role reveal">
                    Cloud &amp; AI — AWS Certified Solutions Architect, Associate
                </p>

                <p className="hero-lede reveal">
                    Third-semester student at Tech AI College of Management and Law. I work on
                    Linux — cloud infrastructure, Python automation and security fundamentals —
                    and I'm looking for an internship where that work is real.
                </p>

                <div className="hero-actions reveal">
                    <a className="btn btn-solid" href="mailto:bikramtamang293@gmail.com">
                        Email me
                    </a>
                    <a
                        className="btn"
                        href="https://github.com/bikramtamang-np"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>
                </div>

                <dl className="hero-facts reveal">
                    {facts.map((fact) => (
                        <div className="hero-fact" key={fact.k}>
                            <dt className="mono">{fact.k}</dt>
                            <dd>{fact.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Hero;
