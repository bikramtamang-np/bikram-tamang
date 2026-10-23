import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Every HTML shell names its page; there is no router, so each URL is a real
// document that the browser loads and the server can serve as a 200.
const page = document.getElementById('root')?.dataset.page || 'cover';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App page={page} />
    </StrictMode>
);
