import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Epaper.css';
import CommentPopup from './CommentPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'; 
import TopPicks from './TopPicks';

// Define the Header component
const Header = () => (
  <header>
    <h1 className='text1'>Reporter News-Paper</h1>
  </header>
);

// Define the Footer component
const Footer = () => (
  <footer>
    <p>© 2024 E-Paper News, Inc.</p>
  </footer>
);

const NewsArticle = ({ article, userId }) => {
  const imageSrc = article.image ? `data:image/jpeg;base64,${article.image}` : '';
  const [likes, setLikes] = useState(article.likes || 0);
  const [comments, setComments] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fetch comments for the article when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/comments/${article.id}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [article.id]);

  // Handle like button click
  const handleLike = async () => {
    try {
      // Update like count in the backend
      const response = await axios.post(`http://localhost:9001/news/like`, {
        articleId: article.id,
        userId: userId,
      });
      setLikes(response.data.likes); // Assume the response contains the updated likes
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Toggle comment popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Add new comment to the state
  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <article>
      <h2>{article.title}</h2>
      {imageSrc && <img src={imageSrc} alt={article.title} />}
      <p>{article.content}</p>
      <div className="article-actions">
        <button onClick={handleLike} className="like-button">
          <FontAwesomeIcon icon={faHeart} /> {likes}
        </button>
        <button onClick={togglePopup} className="comment-button">
          <FontAwesomeIcon icon={faComment} /> {comments.length}
        </button>
      </div>
      
      {isPopupOpen && (
        <CommentPopup 
          onClose={togglePopup} 
          newsId={article.id}
          onCommentAdded={addComment}  // Pass down the function to add a comment
        />
      )}
    </article>
  );
};

const Epaper = ({ userId }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:9001/news/get');
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="Epaper">
      <Header />
      <main>
        {articles.map(article => (
          <NewsArticle key={article.id} article={article} userId={userId} />
        ))}
      </main>
      <TopPicks />
      <Footer />
    </div>
  );
};

export default Epaper;
