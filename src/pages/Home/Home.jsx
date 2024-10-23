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
          <img src="/images/AD" alt="sponor" />
          <img src="/images/AD1" alt="sponor" />
        </div>
      </section>
    {/* <Phones /> */}
    </main>
  );
}

export default Home;
