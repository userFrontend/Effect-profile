import React, { useEffect, useRef } from 'react';
import './PhotoGallery.scss';

const PhotoGallery = () => {
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

  // const images = [
  //   { src: '/images/ART1.png', text: 'First Image', side: 'right' },
  //   { src: '/images/ART2.png', text: 'Second Image', side: 'left' },
  //   { src: '/images/ART3.png', text: 'Third Image', side: 'right' },
  //   { src: '/images/ART4.png', text: 'Fourth Image', side: 'left' },
  // ];

  const images = [
    { src: '/images/ART 1.png', side: 'left'},
    { text: `"EFFECT | Katta mehnat bozori" kanaliga xush kelibsiz! Ushbu kanal turli sohalar bo'yicha ish o'rinlarini yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'right' },
    { text: `"EFFECT | Zamonaviy vakansiyalar" kanaliga xush kelibsiz! Ushbu kanal zamonaviy kasblar bo'yicha vakansiyalarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'left' },
    { src: '/images/ART 2.png', side: 'right'},
    { src: '/images/ART 3.png', side: 'left'},
    { text: `"EFFECT | Ustalar bozori" kanaliga xush kelibsiz! Ushbu kanal ustachilik yo'nalishi bo'yicha turli hil ishlarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'right' },
    { text: `"EFFECT | Ofis vakansiyalari" kanaliga xush kelibsiz! Ushbu kanal ofislarda uchraydigan kasblar bo'yicha vakansiyalarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'left' },
    { src: '/images/ART 4.png', side: 'right'},
    { src: '/images/ART 5.png', side: 'left'},
    { text: `"EFFECT | Mardikorlar bozori" kanaliga xush kelibsiz! Ushbu kanal mardikorlik yo'nalishi bo'yicha turli hil ish o'rinlarini yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'right' },
    { text: `"EFFECT | Kasting" kanaliga xush kelibsiz! Ushbu kanal san'at sohasi bo'yicha loyihalarni yoki mutaxassislarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'left' },
    { src: '/images/ART 6.png', side: 'right'},
    { src: '/images/ART 7.png', side: 'left'},
    { text: `"EFFECT | San'at sohalari ishlari" kanaliga xush kelibsiz! Ushbu kanal san'at sohasi bo'yicha ishlarni yoki mutaxassislarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.`, side: 'right' },
    { text: `"EFFECT" - bu internet-rekrutment va har tomonlama professional aloqalarni o'rnatish uchun zamonaviy onlayn xizmatlarni taqdim etishga ixtisoslashgan kompaniya.`, side: 'right' },
  ];

  return (
    <div className="gallery">
      {images.map((item, index) => (
        <div 
          className={`gallery__item fade-up-${item.side}`} 
          key={index}
          ref={el => galleryItemsRef.current[index] = el} // Store ref for each item
        >
          {item.src && <img id='tilt' src={item.src} alt={`Image ${index + 1}`} />}
          {item.text && <div className="text-block">{item.text}</div>}
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
