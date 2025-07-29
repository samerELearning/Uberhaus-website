import React, { useEffect, useRef } from 'react';
import './listings.css';
import img1 from './Assets/Images/image1.webp';
import img2 from './Assets/Images/image2.webp';
import img3 from './Assets/Images/image3.webp';
import img4 from './Assets/Images/image4.webp';
import img5 from './Assets/Images/image5.webp';


const listings = [
  {
    title: 'Renevoir Residence',
    desc: 'A stunning luxury home with bespoke services from Uberhaus.',
    image: img1,
  },
  {
    title: 'Glass Garden',
    desc: 'Beautiful luxury home with personalized services from Uberhaus.',
    image: img2,
  },
  {
    title: 'Orum Manor',
    desc: 'An exquisite luxury retreat with elegant finishes from Uberhaus.',
    image: img3,
  },
  {
    title: 'Glass Garden',
    desc: 'Beautiful luxury home with personalized services from Uberhaus.',
    image: img4,
  },
  {
    title: 'Glass Garden',
    desc: 'Beautiful luxury home with personalized services from Uberhaus.',
    image: img5,
  },
];


export default function Listings() {
  const carouselRef = useRef(null);

  useEffect(() => {
  const carousel = carouselRef.current;
  if (!carousel) return;

  const onWheel = (e) => {
    console.log('SCROLL EVENT', e.deltaY);
    if (e.deltaY === 0) return;
    e.preventDefault();
    carousel.scrollBy({
      left: e.deltaY * 1,
      behavior: 'smooth',
    });
  };

  carousel.addEventListener('wheel', onWheel, { passive: false });
  return () => carousel.removeEventListener('wheel', onWheel);
}, []);



  return (
    <section className="listings-section" id="listings">
      <div className="carousel" ref={carouselRef}>
        
        {listings.map((item, i) => (
          <div key={i} className="card">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
      
    </section>
  );
}
