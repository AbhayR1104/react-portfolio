import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import the icons

function Header() {
  return (
    <header className="hero-section">
      <div className="hero-layout">
        <div className="hero-text-content">
          <h1>I build reliable, data-driven software.</h1>
          <p className="hero-subhead">
            MS CS @ Stony Brook (Dec 2025) · Ex-HPE Supply Chain Ops · Ex-Tata Elxsi Intern · Focused on scalable software, data pipelines, and analytics.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="cta-button primary">See My Work</a>
            <a href="/Abhay_Ravi_Kumar_Resume.pdf" className="cta-button secondary" download>Download Resume (PDF)</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/AbhayR1104" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abhay-ravi-kumar-0b6447191/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:abhayrusa@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="hero-trust-badges">
            <span className="badge">Ex-HPE</span>
            <span className="badge">Ex-Tata Elxsi</span>
            <span className="badge">MS CS · Stony Brook</span>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/headshot.jpg" alt="Abhay Ravi Kumar" />
        </div>
      </div>
    </header>
  );
}

export default Header;