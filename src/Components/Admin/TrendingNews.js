import React from 'react';
import '../../styles/Admincss/TrendingNews.css'; // Import the CSS file for styling

const newsData = [
  {
    title: "India's Rising Start-up Ecosystem",
    description: "India's start-up ecosystem is flourishing, with a surge in entrepreneurial activities across various sectors.",
    views: 40250,
  },
  {
    title: "E-commerce Revolution in India",
    description: "India's e-commerce sector is undergoing a revolution, with increasing internet penetration and digital payments.",
    views: 38700,
  },
  {
    title: "Emergence of AI and Automation",
    description: "India is witnessing the emergence of AI and automation technologies, transforming industries and enhancing productivity.",
    views: 33700,
  },
  {
    title: "Emergence of AI and Automation",
    description: "India is witnessing the emergence of AI and automation technologies, transforming industries and enhancing productivity.",
    views: 33700,
  },
];

const TrendingNews = () => {
  return (
    <div className="trending-news-container">
      <h2>Trending News</h2>
      <div className="news-cards">
        {newsData.map((news, index) => (
          <div className="news-card" key={index}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <span>Views: {news.views}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
