import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };

    return (
        <div className="auth-wrapper" style={{ padding: '40px 0' }}>
            <div className="auth-card" style={{ maxWidth: '550px' }}>
                <h2>Create an Account</h2>
                <p>Join India's #1 job site and find your dream tech role.</p>

                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label" htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                        </div>
                        <div className="form-group" style={{ flex: 1 }}>
                            <label className="form-label" htmlFor="mobile">Mobile Number</label>
                            <input type="tel" id="mobile" name="mobile" className="form-input" placeholder="+91 99999 99999" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" minLength="8" className="form-input" placeholder="Must be at least 8 characters" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="experience">Current Experience Level</label>
                        <select id="experience" name="experience" className="form-select">
                            <option value="fresher">Fresher (0 Years)</option>
                            <option value="2+">2+ Years</option>
                            <option value="5+">5+ Years</option>
                            <option value="10+">10+ Years</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-primary btn-full" style={{ marginTop: '1.5rem' }}>Create Account</button>
                </form>

                <p style={{ marginTop: '2rem', marginBottom: '0', textAlign: 'center', color: 'var(--text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
