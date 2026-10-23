import React from 'react';

// The page turn. Sits at the foot of every leaf page so the next section is one
// click away instead of a scroll, and the last page turns back to the contents.
const Pager = ({ page, total, prev, next }) => (
    <nav className="pager" aria-label="Page navigation">
        <div className="wrap pager-inner">
            {prev ? (
                <a className="pager-link pager-prev" href={prev.path}>
                    <span className="mono">Previous</span>
                    <span className="pager-title">← {prev.label}</span>
                </a>
            ) : (
                <span className="pager-spacer" />
            )}

            <span className="pager-folio mono" aria-hidden="true">
                {page.num} / {String(total).padStart(2, '0')}
            </span>

            {next ? (
                <a className="pager-link pager-next" href={next.path}>
                    <span className="mono">Next</span>
                    <span className="pager-title">{next.label} →</span>
                </a>
            ) : (
                <a className="pager-link pager-next" href="/">
                    <span className="mono">Back to</span>
                    <span className="pager-title">Contents →</span>
                </a>
            )}
        </div>
    </nav>
);

export default Pager;
