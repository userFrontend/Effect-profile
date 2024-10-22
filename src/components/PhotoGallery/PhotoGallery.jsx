import React, { useEffect, useState } from 'react';
import './PhotoGallery.scss';

const PhotoGallery = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - windowHeight;

      // Scrollni nisbatda hisoblash (0 - boshida, 1 - oxirida)
      const scrollRatio = Math.min(scrollTop / maxScroll, 1);
      setScrollPos(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        item.classList.add('in-view');
      } else {
        item.classList.remove('in-view');
      }
    });
  }, [scrollPos]);

  const images = [
    { src: '/images/ART 1.png', text: `"EFFECT | Katta mehnat bozori" kanaliga xush kelibsiz! Ushbu kanal turli sohalar bo'yicha ish o'rinlarini yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 2.png', text: `"EFFECT | Zamonaviy vakansiyalar" kanaliga xush kelibsiz! Ushbu kanal zamonaviy kasblar bo'yicha vakansiyalarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 3.png', text: `"EFFECT | Ustalar bozori" kanaliga xush kelibsiz! Ushbu kanal ustachilik yo'nalishi bo'yicha turli hil ishlarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 4.png', text: `"EFFECT | Ofis vakansiyalari" kanaliga xush kelibsiz! Ushbu kanal ofislarda uchraydigan kasblar bo'yicha vakansiyalarni yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 5.png', text: `"EFFECT | Mardikorlar bozori" kanaliga xush kelibsiz! Ushbu kanal mardikorlik yo'nalishi bo'yicha turli hil ish o'rinlarini yoki ishchilarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 6.png', text: `"EFFECT | Kasting" kanaliga xush kelibsiz! Ushbu kanal san'at sohasi bo'yicha loyihalarni yoki mutaxassislarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { src: '/images/ART 7.png', text: `"EFFECT | San'at sohalari ishlari" kanaliga xush kelibsiz! Ushbu kanal san'at sohasi bo'yicha ishlarni yoki mutaxassislarni, ustozlarni yoki shogirtlarni, qolaversa sheriklarni ham topishga yordam beradi.` },
    { text: `"EFFECT" - bu internet-rekrutment va har tomonlama professional aloqalarni o'rnatish uchun zamonaviy onlayn xizmatlarni taqdim etishga ixtisoslashgan kompaniya.` },
  ];

  return (
    <div className="photo-gallery">
      {images.map((item, index) => (
        <div key={index} className={`gallery-item ${index % 2 === 0 ? 'gallery__right' : 'gallery__left'}`}>
          {item.src && <img src={item.src} alt={`Gallery item ${index + 1}`} />}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
