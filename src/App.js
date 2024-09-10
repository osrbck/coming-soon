import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';
import logo from './assets/logo.svg'; // Import your background image

function App() {
  return (
    <section className="container">
      {/* Background Image */}
      <div className="background"></div>

      {/* Content over the background */}
      <div className="clock_content">
      <img src={logo} alt="Logo" className="logo" />
        <h1>We are almost there!</h1>
        <h3>Stay tuned for something amazing.</h3>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 301 * 24 * 3600 * 1000}  // 365 days in milliseconds
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <button className="button">Notify Me</button>
      </div>
    </section>
  );
}

export default App;
