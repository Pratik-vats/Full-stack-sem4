import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import './style.css';

function Home() {
    return (
        <div className="home-wrapper">
            <section className="hero-section">
                <h1 className="hero-title">
                    Discover Your <span className="hero-highlight">Dream Job</span>
                </h1>
                <p className="hero-subtitle">
                    Join over 500,000 professionals advancing their careers with the world's most innovative tech companies.
                </p>

                <div className="search-container">
                    <div className="input-wrapper">
                        <FaSearch className="input-icon" />
                        <input type="text" className="search-input" placeholder="Job title, keyword, or company" />
                    </div>
                    <div className="input-wrapper" style={{ borderLeft: '1px solid var(--border)' }}>
                        <FaMapMarkerAlt className="input-icon" />
                        <input type="text" className="search-input" placeholder="City or Remote" />
                    </div>
                    <button className="btn-primary" style={{ padding: '12px 32px' }}>Search</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
