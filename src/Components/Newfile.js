// src/NewsFeed.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Newfile() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '97a7b067709a4a399f3101aad73419a5'; // Replace YOUR_API_KEY with your actual News API key
    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(endpoint)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className="news-container">
      <div className="left-column">
        {articles.slice(0, Math.ceil(articles.length / 2)).map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p className="date">{formatDate(article.publishedAt)}</p>
          </div>
        ))}
      </div>
      <div className="right-column">
        {articles.slice(Math.ceil(articles.length / 2)).map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <p className="date">{formatDate(article.publishedAt)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newfile;
