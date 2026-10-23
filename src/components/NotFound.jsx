import React from 'react';
import { PAGES } from '../content/site';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="wrap page-inner notfound">
            <header className="page-head reveal">
                <span className="page-num mono">—</span>
                <div className="page-heading">
                    <h1 className="page-title">Page not found</h1>
                    <p className="page-lede">
                        That address does not exist on this site. Everything is listed on the
                        cover.
                    </p>
                </div>
            </header>

            <div className="reveal">
                <a className="btn btn-solid" href="/">
                    Back to the cover
                </a>

                <ul className="notfound-links">
                    {PAGES.map((page) => (
                        <li key={page.key}>
                            <a className="link" href={page.path}>
                                {page.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NotFound;
