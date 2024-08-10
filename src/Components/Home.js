import React from 'react';
import './NewHome.js';
import '../styles/Home.css';
import '../styles/SubNav.css'; 
import './Sports.js';

import NavBar from '../Components/NavBar.js';
import Article from './Article.js';
import Cards from './Cards.js';
import Footer from './Footer.js';
import NewArticle from './NewAriticle.js';
import Newfile from './Newfile.js';

function Home({ toggleLoginForm }) {
  return (
    
    <div className="home-container">
     
      <Article />
      <Cards/> 
      <h1 className='newst'>Trending News</h1>
      <NewArticle/>
      {/* <Newfile/> */}
    
      <Footer/>
    </div>
    

  );
}

export default Home;
