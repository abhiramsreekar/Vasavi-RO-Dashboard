import React from 'react'
import "./Topbar.css";
import pic from "./vasavi.png";
function Topbar() {
  return (
    <div className='topbar'>
      <div className='Heading'>
        <img src={pic} id="pic"/>
        <span id="Name">Vasavi College of Engineering | Smart City Programme</span>
      </div>
    </div>
  )
}

export default Topbar