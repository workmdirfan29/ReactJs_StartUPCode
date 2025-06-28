import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section>
        <h2>Our Mission</h2>
        <p>
          We are a passionate team dedicated to creating meaningful products that simplify everyday life. 
          Our mission is to provide innovative solutions and exceptional experiences that empower people 
          to achieve their goals effortlessly.
        </p>
      </section>

      <section>
        <h2>Our Vision</h2>
        <p>
          Our vision is to become a global leader in delivering cutting-edge technology while maintaining 
          a strong commitment to sustainability, ethics, and user-centric design.
        </p>
      </section>

      <section>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We believe in constantly pushing the boundaries of what's possible.</li>
          <li><strong>Integrity:</strong> We operate with honesty, transparency, and a commitment to ethical practices.</li>
          <li><strong>Collaboration:</strong> We value teamwork and believe that diverse perspectives lead to better solutions.</li>
          <li><strong>Sustainability:</strong> We are committed to creating products and solutions that have a positive impact on both people and the planet.</li>
        </ul>
      </section>

      <section>
        <h2>What Sets Us Apart</h2>
        <p>
          At the heart of our work is a deep understanding of our users. Unlike many, we don’t just follow trends—we set them. 
          With a hands-on, user-first approach, we blend creativity with technology to craft solutions that truly matter.
        </p>
      </section>

      <section>
        <h2>Our Journey</h2>
        <p>
          What started as a small team of tech enthusiasts has grown into a dynamic organization making a global impact. 
          Over the years, we’ve launched successful products, built meaningful partnerships, and earned the trust of thousands of users worldwide.
        </p>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Experienced Team:</strong> Decades of combined experience in design, development, and strategy.</li>
          <li><strong>User-Centric:</strong> Every decision we make is grounded in delivering the best experience for our users.</li>
          <li><strong>Future-Ready:</strong> We anticipate change and adapt swiftly, always staying ahead of the curve.</li>
        </ul>
      </section>

      <section>
        <h2>Meet the Team</h2>
        <p>
          We are a diverse group of designers, engineers, and strategists, united by a shared vision of 
          making a difference through technology. Together, we strive to create a better future for everyone.
        </p>
      </section>

      <section className="cta-section">
        <h2>Want to Work With Us?</h2>
        <p>
          Whether you're a potential partner, future team member, or a curious visitor — we'd love to hear from you. 
          Join us on this journey to build something amazing.
        </p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
