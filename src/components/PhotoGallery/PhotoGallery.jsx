import React, { useEffect, useRef } from 'react';
import './PhotoGallery.scss';
import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/infoContext';

const PhotoGallery = () => {
  const {language} = useInfoContext()
  const galleryItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      galleryItemsRef.current.forEach(item => {
        const rect = item.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.3;

        // Trigger the animation when the item enters the view
        if (rect.top < screenPosition) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible'); // Remove the class when it scrolls out of view
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 // Function to determine if screen is mobile
 const isMobile = () => window.innerWidth < 992;

 // Create the images array based on screen size
 const images = isMobile() 
   ? [
       { src: '/images/ART 1.png', side: 'left', color: "#eac843", link: 'https://t.me/effect_mehnat'},
       { text: language.gallery.mehnat, side: 'right', link: 'https://t.me/effect_mehnat'},
       { src: '/images/ART 2.png', side: 'left', color: "#1d5c9f", link: 'https://t.me/effect_mehnat_zamonaviykasb'},
       { text: language.gallery.zamonaviy, side: 'right', link: 'https://t.me/effect_mehnat_zamonaviykasb'},
       { src: '/images/ART 3.png', side: 'left', color: "#F7833A", link: 'https://t.me/effect_mehnat_ustalar'},
       { text: language.gallery.ustalar, side: 'right', link: 'https://t.me/effect_mehnat_ustalar'},
       { src: '/images/ART 4.png', side: 'left', color: "#cab1b4", link: 'https://t.me/effect_mehnat_ofis'},
       { text: language.gallery.ofis, side: 'right', link: 'https://t.me/effect_mehnat_ofis'},
       { src: '/images/ART 5.png', side: 'left', color: "#959e69", link: 'https://t.me/effect_mehnat_mardikorlar'},
       { text: language.gallery.mardikor, side: 'right', link: 'https://t.me/effect_mehnat_mardikorlar'},
       { src: '/images/ART 6.png', side: 'left', color: "#ef2b2b", link: 'https://t.me/effect_mehnat_kasting'},
       { text: language.gallery.kasting, side: 'right', link: 'https://t.me/effect_mehnat_kasting'},
       { src: '/images/ART 7.png', side: 'left', color: "#9009ad", link: 'https://t.me/effect_mehnat_sanat'},
       { text: language.gallery.sanat, side: 'right', link: 'https://t.me/effect_mehnat_sanat'},
     ] 
   : [
    { src: '/images/ART 1.png', side: 'left', color: "#eac843", link: 'https://t.me/effect_mehnat'},
    { text: language.gallery.mehnat, side: 'right', link: 'https://t.me/effect_mehnat'},
    { text: language.gallery.zamonaviy, side: 'left', link: 'https://t.me/effect_mehnat_zamonaviykasb'},
    { src: '/images/ART 2.png', side: 'right', color: "#1d5c9f", link: 'https://t.me/effect_mehnat_zamonaviykasb'},
    { src: '/images/ART 3.png', side: 'left', color: "#F7833A", link: 'https://t.me/effect_mehnat_ustalar'},
    { text: language.gallery.ustalar, side: 'right', link: 'https://t.me/effect_mehnat_ustalar'},
    { text: language.gallery.ofis, side: 'left', link: 'https://t.me/effect_mehnat_ofis'},
    { src: '/images/ART 4.png', side: 'right', color: "#cab1b4", link: 'https://t.me/effect_mehnat_ofis'},
    { src: '/images/ART 5.png', side: 'left', color: "#959e69", link: 'https://t.me/effect_mehnat_mardikorlar'},
    { text: language.gallery.mardikor, side: 'right', link: 'https://t.me/effect_mehnat_mardikorlar'},
    { text: language.gallery.kasting, side: 'left', link: 'https://t.me/effect_mehnat_kasting'},
    { src: '/images/ART 6.png', side: 'right', color: "#ef2b2b", link: 'https://t.me/effect_mehnat_kasting'},
    { src: '/images/ART 7.png', side: 'left', color: "#9009ad", link: 'https://t.me/effect_mehnat_sanat'},
    { text: language.gallery.sanat, side: 'right', link: 'https://t.me/effect_mehnat_sanat'},
     ];

 useEffect(() => {
   const handleScroll = () => {
     galleryItemsRef.current.forEach(item => {
       const rect = item.getBoundingClientRect();
       const screenPosition = window.innerHeight / 1.3;

       // Trigger the animation when the item enters the view
       if (rect.top < screenPosition) {
         item.classList.add('visible');
       } else {
         item.classList.remove('visible'); // Remove the class when it scrolls out of view
       }
     });
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

  return (
    <div className="gallery">
      {images.map((item, index) => (
        <div 
          className={`gallery__item fade-up-${item.side}`} 
          key={index}
          ref={el => galleryItemsRef.current[index] = el} // Store ref for each item
        >
          {item.src && <Link to={item.link ? item.link : ''}><img style={{backgroundColor: item.color}} id='tilt' src={item.src} alt={`Image ${index + 1}`} /></Link>}
          {item.text && <div className="text-block">{item.text} <br />
          {item.link && <Link to={item.link}><button className='gallery-btn'>{language.link}</button></Link>}
          </div>}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
