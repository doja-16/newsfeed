import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Admincss/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faFire, faPlus, faFileAlt, faTasks, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or token
        // Example: localStorage.removeItem('userToken');

        // Redirect to login page or home page
        navigate('/');
    };

    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <NavLink className={({ isActive }) => isActive ? 'side active' : 'side'} to="/admin/activity">
                        <FontAwesomeIcon icon={faChartLine} className="icon" />
                        Activity
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink className={({ isActive }) => isActive ? 'side active' : 'side'} to="/admin/trending-news">
                        <FontAwesomeIcon icon={faFire} className="icon" />
                        Trending News
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink className={({ isActive }) => isActive ? 'side active' : 'side'} to="/admin/add-news">
                        <FontAwesomeIcon icon={faPlus} className="icon" />
                        Add News
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink className={({ isActive }) => isActive ? 'side active' : 'side'} to="/admin/news-report">
                        <FontAwesomeIcon icon={faFileAlt} className="icon" />
                        News Report
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink className={({ isActive }) => isActive ? 'side active' : 'side'} to="/admin/manage-content">
                        <FontAwesomeIcon icon={faTasks} className="icon" />
                        Manage Content
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <button className="logout-btn" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
