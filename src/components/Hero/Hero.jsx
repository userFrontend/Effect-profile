import React, { useRef, useEffect, useState } from 'react';
import './Hero.scss'; // Ensure you import your styles

const texts = [
  "If",
  "You",
  "Like",
  "It",
  "Please",
  "Give",
  "a Love",
  ":)",
  "by @DotOnion"
];

const Hero = () => {
  const heroRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [nextTextIndex, setNextTextIndex] = useState(1);
  const morphTime = 1;
  const cooldownTime = 0.25;
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      const newTime = new Date();
      const dt = (newTime - time) / 1000;
      time = newTime;
      setCooldown((prev) => prev - dt);

      if (cooldown <= 0) {
        if (morph < morphTime) {
          setMorph((prev) => prev + dt);
        } else {
          setCooldown(cooldownTime);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setNextTextIndex((prev) => (prev + 1) % texts.length);
          setMorph(0);
        }
      } else {
        setMorph(0);
      }
    };

    let time = new Date();
    animate();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = heroRef.current;
    const { left, top } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left) / offsetWidth;
    const y = (clientY - top) / offsetHeight;

    // Calculate tilt effect based on mouse position
    const tiltX = (y - 0.5) * 20;
    const tiltY = (x - 0.5) * -20;

    heroRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    heroRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  // Morphing styles
  const fraction = morph / morphTime;
  const text1Style = {
    filter: `blur(${Math.min(8 / (1 - fraction) - 8, 100)}px)`,
    opacity: `${Math.pow(1 - fraction, 0.4) * 100}%`,
  };

  const text2Style = {
    filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
    opacity: `${Math.pow(fraction, 0.4) * 100}%`,
  };

  return (
    <section className="scroll-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero" ref={heroRef}>
        <img className="hero-img" src="/images/heros.png" alt="Alt" />
        <div className="text-container">
          <h1 className="main-title">
            Welcome to <br />
            <span id="text1" style={text1Style}>{texts[currentTextIndex]}</span>
            <span id="text2" style={text2Style}>{texts[nextTextIndex]}</span>
          </h1>
        </div>
      </div>
    </section>
    
    
  );
};



export default Hero;
