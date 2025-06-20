import React from 'react';
import './listings.css';
import img1 from './Assets/Images/image1.jpg';
import img2 from './Assets/Images/image2.jpg';
import img3 from './Assets/Images/image3.jpg';
import img4 from './Assets/Images/image4.PNG';
import img5 from './Assets/Images/image5.jpg';

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
  return (
    <section className="listings-section" id="listings">
      <div className="carousel">
        {listings.map((item, i) => (
          <div key={i} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
