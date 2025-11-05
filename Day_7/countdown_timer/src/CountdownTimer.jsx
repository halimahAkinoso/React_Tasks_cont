import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Import the CSS file

function CountdownTimer() {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (target) => {
    const difference = +new Date(target) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const handleDateChange = (event) => {
    setTargetDate(event.target.value);
  };

  useEffect(() => {
    if (!targetDate) return;
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <div key={interval} className="time-segment">
        <span className="time-value">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      <h1>Countdown to your event</h1>
      <label htmlFor="target-date">Set a custom target date and time:</label>
      <input
        id="target-date"
        type="datetime-local"
        onChange={handleDateChange}
        className="date-input"
      />
      <div className="countdown-display">
        {targetDate && (
          timeComponents.length ? timeComponents : <span className="event-started">Event Started!</span>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;