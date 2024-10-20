import React, { useEffect, useRef } from 'react';
import './PhotoGallery.scss';

const PhotoGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = galleryRef.current.querySelectorAll('.gallery-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const images = [
    { src: '/images/ART 1.png', text: 'Description 1' },
    { src: '/images/ART 2.png', text: 'Description 2' },
    { src: '/images/ART 3.png', text: 'Description 3' },
    { src: '/images/ART 4.png', text: 'Description 4' },
    { src: '/images/ART 5.png', text: 'Description 5' },
    { src: '/images/ART 6.png', text: 'Description 6' },
    { src: '/images/ART 7.png', text: 'Description 7' },
  ];
  // const images = [
  //   { src: 'https://picsum.photos/600/400?random=1', text: 'Description 1' },
  //   { src: 'https://picsum.photos/600/400?random=2', text: 'Description 2' },
  //   { src: 'https://picsum.photos/600/400?random=3', text: 'Description 3' },
  //   { src: 'https://picsum.photos/600/400?random=4', text: 'Description 4' },
  //   { src: 'https://picsum.photos/600/400?random=5', text: 'Description 5' },
  //   { src: 'https://picsum.photos/600/400?random=6', text: 'Description 6' },
  //   { src: 'https://picsum.photos/600/400?random=7', text: 'Description 7' },
  //   { src: 'https://picsum.photos/600/400?random=8', text: 'Description 8' },
  //   { src: 'https://picsum.photos/600/400?random=9', text: 'Description 9' },
  //   { src: 'https://picsum.photos/600/400?random=10', text: 'Description 10' },
  // ];

  return (
    <div ref={galleryRef} className="photo-gallery">
      {images.map((item, index) => (
        <div key={index} className={`gallery-item ${index % 2 !== 0 ? 'gallery__left' : 'gallery__right'}`}>
          <img src={item.src} alt={`Gallery item ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
