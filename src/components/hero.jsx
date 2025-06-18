import React from 'react';
import './hero.css';

function Hero() {
  return (
<section className="hero">
  <div className="hero-text">
    <p className='header-text'>
      Smarten <span className="highlight1">Your World.</span><br />
      <span className="highlight2">Seamless Living</span> Starts Here.
    </p>
    <p className='sub-text'>
      Bring intelligence to your home, garden, and workspace.
    </p>
    <button className="explore-now-btn">
        <span className="dot-bg"></span>
        <span className="btn-content">
        <span className="btn-text">Explore Now</span>
        <img src="src/assets/ArrowUpward.png" className="arrow-img" alt="Arrow" />
        </span>
    </button>
  </div>
  <div className="hero-image">
    <img src="/assets/smart-garden.gif" alt="Smart Garden Automation" />
  </div>

  {/* Place the hero-buttons at the bottom-right */}
  <div className="hero-buttons">
    <div className="book-btn">Book A Service Now</div>
    <button className="sent-btn">
      <img src="src/assets/Sent.png" alt="Send" />
    </button>
  </div>
</section>
  );
}

export default Hero;
