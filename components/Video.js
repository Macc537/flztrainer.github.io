import React from 'react'
import {Link} from "react-router-dom";
import "./VideoStyles.css";

import flycarVideo from "../assets/airbot.mp4"

const Video = () => {
  return (
    <div className='hero'>
   
   <video autoPlay loop muted id="video">
    <source src={flycarVideo} type="video/mp4"/>
    </video>
    <div className='content'>
    <h1>flZ. TRAINERS</h1>
    <p>World's First roadable aircraft training school</p>
   
    <Link to ="/Training" className='btn'>Training</Link>
    <Link to ="/contact" className='btn btn-Light'>Launch</Link>
    </div>
    </div>
  )
}

export default Video