import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaUserCircle } from 'react-icons/fa';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/');
    };

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <FaBriefcase className="logo-icon" />
                Jobify
            </Link>
            
            <div className="nav-links">
                <Link to="/" className={isActive("/")}>Home</Link>
                <Link to="/jobs" className={isActive("/jobs")}>Find Jobs</Link>
                <Link to="/companies" className={isActive("/companies")}>Top Companies</Link>
            </div>

            <div className="nav-auth">
                {isAuthenticated ? (
                    <>
                        <Link to="#" className="btn-ghost" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <FaUserCircle /> My Profile
                        </Link>
                        <button onClick={handleLogout} className="btn-primary" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-main)', boxShadow: 'none' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn-ghost">Login</Link>
                        <Link to="/register" className="btn-primary">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
