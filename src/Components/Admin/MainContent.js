import React from 'react';
import Chart from './Chart';
import TopComments from './TopComment';
import RecentUploads from './RecentUpload';
import '../../styles/Admincss/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h1>News2Day</h1>
            <div className="stats-section">
                <Chart />
                <TopComments />
            </div>
            <RecentUploads />
        </div>
    );
};

export default MainContent;
