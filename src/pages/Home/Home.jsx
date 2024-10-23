import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import './Home.scss'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Hero from '../../components/Hero/Hero';
import Phones from '../../components/Phones/Phones';

const Home = () => {

  return (
    <main>
      <Hero />
      <section>
        <div className="container">
          <PhotoGallery />
        </div>
      </section>
      <section>
        <div className="container">
          <img style={{objectFit: 'contain', height: "400px", margin: '20px 100px'}} src="/images/AD.jpg" alt="sponor" />
          <img style={{objectFit: 'contain', height: "400px", margin: '20px 100px'}} src="/images/AD1.webp" alt="sponor" />
        </div>
      </section>
    <Phones />
    </main>
  );
}

export default Home;
