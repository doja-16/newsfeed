import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Admincss/ManageContent.css';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditNewsModal from '../Admin/EditNewsModel'; // Correct the import if necessary

const ManageContent = () => {
  const [articles, setArticles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:9001/news/get'); // Adjust the endpoint as needed
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

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/news/delete/${id}`);
      setArticles(articles.filter(article => article.id !== id));
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
            <th>No.</th>
            <th>Title</th>
            <th>Content</th>
            <th>Views</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.content}</td>
              <td>
                <FontAwesomeIcon icon={faEye} className="icon" />
                {article.views}
              </td>
              <td>
                <FontAwesomeIcon icon={faEdit} className="icon" onClick={() => handleEditClick(article)} />
                <FontAwesomeIcon icon={faTrashAlt} className="icon" onClick={() => handleDeleteClick(article.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && <EditNewsModal article={currentArticle} onClose={() => setModalOpen(false)} onUpdate={handleUpdate} />}
    </div>
  );
};

export default ManageContent;
