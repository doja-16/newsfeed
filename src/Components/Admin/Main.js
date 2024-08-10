// Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Admin/Sidebar';  // Ensure this path is correct
import AdminNavbar from '../Admin/AdminNavbar';
import Chart from '../Admin/Chart';
import ManageContent from '../../Components/Admin/ManageContent';
import AddNews from '../Admin/AddNews';
import Activity from './Activity';
import TrendingNews from './TrendingNews';


const Main = () => {
    return (
        <div className="app">
            <AdminNavbar />
            <Sidebar />
            <div className="content">
                {/* <Activity/> */}
                <Routes>
                    <Route path="/activity" element={<Activity/>} />
                    <Route path="/trending-news" element={<div><TrendingNews/></div>} />
                    <Route path="/add-news" element={<div><AddNews/></div>} />
                    <Route path="news-report" element={<div><Chart/></div>} />
                    <Route path="/manage-content" element={<ManageContent/>} />
                </Routes>
                
            </div>
        </div>      
    );
};

export default Main;
