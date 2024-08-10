// src/Footer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const [news, setNews] = useState([]);
  const [groupNews, setGroupNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY`
        );
        setNews(response.data.articles.slice(0, 10)); // Adjust the number as needed
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchGroupNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=YOUR_API_KEY`
        );
        setGroupNews(response.data.articles.slice(0, 10)); // Adjust the number as needed
      } catch (error) {
        console.error('Error fetching group news:', error);
      }
    };

    fetchNews();
    fetchGroupNews();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Daily Bugle</h3>
        <ul>
          <li>About Us</li>
          <li>Code of Editorial Values</li>
          <li>News Archive</li>
          <li>Sitemap</li>
          <li>Print Subscription</li>
          <li>Digital Subscription</li>
          <li>Subscribe to Newsletters</li>
          <li>Rss Feeds</li>
          <li>Readers Editor-Terms of Reference</li>
          <li>Authors & Contributors</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Other Products</h3>
        <ul>
          <li>RoofandFloor</li>
          <li>STEP</li>
          <li>Images</li>
          <li>Classifieds – Print</li>
          <li>Bookstore & Special Publications</li>
        </ul>
        <h3>Popular Sections</h3>
        <ul>
          <li>Elections</li>
          <li>Israeli-Palestinian conflict 2023</li>
          <li>Latest News</li>
          <li>National News</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Business</h3>
        <ul>
          <li>Agri-Business</li>
          <li>Industry</li>
          <li>Economy</li>
          <li>Markets</li>
          <li>Budget</li>
        </ul>
        <h3>Sport</h3>
        <ul>
          <li>Cricket</li>
          <li>Football</li>
          <li>Hockey</li>
          <li>Tennis</li>
          <li>Athletics</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>States</h3>
        <ul>
          <li>Andhra Pradesh</li>
          <li>Karnataka</li>
          <li>Kerala</li>
          <li>Tamil Nadu</li>
          <li>Telangana</li>
        </ul>
        <h3>Cities</h3>
        <ul>
          <li>Bengaluru</li>
          <li>Chennai</li>
          <li>Coimbatore</li>
          <li>Delhi</li>
          <li>Hyderabad</li>
        </ul>
      </div>
    
      <div className="footer-section">
        <h3>Group News Sites</h3>
        <ul>
          <li>Business Line</li>
          <li>BL on Campus</li>
          <li>Sportstar</li>
          <li>Frontline</li>
        
          <li>DailyBugle Centre</li>
          <li>Young World Club</li>
          <li>ePaper</li>
          <li>Business Line ePaper</li>
          <li>Crossword + Free Games</li>
        </ul>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-whatsapp"></i></a>
        <a href="#"><i className="fab fa-x-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fab fa-spotify"></i></a>
        <a href="#"><i className="fab fa-telegram"></i></a>
      </div>
      <div className="footer-bottom">
        <a href="#">TERMS OF USE</a> / <a href="#">PRIVACY POLICY</a>
        <p>&copy; 2024, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</p>
        <a href="#" className="back-to-top">BACK TO TOP</a>
      </div>
    </footer>
  );
};

export default Footer;
