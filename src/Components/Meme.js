import React, { useEffect, useState } from 'react';
import '../styles/Sports.css'; // Ensure this CSS file exists or adjust accordingly
import axios from 'axios';

const Meme = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news', {
                    params: {
                        apikey: 'pub_50522283f174b55674e713419dad6a8d2c89b', // Your API key
                        category: 'technology',  // Fetching technology news
                        language: 'en'          // Specify the language
                    },
                });

                if (response.data && response.data.results) {
                    setArticles(response.data.results);
                } else {
                    console.error('Invalid API response:', response);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
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
                            {article.image_url && (
                                <div>
                                    <img src={article.image_url} alt={article.title} className="main-image" />
                                </div>
                            )}
                            <article>
                                <h2>{article.title}</h2>
                                <p>{article.description}</p>
                                <p>Source: {article.source_id}</p>
                                <p>Published: {new Date(article.pubDate).toLocaleDateString()}</p>
                            </article>
                        </section>
                    ))
                ) : (
                    <p>Loading....</p>
                )}
            </main>
        </div>
    );
}

export default Meme;
