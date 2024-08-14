// src/Case.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Case.css';

const TopStory1 = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'SGQgfIiANcdKKUqtIPoHwr4H48p7UgBu';
  const section = 'world'; // You can change this to other sections like 'world', 'technology', etc.

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
        setArticles(response.data.results);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="case-container">
      <h2>Top Stories</h2>
      <div className="case-grid">
        {articles.slice(0, 4).map((article, index) => (
          <div key={index} className="case-item">
            <img src={article.multimedia?.[0]?.url || 'https://via.placeholder.com/150'} alt={article.title} />
            {/* <h3>{article.title}</h3> */}
            <h3>{article.abstract}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStory1;
