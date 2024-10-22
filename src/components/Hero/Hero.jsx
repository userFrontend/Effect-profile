import React, { useRef, useEffect, useState } from 'react';
import './Hero.scss'; // Make sure to import your styles

const phrases = [
    "Ish",
    "Rezyumi",
    "Sherik",
    "Ustoz",
    "Shogirt"  ,
  ];

const Hero = () => {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [morph, setMorph] = useState(0);
    const [cooldown, setCooldown] = useState(true);
  
    const morphTime = 40; // Time for morphing
    const cooldownTime = 400; // Time the text stays visible after morphing
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (cooldown) {
          // When in cooldown, switch to the next phrase
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setMorph(0); // Reset morph state
          setCooldown(false); // End cooldown
        } else {
          // Progress morph
          setMorph((prevMorph) => {
            const newMorph = prevMorph + 1;
            if (newMorph >= morphTime) {
              // When morphing time is completed, start cooldown
              setCooldown(true);
              return morphTime; // Ensure it stays at morphTime to avoid sudden jumps
            }
            return newMorph;
          });
        }
      }, 50); // Run every 50ms for smooth transitions
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [morph, cooldown, phrases.length]);
  
    const fraction = morph / morphTime;
    const blurValue = (fraction) => Math.min(8 / fraction - 8, 100);
    const opacityValue = (fraction) => Math.pow(fraction, 0.4) * 100;
      
    

  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;

    const height = el.clientHeight;
    const width = el.clientWidth;

    const handleMove = (e) => {
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);

      const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      el.style.transform = transformString;
      el.style.animation = 'none';  // Disable animation while hovering
    };

    const resetTransform = () => {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
      el.style.animation = 'tiltAnimation 5s ease-in-out infinite alternate';  // Re-enable animation
    };

    const onMouseDown = () => {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
      el.style.animation = 'none';
    };

    const onMouseUp = () => {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
      el.style.animation = 'tiltAnimation 5s ease-in-out infinite alternate';
    };

    // Add event listeners
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseout', resetTransform);
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseup', onMouseUp);

    // Clean up event listeners
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseout', resetTransform);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseup', onMouseUp);
    };
  }, []);


  return (
    <section className="scroll-section">
        <div className="container">
        <div className="hero">
        <div className="text-container">
      <h1 className="main-title"> 
        <span className="effect-text">
            <b>Assalomu alekum. <br /> Siz bizning saytimizda topishingiz mumkin:</b><br />
          <span
            style={{
              position: 'absolute',
              filter: `blur(${blurValue(1 - fraction)}px)`,
              opacity: `${opacityValue(1 - fraction)}%`,
            }}
          >
            {phrases[currentPhrase]}
          </span>
          <span
            style={{
              position: 'absolute',
              filter: `blur(${blurValue(fraction)}px)`,
              opacity: `${opacityValue(fraction)}%`,
            }}
          >
            {phrases[(currentPhrase + 1) % phrases.length]}
          </span>
        </span>
      </h1>
    </div>
        <div className="image-box">
            <img id='tilt' className="hero-img" src="/images/logo.png" alt="Alt" ref={tiltRef}/>
        </div>
      </div>
      </div>
    </section>
    
    
  );
};

export default Hero;
