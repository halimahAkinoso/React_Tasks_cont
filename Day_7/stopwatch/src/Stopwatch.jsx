import React from 'react'
import { useState, useEffect, useRef } from  'react'
import './Stopwatch.css';


function Stopwatch () {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

// implement hook effect

    useEffect(() => {
        if (isRunning){
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            },);
        }else if (!isRunning && intervalRef. current) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);
// function to set "Start", "Pause", "Reset", and "Lap" button clicks

    const startStopwatch = () =>{
        setIsRunning(true);
    };

      const pauseStopwatch = () =>{
        setIsRunning(false);
    };

        const resetStopwatch = () => {
         clearInterval(intervalRef.current);
         setIsRunning(false);
         setTime(0);
         setLaps([]);   
        }
        const recordLap = () =>{
            if (isRunning) {
                setLaps(prevLaps => [...prevLaps, time]);
            }
        };
    
       //format time for display
       
    const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  //render the component

  return (

     <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="button-group">
        <button className="stopwatch-button" onClick={startStopwatch} disabled={isRunning}>Start</button>
        <button className="stopwatch-button" onClick={pauseStopwatch} disabled={!isRunning}>Pause</button>
        <button className="stopwatch-button" onClick={resetStopwatch} disabled={isRunning}>Reset</button>
        <button className="stopwatch-button" onClick={recordLap} disabled={!isRunning}>Lap</button>
      </div>

        {laps.length > 0 && (
            <div style={{ marginTop: '20px '}}>
                <h3>Lap Times</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {laps.map((lap, index) => (
                        <li key={index}>
                            Lap {index + 1 }: {formatTime(lap)}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
  )
}

export default Stopwatch