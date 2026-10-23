import React from 'react';
import './Experience.css';

const work = [
    {
        what: 'Cloud Apprentice',
        where: 'Adex International Pvt. Ltd.',
        when: 'Jul — Aug 2025',
        note: 'Two-month apprenticeship with the cloud team, working alongside engineers on day-to-day cloud operations.',
    },
    {
        what: 'Robotics Bootcamp',
        where: 'Sarlo Shiksha',
        when: 'Jan 2023',
        note: 'Two-week intensive building and programming robots.',
    },
];

const education = [
    {
        what: 'BSc',
        where: 'Tech AI College of Management and Law · Rajarshi Janak University',
        when: 'In progress',
    },
    {
        what: 'IELTS Academic — 7.0 (C1)',
        where: 'English proficiency',
        when: '2024',
    },
    {
        what: 'Higher Secondary (Grade 12) — Science',
        where: 'Arunima Secondary School',
        when: '2022',
    },
    {
        what: 'Secondary Education (Grade 10)',
        where: 'Ganchen Samling School',
        when: '2020',
    },
];

const Entry = ({ what, where, when, note }) => (
    <li className="entry">
        <span className="entry-when mono">{when}</span>
        <div className="entry-body">
            <h3>{what}</h3>
            <p className="entry-where">{where}</p>
            {note && <p className="entry-note">{note}</p>}
        </div>
    </li>
);

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="wrap">
                <header className="section-head">
                    <span className="num mono">02</span>
                    <h2>Experience &amp; education</h2>
                </header>

                <div className="xp-grid">
                    <div className="reveal">
                        <p className="mono xp-label">Work</p>
                        <ul className="entries">
                            {work.map((item) => (
                                <Entry key={item.what} {...item} />
                            ))}
                        </ul>
                    </div>

                    <div className="reveal">
                        <p className="mono xp-label">Education</p>
                        <ul className="entries">
                            {education.map((item) => (
                                <Entry key={item.what} {...item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
