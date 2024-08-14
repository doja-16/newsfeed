import React, { useState } from 'react';
import CommentPopup from './CommentPopup';

const ParentComponent = () => {
  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleOpenCommentPopup = (newsId) => {
    setSelectedNewsId(newsId);
    setIsCommentPopupOpen(true);
  };

  const handleCloseCommentPopup = () => {
    setIsCommentPopupOpen(false);
    setSelectedNewsId(null);
  };

  return (
    <div>
      {/* Trigger to open comment popup, passing a valid newsId */}
      <button onClick={() => handleOpenCommentPopup(1)}>Open Comment Popup</button>

      {isCommentPopupOpen && (
        <CommentPopup
          onClose={handleCloseCommentPopup}
          newsId={selectedNewsId}
        />
      )}
    </div>
  );
};

export default ParentComponent;
