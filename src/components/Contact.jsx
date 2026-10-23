import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="wrap">
                <header className="section-head">
                    <span className="num mono">05</span>
                    <h2>Contact</h2>
                </header>

                <div className="contact-grid">
                    <div className="reveal">
                        <p className="contact-lede">
                            Open to internships and junior cloud, DevOps or security roles.
                            Email is the fastest way to reach me.
                        </p>

                        <a className="contact-email" href="mailto:bikramtamang293@gmail.com">
                            bikramtamang293@gmail.com
                        </a>
                    </div>

                    <dl className="contact-meta reveal">
                        <div>
                            <dt className="mono">GitHub</dt>
                            <dd>
                                <a
                                    className="link"
                                    href="https://github.com/bikramtamang-np"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    github.com/bikramtamang-np
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="mono">Location</dt>
                            <dd>Kathmandu, Nepal</dd>
                        </div>
                        <div>
                            <dt className="mono">Time zone</dt>
                            <dd>NPT (UTC+5:45)</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Contact;
