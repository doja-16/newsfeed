import React, { useEffect, useState } from 'react';
import '../styles/Sports.css';

const Politics = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=in', {
                    headers: {
                        'Authorization': '114df3409db34fea85c87618cc115fe9' // Replace with your API key
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching the articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="container">
            <main>
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <section className="news-section" key={index}>
                            <article>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <p>Source: {article.source.name}</p>
                                <p>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
                            </article>
                            {article.urlToImage && (
                                <div>
                                    <img src={article.urlToImage} alt={article.title} className="main-image" />
                                </div>
                            )}
                        </section>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </div>
    );
}

export default Politics;
