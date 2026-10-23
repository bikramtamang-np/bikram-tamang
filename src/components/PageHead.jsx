import React from 'react';

// The heading every leaf page shares: the section number in the margin, the
// title, and one line saying what the page answers.
const PageHead = ({ num, title, lede }) => (
    <header className="page-head reveal">
        <span className="page-num mono">{num}</span>
        <div className="page-heading">
            <h1 className="page-title">{title}</h1>
            {lede && <p className="page-lede">{lede}</p>}
        </div>
    </header>
);

export default PageHead;
