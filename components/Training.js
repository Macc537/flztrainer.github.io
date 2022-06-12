import React from 'react'
import "./TrainingStyles.css"
import Pod from "../assets/traino.jpg";
import Pok from "../assets/trainii.png"
import { Link } from 'react-router-dom'


const Training = () => {
  return (
    <div className='training'>
  <div className='left'>
  <h1>Training</h1>
  <p> Flying is safer than driving, There are new rules, additional driving & flying education, Flying car is capable of safe, reliable and environmentally-friendly operation both on public roads and in the air, it can fly without a qualified pilot at the controls with proper training and it comes with an affordable prices.</p>
 <Link to='/contact'><button className='btn'>Contact</button></Link>
</div>

 <div className='right'>
  <div className='img-container'>
<div className='image-stack top'>
<img src={Pok} className='img' alt='' />






  </div>
  <div className='image-stack bottom'>
  <img src={Pod} className='img' alt='' />
</div>

  </div>
</div>

</div>
    
  )
}

export default Training