import React from 'react';
import { PAGES, SITE } from '../content/site';
import './Cover.css';

const Cover = () => {
    return (
        <section className="cover">
            <div className="wrap cover-inner">
                <p className="mono cover-coords reveal">
                    {SITE.place} · {SITE.coords}
                </p>

                <h1 className="cover-name reveal">{SITE.name}</h1>

                <p className="cover-role reveal">{SITE.role}</p>

                <p className="mono cover-status reveal">
                    <span className="dot" aria-hidden="true" />
                    Open to internships
                </p>

                <p className="cover-lede reveal">
                    Third-semester student at Tech AI College of Management and Law, working on
                    Linux, cloud infrastructure and security.
                </p>

                <div className="cover-actions reveal">
                    <a className="btn btn-solid" href={`mailto:${SITE.email}`}>
                        Email me
                    </a>
                    <a className="btn" href={SITE.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                    </a>
                </div>

                <nav className="contents reveal" aria-label="Contents">
                    <div className="contents-head mono">
                        <span>Contents</span>
                        <span>{String(PAGES.length).padStart(2, '0')} pages</span>
                    </div>

                    <ul>
                        {PAGES.map((page) => (
                            <li key={page.key}>
                                <a href={page.path}>
                                    <span className="c-num mono">{page.num}</span>
                                    <span className="c-label">{page.label}</span>
                                    <span className="c-summary">{page.summary}</span>
                                    <span className="c-arrow" aria-hidden="true">
                                        →
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Cover;
