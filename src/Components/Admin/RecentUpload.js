import React from 'react';
import '../../styles/Admincss/RecentUpload.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const RecentUpload = () => {
    const uploads = [
        { id: 1, title: "India's Growing Economy", content: "Content goes here...", views: 25480 },
        { id: 2, title: "Climate Change Summit Results", content: "Content goes here...", views: 12879 },
        { id: 3, title: "New Medical Treatments", content: "Content goes here...", views: 8960 },
        // More uploads
    ];

    return (
        <div className="recent-uploads">
            <h2>Recent Uploads</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Views</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {uploads.map(upload => (
                        <tr key={upload.id}>
                            <td>{upload.id}</td>
                            <td>{upload.title}</td>
                            <td>{upload.content}</td>
                            <td>{upload.views}</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <FontAwesomeIcon icon={faEdit} className="icon" />
                                <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentUpload;
