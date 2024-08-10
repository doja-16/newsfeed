import React from 'react';
import '../styles/Cards.css';

const Cards = ({ article }) => {
  if (!article) return null;

  const { title, description, url } = article;

  return (
    <div className="card">
      <h2>{title || "No title available"}</h2>
      <p>{description || "No description available"}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default Cards;
