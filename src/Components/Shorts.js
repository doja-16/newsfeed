import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Shorts.css'; // Custom CSS for styling

const Shorts = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'SGQgfIiANcdKKUqtIPoHwr4H48p7UgBu';
  const section = 'travel'; // Use the sports section
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNewsItems(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 2000, // 2 seconds per slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const getHighResImage = (multimedia) => {
    if (!multimedia || multimedia.length === 0) return null;
    const highResImage = multimedia.find(
      (media) =>
        media.format === 'superJumbo' ||
        media.format === 'Jumbo' ||
        media.format === 'large'
    );
    return highResImage ? highResImage.url : multimedia[0].url;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shorts-container">
      <h1 className="top-picks-title">Shorts</h1>
      <Slider {...settings}>
        {newsItems.map((item, index) => (
          <div key={index} className="shorts-card">
            {item.multimedia && item.multimedia.length > 0 ? (
              <img
                src={getHighResImage(item.multimedia)}
                alt={item.title}
                className="shorts-image"
              />
            ) : (
              <div className="placeholder-image">No Image Available</div>
            )}
            <div className="shorts-content">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shorts;
