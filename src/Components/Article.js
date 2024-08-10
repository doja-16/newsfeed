import React from 'react';
import '../styles/Article.css';
import icon from '../Assets/icon.jpeg';

const Article = () => {
  return (
    <div className="news-article">
      <div className="premium">
        <h2>Premium</h2>
        <ul>
          <li><a href="#">Fighting militants in the mountains</a></li>
          <li><a href="#">Surprising ‘dark oxygen’ discovery could ensnarl deep-sea mining | Explained</a></li>
          <li><a href="#">Destiny’s child, outlier, everyman: the many shades of P.R. Sreejesh</a></li>
          <li><a href="#">Paris Olympics: The undisputed victor of Olympic shooting — Nilesh Rane’s Capapie</a></li>
        </ul>
      </div>
      <div className="main-article">
        <h1>3 Army personnel injured in exchange of fire in Jammu and Kashmir’s Kupwara</h1>
        <p>Further details are awaited as the operation is ongoing</p>
        <img src={icon} alt="Army personnel" />
        <p>PTI</p>
      </div>
      <div className="latest-news">
        <h2>Latest News</h2>
        <ul>
          <li><span>3 mins ago – Goa</span> <a href="#">Shortage of 18 judges in 10 courts across Goa: State Law Minister tells Assembly</a></li>
          <li><span>22 mins ago – Kerala</span> <a href="#">Car topples during the shooting of Malayalam film ‘Bromance’ injuring Arjun Ashokan</a></li>
          <li><span>51 mins ago – India</span> <a href="#">PM Modi to chair NITI Aayog's meeting amid boycott by opposition states</a></li>
          <li><span>1 hour ago – Mumbai</span> <a href="#">Four-storey building collapses in Navi Mumbai; 2 rescued, 3 feared trapped</a></li>
          <li><span>1 hour ago – World</span> <a href="#">FBI says Trump was indeed struck by bullet during assassination attempt</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Article;
