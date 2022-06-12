import React from 'react'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'

const Pricing = () => {
  return (
    <div>
    <Navbar/>
    <Heroimage heading='PRICING.' text='Rent a roadable aircraft.' />
    <PricingCards/>
    
    <Footer/>


    </div>
  )
}

export default Pricing