// src/pages/Contact.js
import React, { useState } from 'react';
import '../Contact/Contact.css';  // Correct path to your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required 
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
