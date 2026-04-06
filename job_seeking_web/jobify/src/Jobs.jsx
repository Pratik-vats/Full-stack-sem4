import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBookmark, FaRegBookmark, FaBuilding } from 'react-icons/fa';
import './style.css';

function Jobs() {
    const [savedJobs, setSavedJobs] = useState([]);

    const jobs = [
        { id: 1, company: 'Google', role: 'Senior Software Engineer', exp: '2-5 yrs', salary: '18 LPA', type: 'Full-time', location: 'Bengaluru' },
        { id: 2, company: 'Apple', role: 'Engineering Manager', exp: '5-10 yrs', salary: '36 LPA', type: 'Remote', location: 'Remote' },
        { id: 3, company: 'Microsoft', role: 'Full Stack Developer', exp: '2-5 yrs', salary: '16 LPA', type: 'Hybrid', location: 'Hyderabad' },
        { id: 4, company: 'Meta', role: 'DevOps Engineer', exp: '5-8 yrs', salary: '24 LPA', type: 'Full-time', location: 'Pune' },
        { id: 5, company: 'TCS', role: 'Java Developer', exp: '2-5 yrs', salary: '12 LPA', type: 'Full-time', location: 'Mumbai' },
        { id: 6, company: 'IBM', role: 'Data Scientist', exp: '2-5 yrs', salary: '28 LPA', type: 'Remote', location: 'Remote' }
    ];

    const toggleBookmark = (id) => {
        if (savedJobs.includes(id)) {
            setSavedJobs(savedJobs.filter(jobId => jobId !== id));
        } else {
            setSavedJobs([...savedJobs, id]);
        }
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Top Job Offers</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Found {jobs.length} open positions for you</p>
                </div>
                
                <div className="search-box">
                    <FaSearch style={{ color: 'var(--text-muted)' }} />
                    <input type="text" placeholder="Search jobs..." />
                </div>
            </div>

            <div className="jobs-grid">
                {jobs.map(job => (
                    <div className="job-card" key={job.id}>
                        <div className="job-header">
                            <div className="company-info">
                                <div className="company-logo">
                                    {job.company.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="job-role">{job.role}</h3>
                                    <p className="job-company"><FaBuilding style={{marginRight: '6px'}}/>{job.company}</p>
                                </div>
                            </div>
                            <button className={`bookmark-btn ${savedJobs.includes(job.id) ? 'active' : ''}`} onClick={() => toggleBookmark(job.id)}>
                                {savedJobs.includes(job.id) ? <FaBookmark /> : <FaRegBookmark />}
                            </button>
                        </div>

                        <div className="job-pills">
                            <span className="pill">{job.type}</span>
                            <span className="pill">{job.location}</span>
                            <span className="pill">{job.exp}</span>
                        </div>

                        <div className="job-footer">
                            <span className="job-salary">{job.salary}</span>
                            <Link to="#" className="btn-apply">View & Apply</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
