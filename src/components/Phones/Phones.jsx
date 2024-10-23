import React, { useEffect, useRef, useState } from 'react';
import "./Phones.scss";

const Phones = () => {
  const [inView , setInView] =useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      {threshold:0.2}
    )

    if(sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, []);


  return (
    <div className='main-phone'>
      <article>
        <h1>
          Simplify scheduling by sending your availability
        </h1>
      </article>

      <section ref={sectionRef} className={inView ? "animate" : ""}>
          <img className='phone1' src="/images/phone-kasting.png" alt="" />
          <img className='phone2' src="/images/phone-mehnat.png" alt="" />
          <img className='phone3' src="/images/phone-zamonaviy.png" alt="" />
      </section>
    </div>
  );
}

export default Phones;