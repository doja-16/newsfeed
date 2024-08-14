import React, { useEffect, useState } from 'react';
import '../styles/Trend.css';

const Trend = () => {
  const [mainArticle, setMainArticle] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const [premiumArticles, setPremiumArticles] = useState([]);

  useEffect(() => {
    const apiKey = '7mAkpKvAOPXsOpyWklQnxQMnyUub2kw3';
    const section = 'home'; // Change this to the desired section

    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          setMainArticle(data.results[0]); // Set the main article
          setPremiumArticles(data.results.slice(1, 5)); // First 4 articles as premium
          setLatestNews(data.results.slice(5, 10)); // Next 5 articles as latest news
        }
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="trend-container">
      <div className="left-section">
        <h2 className="section-title">Premium</h2>
        <ul className="premium-articles">
          {premiumArticles.map((article, index) => (
            <li key={index} className="premium-article">
              <a target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
                <p>{article.byline}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-section">
        {mainArticle && (
          <>
            <h2 className="main-article-title">{mainArticle.title}</h2>
            <p className="main-article-byline">{mainArticle.byline}</p>
            <img
              src={mainArticle.multimedia?.[0]?.url}
              alt={mainArticle.title}
              className="main-article-image"
            />
            <p className="main-article-abstract">{mainArticle.abstract}</p>
          </>
        )}
      </div>
      <div className="right-section">
        <h2 className="section-title">Latest News</h2>
        <ul className="latest-news">
          {latestNews.map((article, index) => (
            <li key={index} className="latest-news-item">
              <a target="_blank" rel="noopener noreferrer">
                <p className="latest-news-time">{new Date(article.created_date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} ago - {article.section}</p>
                <h4>{article.title}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trend;
