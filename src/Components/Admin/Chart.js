// Import necessary components from recharts
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../../styles/Admincss/Chart.css'; 
import RecentUpload from './RecentUpload';

// Sample data for the chart
const data = [
    { name: 'business', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'tech', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'health', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'finance', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'environment', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'science', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'social', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'culture', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'travel', uv: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
    return (
        <div className="chart-container">
            <h2>News Stats</h2>
            <BarChart
                width={800} // Increased width for better visibility
                height={400} // Increased height to fit more data
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 'dataMax + 500']} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            {/* <RecentUpload/> */}
        </div>
    );
};

export default Chart;
