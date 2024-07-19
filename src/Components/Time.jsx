import React, { useEffect, useState } from 'react'

export default function Time() {
    let [currentTime,setCurrentTime]= useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(timerID);
      }, []);
  return (
    <>
    <h1>Current Time is {currentTime.toLocaleTimeString()}</h1>
    </>
  )
}

