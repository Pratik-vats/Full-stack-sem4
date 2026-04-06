import React, { useState } from 'react';
import { FaSearch, FaPlus, FaBuilding } from 'react-icons/fa';
import { initialCompanies, searchCompanies, applyToCompany, deleteCompany, addCompany } from './companies.js';
import './style.css';

function Companies() {
    const [companies, setCompanies] = useState(initialCompanies);
    const [searchValue, setSearchValue] = useState("");
    const [newCompanyName, setNewCompanyName] = useState("");
    const [newCompanyField, setNewCompanyField] = useState("");
    const [formError, setFormError] = useState("");

    const displayedCompanies = searchValue ? searchCompanies(companies, searchValue) : companies;

    const handlePostJob = () => {
        const name = newCompanyName.trim();
        const field = newCompanyField.trim();

        if (name === "" || field === "") {
            setFormError("Both company name and field are required.");
            return;
        }

        setFormError("");
        setCompanies(addCompany(companies, name, field));
        setNewCompanyName("");
        setNewCompanyField("");
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Featured Companies</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Explore careers at top tier organizations.</p>
                </div>

                <div className="search-box">
                    <FaSearch style={{ color: 'var(--text-muted)' }} />
                    <input 
                        type="text" 
                        placeholder="Search companies..." 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
            </div>

            <div className="post-job-area">
                <div>
                    <h3 style={{ marginBottom: '8px' }}>Partner with us</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Post your company profile and start hiring today.</p>
                </div>
                <div className="post-job-form">
                    <div>
                        <label className="form-label">Company Name</label>
                        <input 
                            type="text" 
                            className="form-input"
                            placeholder="e.g. OpenAI"
                            value={newCompanyName}
                            onChange={(e) => setNewCompanyName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="form-label">Industry/Field</label>
                        <input 
                            type="text" 
                            className="form-input"
                            placeholder="e.g. AI, Deep Learning"
                            value={newCompanyField}
                            onChange={(e) => setNewCompanyField(e.target.value)}
                        />
                    </div>
                    <button className="btn-primary" onClick={handlePostJob} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaPlus /> Custom Post
                    </button>
                </div>
                {formError && <p className="error-text">{formError}</p>}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Top Hiring Companies</h2>
                <div className="stat-tag">
                    {displayedCompanies.length === 0 && searchValue !== "" 
                        ? "0 Matching results" 
                        : `${displayedCompanies.length} Active Profiles`}
                </div>
            </div>

            <div className="jobs-grid">
                {displayedCompanies.map(company => (
                    <div className="job-card" key={company.id}>
                        <div className="job-header">
                            <div className="company-info">
                                <div className="company-logo">
                                    {company.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="job-role">{company.name}</h3>
                                    <p className="job-company"><FaBuilding style={{marginRight: '6px'}}/>{company.field}</p>
                                </div>
                            </div>
                        </div>

                        <div className="job-footer">
                            <button 
                                className={company.applied ? "btn-applied" : "btn-apply"}
                                onClick={() => !company.applied && setCompanies(applyToCompany(companies, company.id))}
                            >
                                {company.applied ? "Applied" : "Express Interest"}
                            </button>
                            <button 
                                className="btn-danger" 
                                onClick={() => setCompanies(deleteCompany(companies, company.id))}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Companies;
