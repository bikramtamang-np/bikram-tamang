import React from 'react';
import PageHead from './PageHead';
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
        <div className="wrap page-inner">
            <PageHead
                num="03"
                title="Skills"
                lede="What I actually use, grouped by area rather than graded."
            />

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
    );
};

export default Skills;
