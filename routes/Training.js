import React from 'react'
import Footer from '../components/Footer'
import Trainingsection from '../components/Training'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'

const Training = () => {
  return (
    <div>
    <Navbar/>
    <Heroimage heading='Training.' text='Pre-Flight & In-Flight Training.' />
    <Trainingsection/>
    
    <Footer/>


    </div>
  )
}

export default Training