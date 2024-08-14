import React from 'react';
import './NewHome.js';
import '../styles/Home.css';
import '../styles/SubNav.css'; 
import './Sports.js';

import NavBar from '../Components/NavBar.js';
import Article from './Article.js';
import Cards from './Cards.js';
import Footer from './Footer.js';

import TopPicks from './TopPicks.js';
import Trend from './Trend.js';
import Shorts from './Shorts.js';
import Case from './Case.js';

function Home({ toggleLoginForm }) {
  return (
    
    <div className="home-container">
     
      {/* <Article />
      <Cards/>  */}
      <Trend/>
      <TopPicks/>
      <Shorts/>
      <Case/>
      {/* <Newfile/> */}
    
      <Footer/>
    </div>
    

  );
}

export default Home;
