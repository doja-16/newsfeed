import React from 'react';
import '../../styles/Admincss/TopComments.css';

const TopComments = () => {
    return (
        <div className="top-comments">
            <h2>Top Comments</h2>
            <div className="comment">Brunch this weekend? Ali Connors — I'll be in your neighborhood doing errands this...</div>
            <div className="comment">Summer BBQ</div>
            {/* Add other comments here */}
        </div>
    );
};

export default TopComments;
