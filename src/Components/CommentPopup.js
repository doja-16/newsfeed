import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/CommentPopup.css';  // Import your CSS file for styling
import { useAuth } from './AuthContext';  // Import AuthContext

const CommentPopup = ({ onClose, newsId, onCommentAdded }) => {
  const { user } = useAuth(); // Get the logged-in user from AuthContext
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch existing comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:9001/comments/${newsId}`);
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error('Error fetching comments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [newsId]);

  // Handle comment input change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handle comment submission
  const handleCommentSubmit = async () => {
    if (!newsId) {
      console.error('newsId is required to post a comment');
      return;
    }

    if (!user) {
      toast.error('You must be logged in to post a comment.');
      return;
    }

    const newComment = {
      news: { id: newsId },
      author: user, // Use the logged-in username
      content: comment
    };

    try {
      const response = await fetch('http://localhost:9001/comments/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Comment posted successfully!');
        onCommentAdded(result); // Inform parent component to update the comments list
        setComment(''); // Clear the input field
        setComments([...comments, result]); // Add new comment to the list
      } else {
        toast.error('Failed to post comment.');
        console.error('Failed to post comment:', response.statusText);
      }
    } catch (error) {
      toast.error('Error occurred while posting comment.');
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="comment-popup-overlay">
      <div className="comment-popup-content">
        <button className="close-button11" onClick={onClose}>X</button>
        <textarea 
          value={comment} 
          onChange={handleCommentChange} 
          placeholder="Post your reply"
          className="comment-textarea"
        />
        <div className="popup-footer">
          <button onClick={handleCommentSubmit} className="reply-button">POST</button>
        </div>
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment-item">
              <p><strong>{comment.author}</strong>: {comment.content}</p>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CommentPopup;
