import React from "react";
import './opportunities.css'

const Opportunities = () => {
  return (
    <div className="opp-container">
      <div className="intro">
        <h2>Meet our team</h2>
      </div>
      <div className="card-row">
      <div class="card">
        <div className="profile">
          <div className="profile-image">
            <img src="#" alt="CEO"/>
          </div>
          <h2>Md Latheef Ahmed</h2>
          <p>Founder & CEO</p>
        </div>
      </div>
      <div class="card">
                <div className="profile">
          <div className="profile-image">
            <img src="#" alt="CEO"/>
          </div>
          <h2>Md Latheef Ahmed</h2>
          <p>Founder & CEO</p>
        </div>
      </div>
      <div class="card">
          <div className="profile">
          <div className="profile-image">
            <img src="#" alt="CEO"/>
          </div>
          <h2>Md Latheef Ahmed</h2>
          <p>Founder & CEO</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Opportunities;
