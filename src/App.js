import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';
import logo from './assets/logo.svg'; // Import your background image
import Subscribe from './components/Subscribe';
import Card from './components/Card';
import { FaFigma , FaCode, FaSketch } from 'react-icons/fa';



function App() {
  return (
    <>
    <div className='header'>
        <img src={logo} alt="Logo" className="logo" />
        <Subscribe />
    </div>
    <section className="container">
      {/* Background Image */}
      <div className="background"></div>

      {/* Content over the background */}
      <div className="clock_content">
        <h1>We are almost there!</h1>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 301 * 24 * 3600 * 1000}  // 365 days in milliseconds
          labels={["DAYS", "HOURS", "MINS", "SECS"]}
          duration={0.5}
        />
        <div className="card-container">
          <Card name="Design" icon={<FaFigma size={50} color="#D96E30" />} />
          <Card name="Develop" icon={<FaCode size={50} color="#E6D7B3" />} />
          <Card name="Brand" icon={<FaSketch size={50} color="#D98D30" />} />
        </div>
      </div>
    </section>
    </>
    
  );
}

export default App;
