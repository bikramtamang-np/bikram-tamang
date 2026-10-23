import { useEffect, useState } from 'react';
import { PAGES, SITE } from './content/site';
import Cover from './components/Cover';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Pager from './components/Pager';
import './App.css';

const VIEWS = {
    cover: Cover,
    about: About,
    experience: Experience,
    skills: Skills,
    certifications: Certifications,
    contact: Contact,
    404: NotFound,
};

function App({ page = 'cover' }) {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || 'light'
    );

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem('theme', theme);
        } catch {
            /* private mode */
        }
    }, [theme]);

    // A page that fits the screen never scrolls, so reveal on entry rather than
    // on intersection.
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
            { threshold: 0.05 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [page]);

    const View = VIEWS[page] || NotFound;
    const index = PAGES.findIndex((p) => p.key === page);
    const prev = index > 0 ? PAGES[index - 1] : null;
    const next = index >= 0 ? PAGES[index + 1] || null : null;
    const isLeaf = index >= 0;

    return (
        <div className="app">
            <a className="skip" href="#main">
                Skip to content
            </a>

            <header className="nav">
                <div className="wrap nav-inner">
                    <a className="nav-name" href="/">
                        {SITE.name}
                    </a>

                    <nav className="nav-links" aria-label="Pages">
                        {PAGES.map((p) => (
                            <a
                                key={p.key}
                                href={p.path}
                                className={page === p.key ? 'is-active' : ''}
                                aria-current={page === p.key ? 'page' : undefined}
                            >
                                {p.label}
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
                <View />
                {isLeaf && <Pager page={PAGES[index]} total={PAGES.length} prev={prev} next={next} />}
            </main>

            <footer className="footer">
                <div className="wrap footer-inner">
                    <p className="mono">© {new Date().getFullYear()} Bikram Tamang</p>
                    <p className="mono">
                        Built with React &amp; Vite ·{' '}
                        <a className="link link-quiet" href={SITE.repo}>
                            source
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
