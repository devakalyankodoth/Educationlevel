import React from 'react';
import '../css/Education.css';
import img1 from '../Images/Group.png';
import img2 from '../Images/Completed graduate during Coronavirus.png';

const Education = () => {
  return (
    <div className="App">
      <h1 className="title">
        Select Your Education <span className="highlight">Level</span>
      </h1>
      <div className="cards-container">
        <div className="card1">
          <img src={img1} alt="Card 1" />
          <h4>Higher Secondary</h4>
        </div>
        <div className="card2">
          <img src={img2} alt="Card 2" />
          <h4>Graduation</h4>
        </div>
      </div>
      <button className="start-button">Let's Start</button>
    </div>
  );
}

export default Education;
