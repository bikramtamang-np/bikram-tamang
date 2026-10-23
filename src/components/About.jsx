import React from 'react';
import PageHead from './PageHead';
import portrait from '../assets/images/mProfile22.JPG';
import './About.css';

const About = () => {
    return (
        <div className="wrap page-inner">
            <PageHead
                num="01"
                title="About"
                lede="Third-semester BSc student at Tech AI College of Management and Law, affiliated with Rajarshi Janak University."
            />

            <div className="about-grid">
                <figure className="about-photo reveal">
                    <img
                        src={portrait}
                        alt="Bikram Tamang"
                        width="640"
                        height="640"
                        loading="eager"
                    />
                    <figcaption className="mono">Kathmandu, Nepal</figcaption>
                </figure>

                <div className="about-text reveal">
                    <p className="about-lead">
                        Most of what I know came from outside the syllabus: 90 hours of ethical
                        hacking training and 180 hours of Python and AI training at Broadway
                        Infosys, a two-month cloud apprenticeship at Adex International, and a
                        lot of time in a Linux terminal.
                    </p>

                    <p>
                        I work on Linux daily, automate with Python, and I'm working toward cloud
                        infrastructure and security. I'd like an internship where the systems are
                        real and the feedback is direct.
                    </p>

                    <p className="about-now mono">
                        Currently learning — SQL, container orchestration
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
