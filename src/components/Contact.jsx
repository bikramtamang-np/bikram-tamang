import React from 'react';
import PageHead from './PageHead';
import { SITE } from '../content/site';
import './Contact.css';

const Contact = () => {
    return (
        <div className="wrap page-inner">
            <PageHead
                num="05"
                title="Contact"
                lede="Open to internships and junior cloud, DevOps or security roles. Email is the fastest way to reach me."
            />

            <div className="contact-grid">
                <div className="reveal">
                    <a className="contact-email" href={`mailto:${SITE.email}`}>
                        {SITE.email}
                    </a>
                </div>

                <dl className="contact-meta reveal">
                    <div>
                        <dt className="mono">GitHub</dt>
                        <dd>
                            <a
                                className="link"
                                href={SITE.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/bikramtamang-np
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt className="mono">Location</dt>
                        <dd>{SITE.place}</dd>
                    </div>
                    <div>
                        <dt className="mono">Time zone</dt>
                        <dd>NPT (UTC+5:45)</dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default Contact;
