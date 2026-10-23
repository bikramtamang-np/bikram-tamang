import React from 'react';
import './Skills.css';

const groups = [
    {
        title: 'Cloud & systems',
        items: [
            'AWS core services — EC2, S3, IAM, VPC',
            'Linux administration (Arch-based daily driver)',
            'Containers — Podman',
            'Git',
        ],
    },
    {
        title: 'Programming',
        items: ['Python', 'JavaScript', 'Bash', 'HTML / CSS'],
    },
    {
        title: 'Security',
        items: [
            'Ethical hacking fundamentals',
            'Network fundamentals',
            'Web scraping — Beautiful Soup',
        ],
    },
    {
        title: 'Web',
        items: ['React', 'Vite', 'Responsive layout'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="wrap">
                <header className="section-head">
                    <span className="num mono">03</span>
                    <h2>Skills</h2>
                </header>

                <div className="skills-grid">
                    {groups.map((group) => (
                        <div className="skill-group reveal" key={group.title}>
                            <h3 className="mono skill-title">{group.title}</h3>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
