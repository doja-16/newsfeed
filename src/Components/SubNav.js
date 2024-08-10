import React from 'react';
import './Sports.css';
import Navbar from './NavBar';

const articles = [
    {
        title: "Trending News LIVE: Prashant Kishor prepares for re-entry into politics, lays out party’s leadership roadmap",
        subtitle: "Breaking News",
        content: "The result, which would give Nicolás Maduro six more years as president, is likely to be disputed by the opposition. The voting was riddled with irregularities.",
        readTime: "7 MIN READ"
    },
    {
        title: "Trending News LIVE: DMK vs Opposition As Two More Political Workers From Tamil Nadu Killed",
        subtitle: "Politics",
        content: "From the 1940s (Tangee!) to today (Fenty!), here’s a timeline filled with glitter and gloss.",
        readTime: "3 MIN READ"
    },
    {
        title: "Trending News LIVE: Selvakumar was president of the party's district cooperative wing, and an accused in a murder case. .",
        subtitle: "LIVE UPDATE",
        content: "From the 1940s (Tangee!) to today (Fenty!), here’s a timeline filled with glitter and gloss.",
        readTime: "13 MIN READ"
    },
    {
        title: "Trending News LIVE: Mumbai police scores again with hilarious Simpsons-inspired password message. See post",
        subtitle: "Weird News",
        content: "The Mumbai Police made a reference to The Simpsons, which is known for predicting events and made a post on the importance of strong passwords.",
        readTime: "9 MIN READ"
    },
    {
        title: "Trending News LIVE: ‘Medal is bronze, look is pure gold’: Anand Mahindra on Manu Bhaker's historic Olympic medal",
        subtitle: "Olympics Wins",
        content: "During his conversation with Ranbir Kapoor, Nikhil Kamath shared his views on Bengaluru. He also elaborated on how he feels about Mumbai.",
        readTime: "18 MIN READ"
    },
    {
        title: "Trending News LIVE: Nikhil Kamath discusses difference between Bengaluru and Mumbai with Ranbir Kapoor in latest podcast",
        subtitle: "Politics",
        content: "During his conversation with Ranbir Kapoor, Nikhil Kamath shared his views on Bengaluru.",
        readTime: "20 MIN READ"
    }
    // Add more articles as needed
];

const SubNav= () => {
    return (
        <div className="sports-section">
            {articles.map((article, index) => (
                <div className="card" key={index}>

                    <div className="card-content">
                        {article.subtitle && <p className="subtitle">{article.subtitle}</p>}
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <p className="read-time">{article.readTime}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubNav;
