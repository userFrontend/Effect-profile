import React, { useEffect, useRef } from 'react'
import "./Phones.scss"

const Phones = () => {
  const phone1Ref = useRef(null);
  const phone3Ref = useRef(null);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const phone1 = phone1Ref.current;
      const phone3 = phone3Ref.current;

      if (phone1 && phone3) {
        const phone1Position = phone1.getBoundingClientRect().top;
        const phone3Position = phone3.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (phone1Position < screenPosition) {
          phone1.classList.add('animate');
        } else {
          phone1.classList.remove('animate');
        }

        if (phone3Position < screenPosition) {
          phone3.classList.add('animate');
        } else {
          phone3.classList.remove('animate');
        }
      }

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set new timeout
      scrollTimeout = setTimeout(() => {
        if (phone1 && phone3) {
          phone1.classList.remove('animate');
          phone3.classList.remove('animate');
        }
      }, 100); // Adjust this value to control how long the animation lasts after scrolling stops
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className='main-phone'>
      <article>
        <h1>
          Simplify scheduling by sending your availability
        </h1>
      </article>

      <section>
        <img ref={phone1Ref} className='phone phone1' src="/images/phone-kasting.png" alt="" />
        <img className='phone phone2' src="/images/phone-mehnat.png" alt="" />
        <img ref={phone3Ref} className='phone phone3' src="/images/phone-zamonaviy.png" alt="" />
      </section>
    </div>
  )
}


export default Phones