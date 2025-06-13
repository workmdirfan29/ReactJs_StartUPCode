import React from 'react';
import "./Service.css";
const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>

      <section>
        <h2>Product Design</h2>
        <p>
          We specialize in crafting user-friendly designs that balance aesthetics and functionality. 
          Our design process focuses on delivering intuitive user experiences that engage and delight.
        </p>
      </section>

      <section>
        <h2>Software Development</h2>
        <p>
          Our engineering team builds scalable, secure, and high-performing applications tailored to your needs—whether web, mobile, or cloud-based.
        </p>
      </section>

      <section>
        <h2>Technology Consulting</h2>
        <p>
          We help you identify the right technologies and strategies to grow your business. From ideation to implementation, we're your innovation partner.
        </p>
      </section>

      <section>
        <h2>Support & Maintenance</h2>
        <p>
          We provide ongoing technical support, updates, and improvements to ensure your product continues to meet evolving user needs and market demands.
        </p>
      </section>

      <section>
        <h2>Custom Solutions</h2>
        <p>
          Got a unique challenge? We create custom digital solutions tailored to your specific goals, industry, and audience.
        </p>
      </section>
    </div>
  );
};

export default Services;
