import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Sports.css'
import Shorts from './Shorts';
import TopStory1 from './TopStory1';

const Culture= () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news', {
                    params: {
                        apikey: 'pub_50522283f174b55674e713419dad6a8d2c89b', // Your API key
                        q: 'world', // Query for sports-related news
                        country: 'us',
                        language: 'en'
                    }
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

        fetchNews();
    }, []);

    // Function to truncate text
    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className='container'>
            <TopStory1/>
            <Shorts/>
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <section className="news-section" key={index}>
                        {article.image_url && (
                            <img src={article.image_url} alt={article.title} className="main-image" />
                        )}
                        <article>
                            <h2>{article.title}</h2>
                            <p>{truncateText(article.description || '', 300)}</p> {/* Truncate description to 300 characters */}
                            <p>Source: {article.source_id}</p>
                            <p>Published: {new Date(article.pubDate).toLocaleDateString()}</p>
                        </article>
                    </section>
                ))
            ) : (
                <p>Loading....</p>
            )}
            
        </div>
    );
};

export default Culture;
