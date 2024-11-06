import React from 'react'
import './Home.scss'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Hero from '../../components/Hero/Hero';
import Phones from '../../components/Phones/Phones';
import { useInfoContext } from '../../context/infoContext';

const Home = () => {
  const {language} = useInfoContext()
  return (
    <main>
      <Hero />
      <section>
        <div className="container">
          <h2 className='section-title'>{language.section.direction}</h2><hr />
          <PhotoGallery />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className='section-title'>{language.section.sponsors}</h2><hr />
          <h3 className='info'>{language.info}</h3>
          <div className="sponsore">
          <img id='tiltw' src="/images/AD.jpg" alt="sponor" />
          <img id='tiltw' src="/images/AD1.webp" alt="sponor" />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <h2 className='section-title'>Qo'shimcha</h2><hr />
          <Phones />
        </div>
      </section> */}
    </main>
  );
}

export default Home;
