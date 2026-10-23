// The site's structure, in one place: the nav, the cover's contents list, the
// page titles and the metadata all read from here, and so does vite.config.js
// (which injects the per-page <head> tags at build time).

export const SITE = {
    name: 'Bikram Tamang',
    url: 'https://bikram-tamang.com.np',
    role: 'Cloud & AI — AWS Certified Solutions Architect, Associate',
    place: 'Kathmandu, Nepal',
    coords: '27.7172° N, 85.3240° E',
    email: 'bikramtamang293@gmail.com',
    github: 'https://github.com/bikramtamang-np',
    repo: 'https://github.com/bikramtamang-np/bikram-tamang',
};

export const PAGES = [
    {
        key: 'about',
        num: '01',
        path: '/about/',
        label: 'About',
        title: 'About',
        summary: 'The short version — where I study, and what I do with a terminal',
        description:
            'Bikram Tamang is a third-semester BSc student in Kathmandu working on Linux, Python and cloud infrastructure. Open to internships.',
    },
    {
        key: 'experience',
        num: '02',
        path: '/experience/',
        label: 'Experience',
        title: 'Experience & education',
        summary: 'A cloud apprenticeship, a bootcamp, and the years they sit in',
        description:
            'A cloud apprenticeship at Adex International, a robotics bootcamp, a BSc in progress and IELTS Academic 7.0 — in order.',
    },
    {
        key: 'skills',
        num: '03',
        path: '/skills/',
        label: 'Skills',
        title: 'Skills',
        summary: 'Cloud, programming, security and web — what I actually use',
        description:
            'AWS core services, Linux administration, Python, JavaScript, Bash, Podman, Git and security fundamentals.',
    },
    {
        key: 'certifications',
        num: '04',
        path: '/certifications/',
        label: 'Certifications',
        title: 'Certifications',
        summary: 'AWS, and the two Broadway Infosys programmes beside it',
        description:
            'AWS Certified Solutions Architect – Associate, plus 90 hours of ethical hacking and 180 hours of Python with AI at Broadway Infosys.',
    },
    {
        key: 'contact',
        num: '05',
        path: '/contact/',
        label: 'Contact',
        title: 'Contact',
        summary: 'Email, GitHub, and the time zone I answer in',
        description: 'Email bikramtamang293@gmail.com. Based in Kathmandu, Nepal, UTC+5:45.',
    },
];

export const COVER = {
    key: 'cover',
    path: '/',
    title: 'Bikram Tamang — Cloud & AI, AWS Certified',
    description:
        'Bikram Tamang — AWS Certified Solutions Architect, Associate. Cloud, Linux and Python, based in Kathmandu, Nepal. Open to internships.',
};

export const NOT_FOUND = {
    key: '404',
    path: '/404.html',
    title: 'Page not found — Bikram Tamang',
    description: 'That page does not exist. The contents are on the cover.',
};
