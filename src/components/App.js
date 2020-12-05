import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const EnterKeyCode = 13;
  const [time, setTime] = React.useState("");
  const handleEnter = (event) => {
    if (event.keyCode === EnterKeyCode) {
      clearInterval(timerID);
      if (isNaN(event.target.value)) {
        setTime(0);
        return;
      }
      setTime(parseInt(event.target.value));
    }
    return;
  };
  const tick = () => {
    clearInterval(timerID);
    if (time <= 0) {
      return;
    }
    setTime(time - 1);
  };
  let timerID = setInterval(tick, 1000);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
