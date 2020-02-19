import React from 'react';
import '../Stylesheet.css';

function Header() {
  return (
    <div>
      <section className="hero hero-primary bg-image">
        <img src="/images/hero.jpg" alt="hero" />
        <div className="container">
          <div className="hero-body">
            <h1 className="hero-title">Let's Cook!</h1>
            <h4 className="hero-subtitle"> Hero Primary Subtitle Content</h4>
            {/* <button className="btn">Button Text</button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
