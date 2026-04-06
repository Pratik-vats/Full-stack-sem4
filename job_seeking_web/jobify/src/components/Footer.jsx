import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Jobify</h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Your next career move starts here.</p>
                </div>
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
                <div className="social-links" style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
                    <FaTwitter style={{ cursor: 'pointer' }} />
                    <FaGithub style={{ cursor: 'pointer' }} />
                    <FaLinkedin style={{ cursor: 'pointer' }} />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jobify.com. All rights reserved.</p>
                <p>Created By Vatman</p>
            </div>
        </footer>
    );
}

export default Footer;
