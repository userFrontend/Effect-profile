import React, { useRef, useEffect, useState } from 'react';
import './Hero.scss'; // Make sure to import your styles

const phrases = [
  "Zamonaviy vakansiyalar",
  "Mardikor bozori",
  "Mehnat katta bozori",
  "Kasting kanali",
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="scroll-section">
      <div className="hero">
        <div className="text-container">
          <h1 className="main-title">
            Welcome to <br />
            <span className="effect-text">{phrases[currentPhrase]}</span>
          </h1>
        </div>
        <div className="image-box">
            <img className="hero-img" src="/images/heros.png" alt="Alt"/>
        </div>
      </div>
    </section>
    
    
  );
};

export default Hero;
