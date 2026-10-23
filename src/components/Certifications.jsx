import React from 'react';
import PageHead from './PageHead';
import './Certifications.css';

const certs = [
    {
        title: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        when: '2025',
        href: 'https://www.credly.com/badges/875eb788-b18b-4302-98cd-96cead961d5c/public_url',
    },
    {
        title: 'Ethical Hacking — 90 hours',
        issuer: 'Broadway Infosys',
        when: '2024',
    },
    {
        title: 'Python with Artificial Intelligence — 180 hours',
        issuer: 'Broadway Infosys',
        when: '2024',
    },
];

const Certifications = () => {
    return (
        <div className="wrap page-inner">
            <PageHead
                num="04"
                title="Certifications"
                lede="The AWS badge is verifiable at the issuer. The Broadway Infosys certificates are on request."
            />

            <ul className="certs">
                {certs.map((cert) => (
                    <li className="cert reveal" key={cert.title}>
                        <div className="cert-main">
                            <h3>{cert.title}</h3>
                            <p className="cert-meta mono">
                                {cert.issuer} · {cert.when}
                            </p>
                        </div>
                        {cert.href ? (
                            <a
                                className="link cert-link"
                                href={cert.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Verify ↗
                            </a>
                        ) : (
                            <span className="cert-link cert-link-quiet">
                                Certificate on request
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certifications;
