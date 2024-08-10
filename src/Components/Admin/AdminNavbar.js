import React from 'react';
import '../../styles/Admincss/AdminNavbar.css';
// import dailyIcon from '../../Assets/daily.png';

const AdminNavbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            {/* <img className='daily' src={dailyIcon} alt="Daily" /> */}
                DailyBugle
            </div>
            <div className="navbar-icons">
                <div className="notification-icon">
                    <i className="bell-icon">🔔</i>
                    <span className="notification-count">4</span>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
