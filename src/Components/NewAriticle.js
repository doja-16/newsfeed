import React, { useEffect, useState } from 'react';
import '../styles/NewArticle.css';

const NewArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = 'https://newsapi90.p.rapidapi.com/topic?topicId=CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB&language=en-US&region=US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'f49dabd3f9msh18ac6eff7bd02fep14156ajsn632ea5cd165c',
          'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Log the result to understand the structure
        console.log(result);

        // Assuming the result is an array of articles
        if (Array.isArray(result)) {
          setArticles(result);
        } else {
          console.error('Unexpected response structure:', result);
          setArticles([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the news articles', error);
        setLoading(false);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <div className="articles">
        {loading ? (
          <p>Loading...</p>
        ) : (
          articles.length > 0 ? (
            articles.map((article, index) => (
              <div key={index} className="article">
                {article.image && (
                  <div className="image-placeholder">
                    <img src={article.image} alt={article.title} />
                  </div>
                )}
                <div className="article-content">
                  <h2>{article.title}</h2>
                  {/* <h2>{article.preview}</h2> */}
                  <p>{article.source?.name}</p>
                  {/* <p>{article.preview}</p> */}
                  {/* <p>Published: {new Date(article.published_at).toLocaleDateString()}</p> */}
                </div>
              </div>
            ))
          ) : (
            <p>No articles found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default NewArticle;
