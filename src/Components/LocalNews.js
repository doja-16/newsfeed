import React, { useState, useEffect } from 'react';
import '../styles/Epaper.css';  // Importing the CSS file for styles

// Example JSON data embedded directly in the file
const jsonData = {
    articles: [
        {
            id: 1,
            title: "Supreme Court Grants Bail in Policy Case",
            image: "https://example.com/image1.jpg",
            content: "The Supreme Court on Friday stressed on the Central Bureau of Investigation (CBI)..."
        },
        {
            id: 2,
            title: "Secondary News Item",
            image: "https://example.com/image2.jpg",
            content: "Details of the second news item..."
        }
        ,
        {
            id: 2,
            title: "Secondary News Item",
            image: "https://example.com/image2.jpg",
            content: "Details of the second news item..."
        }
        ,
        {
            id: 2,
            title: "Secondary News Item",
            image: "https://example.com/image2.jpg",
            content: "Details of the second news item..."
        }
        // Add more articles as needed
    ]
};

const Header = () => (
  <header>
    <h1 className='text1'>News E-Paper</h1>
  </header>
);

const NewsArticle = ({ article }) => (
  <article>
    <h2>{article.title}</h2>
    <img src={article.image} alt={article.title} />
    <p>{article.content}</p>
  </article>
);

const Footer = () => (
  <footer>
    <p>© 2024 E-Paper News, Inc.</p>
  </footer>
);

const Epaper = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulating fetching data by using static JSON data
    setArticles(jsonData.articles);
  }, []);

  return (
    <div className="Epaper">
      <Header />
      <main>
        {articles.map(article => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Epaper;
