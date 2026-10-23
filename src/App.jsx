import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
];

function App() {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || 'light'
    );
    const [active, setActive] = useState('');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* private mode */
        }
    }, [theme]);

    // Reveal sections as they enter the viewport.
    useEffect(() => {
        const els = Array.from(document.querySelectorAll('.reveal'));
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('is-in'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-in');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    // Highlight the section currently in view.
    useEffect(() => {
        const els = sections
            .map((s) => document.getElementById(s.id))
            .filter(Boolean);
        if (!('IntersectionObserver' in window) || !els.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="app">
            <a className="skip" href="#main">
                Skip to content
            </a>

            <header className="nav">
                <div className="wrap nav-inner">
                    <a className="nav-name" href="#top">
                        Bikram Tamang
                    </a>

                    <nav className="nav-links" aria-label="Sections">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={active === s.id ? 'is-active' : ''}
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="theme-toggle"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
                    </button>
                </div>
            </header>

            <main id="main">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Certifications />
                <Contact />
            </main>

            <footer className="footer">
                <div className="wrap footer-inner">
                    <p className="mono">© {new Date().getFullYear()} Bikram Tamang</p>
                    <p className="mono">
                        Built with React &amp; Vite ·{' '}
                        <a
                            className="link link-quiet"
                            href="https://github.com/bikramtamang-np/bikram-tamang"
                        >
                            source
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
