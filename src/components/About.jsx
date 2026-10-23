import React from 'react';
import portrait from '../assets/images/mProfile22.JPG';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="wrap">
                <header className="section-head">
                    <span className="num mono">01</span>
                    <h2>About</h2>
                </header>

                <div className="about-grid">
                    <figure className="about-photo reveal">
                        <img
                            src={portrait}
                            alt="Bikram Tamang"
                            width="640"
                            height="640"
                            loading="lazy"
                        />
                        <figcaption className="mono">Kathmandu, Nepal</figcaption>
                    </figure>

                    <div className="about-text reveal">
                        <p className="about-lead">
                            I'm studying for a BSc at Tech AI College of Management and Law,
                            affiliated with Rajarshi Janak University — currently in my third
                            semester.
                        </p>

                        <p>
                            Most of what I know came from outside the syllabus: 90 hours of
                            ethical hacking training and 180 hours of Python and AI training at
                            Broadway Infosys, a two-month cloud apprenticeship at Adex
                            International, and a lot of time in a Linux terminal.
                        </p>

                        <p>
                            I work on Linux daily, automate with Python, and I'm working toward
                            cloud infrastructure and security. I'd like an internship where the
                            systems are real and the feedback is direct.
                        </p>

                        <p className="about-now mono">
                            Currently learning — SQL, container orchestration
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
