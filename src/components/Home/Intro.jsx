import React from 'react';
import './Intro.css';

const features = [
  {
    title: 'Performance First',
    description: 'Reactify is optimized for speed and scalability, ensuring lightning-fast load times.',
    icon: '⚡',
  },
  {
    title: 'Component-Based',
    description: 'Reusable and modular components make development faster and cleaner.',
    icon: '🧩',
  },
  {
    title: 'Developer Friendly',
    description: 'Built with developers in mind—easy setup, great DX, and powerful tooling.',
    icon: '💻',
  },
  {
    title: 'Open Source',
    description: 'Backed by an active community and free to use under MIT license.',
    icon: '🌐',
  },
];

const Intro = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Why Choose Reactify?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
