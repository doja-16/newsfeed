import React from 'react';
import '../../styles/Admincss/SuccessPopup.css'; // Import the CSS for styling

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>

      </div>
    </div>
  );
};

export default SuccessPopup;
