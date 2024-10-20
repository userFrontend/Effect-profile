import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import './Home.scss'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Hero from '../../components/Hero/Hero';

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
        {/* <section className="wrapper">
                <div className="content">
                    

                    <div className="portfolio">
                    <div className="container">
                        <main className="gallery">
                        <div data-speed=".9" className="gallery__left">
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                            <div className="text-block gallery__item">
                            <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                            </div>
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                        </div>

                        <div data-speed="1.1" className="gallery__right">
                            <div className="text-block gallery__item">
                            <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                            <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                            </div>
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                            <img className="gallery__item" src="/images/heroso.png" alt="Alt" />
                        </div>
                        </main>
                    </div>
                    </div>
                </div>
        </section> */}
    </main>
  );
}

export default Home;
