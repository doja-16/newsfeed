import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditNewsModal = ({ article, onClose, onSave }) => {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construct the form data
    const formData = new FormData();
    formData.append('id', article.id);
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`http://localhost:9001/news/update/${article.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success("Article updated successfully!");
      setTimeout(() => {
        // onSave({ ...article, title, content, image });
        onClose();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      console.error("Error updating article:", error);
      toast.error("Failed to update the article.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal1">
      <div className="modal-content1">
        <span className="close-button1" onClick={onClose}>×</span>
        <h2>Edit News Article</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image">Image (optional)</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default EditNewsModal;
