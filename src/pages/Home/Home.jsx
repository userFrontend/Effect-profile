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
    <div>
      <Hero />
      <section>
        <div className="container">
          <PhotoGallery />
        </div>
      </section>
    </div>
    {/* <Phones /> */}
    </main>
  );
}

export default Home;
