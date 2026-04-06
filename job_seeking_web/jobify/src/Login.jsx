import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import './style.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2>Welcome back</h2>
                <p>Log in to access your saved jobs and applications.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" className="form-input" placeholder="name@company.com" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-input" placeholder="••••••••" required />
                    </div>

                    <button type="submit" className="btn-primary btn-full">Sign In</button>
                </form>

                <div className="auth-divider">OR</div>

                <Link to="#" className="google-btn">
                    <FaGoogle /> Continue with Google
                </Link>

                <p style={{ marginTop: '2rem', marginBottom: '0' }}>
                    Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500' }}>Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
