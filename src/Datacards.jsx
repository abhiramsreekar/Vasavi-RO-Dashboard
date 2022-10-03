import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Datacards.css"
function Datacards() {
  return (
    <div className="cards">
      <div className="card1">
        <h2>Temp</h2>
        <div className="Progress">
          <CircularProgressbar value={26}  text="Temp"/>
        </div>
        
      </div>
      <div className="card2">
        <h2>PM 2.5</h2>
        <div className="Progress">
          <CircularProgressbar value={36}  text="Pm2.5"/>
        </div>
        
      </div>
      <div className="card3">
        <h2>PM 10</h2>
        <div className="Progress">
          <CircularProgressbar value={12}  text="Pm10"/>
        </div>
      </div>
      <div className="card4">
        <h2>AQI</h2>
        <div className="Progress">
          <CircularProgressbar value={47}  text="AQI"/>
        </div>
            
      </div>
    </div>
  );
}

export default Datacards;
