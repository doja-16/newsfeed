import React, { useEffect, useState } from 'react';
import '../styles/TopPicks.css'; // Custom CSS for styling

const TopPicks = () => {
  const [topPicks, setTopPicks] = useState([]);

  useEffect(() => {
    const apiKey = '7mAkpKvAOPXsOpyWklQnxQMnyUub2kw3';
    const section = 'home'; // Change this to the desired section

    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
      .then(response => response.json())
      .then(data => setTopPicks(data.results)) // Assuming data.results contains the list of articles
      .catch(error => console.error('Error fetching top picks:', error));
  }, []);

  return (
    <div className="top-picks-container">
      <h1 className="top-picks-title">Top Picks</h1>
      <div className="top-picks-slider">
        {topPicks.map((item, index) => (
          <div key={index} className="top-pick-card">
            <img src={item.multimedia?.[0]?.url} alt={item.title} className="top-pick-image" />
            <div className="top-pick-content">
              <h2>{item.section.toUpperCase()}</h2>
              <h2>{item.title}</h2>
              <p>{item.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
