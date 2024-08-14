import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Admincss/ManageContent.css';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditNewsModal from '../Admin/EditNewsModel';

const ManageContent = () => {
  const [articles, setArticles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  // Inline CSS for the confirmation modal
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
  };

  const confirmButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white',
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:9001/news/get');
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);
  

  const handleEditClick = (article) => {
    setCurrentArticle(article);
    setModalOpen(true);
  };

  const handleDeleteClick = (article) => {
    setShowConfirmation(true);
    setArticleToDelete(article);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:9001/news/delete/${articleToDelete.id}`);
      setArticles(articles.filter(article => article.id !== articleToDelete.id));
      setShowConfirmation(false);
      setArticleToDelete(null);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleUpdate = async (updatedArticle) => {
    try {
      await axios.put(`http://localhost:9001/news/update/${updatedArticle.id}`, updatedArticle);
      setArticles(articles.map(article => (article.id === updatedArticle.id ? updatedArticle : article)));
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating article:", error);
    }
  };

  return (
    <div className="manage-content">
      <h1>Manage Content</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Content</th>
            <th>Views</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            // Assuming `image` field is already base64-encoded
            const imageBase64 = `data:image/jpeg;base64,${article.image}`; // Default to 'jpeg' if not specified
            
            return (
              <tr key={article.id}>
                <td>
                  <img
                    src={imageBase64}
                    alt={article.title}
                    className="new-image"
                    style={{ width: '100px', height: '100px' }}
                  />
                </td>
                <td>{article.title}</td>
                <td>{article.content}</td>
                <td>
                  <FontAwesomeIcon icon={faEye} className="icon" />
                  {article.views}
                </td>
                <td>
                  <FontAwesomeIcon icon={faEdit} className="icon" onClick={() => handleEditClick(article)} />
                  <FontAwesomeIcon icon={faTrashAlt} className="icon" onClick={() => handleDeleteClick(article)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modalOpen && <EditNewsModal article={currentArticle} onClose={() => setModalOpen(false)} onUpdate={handleUpdate} />}
      
      {showConfirmation && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <p>Are you sure you want to delete this article?</p>
            <div style={buttonContainerStyle}>
              <button style={confirmButtonStyle} onClick={confirmDelete}>Confirm</button>
              <button style={cancelButtonStyle} onClick={() => setShowConfirmation(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageContent;
