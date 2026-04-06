import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found page-container">
            <h1>404</h1>
            <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
    );
}

export default NotFound;
