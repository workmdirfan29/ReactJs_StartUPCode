import React from 'react';
import './Hero.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 className="intro-title">Welcome to React<span>ify</span></h1>
        <p className="intro-subtitle">
          Build fast, modern, and powerful web experiences with Reactify.
        </p>
        <button className="intro-button">Get Started</button>
      </div>
    </div>
  );
};

export default Intro;
