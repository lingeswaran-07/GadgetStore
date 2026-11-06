import { useState, useEffect } from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const ads = [
    {
      image: 'https://static.vecteezy.com/system/resources/previews/000/691/688/non_2x/sale-banner-template-with-special-sale-vector.jpg',
      link: '/', 
    },
    {
      image: 'https://img.freepik.com/free-vector/hand-drawn-electronics-store-sale-banner-template_23-2151138129.jpg?w=1060&t=st=1723213644~exp=1723214244~hmac=b226160195f5801cb0738da952f40ef65a2fab47fa7dc5827f4a8982f1f94885',
      link: '/laptops',
    },
    {
      image: 'https://img.freepik.com/free-vector/electronics-store-sale-banner-template_23-2151173125.jpg?w=1060&t=st=1723213433~exp=1723214033~hmac=b59c304344d837db1369ed34f2a2517d55c2f6c70bb087e8a2551742323f2ad9',
      link: '/earbuds', 
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
6999
  const handleNext = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentAdIndex((prevIndex) =>
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="banner-container" id='banner'>
      <div className="arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </div>
      <Link to={ads[currentAdIndex].link}>
        <img
          src={ads[currentAdIndex].image}
          alt={`Ad ${currentAdIndex + 1}`}
          className="banner-image"
        />
      </Link>
      <div className="arrow right-arrow" onClick={handleNext}>
        &#8250;
      </div>
    </div>
  );
};

export default Banner;
