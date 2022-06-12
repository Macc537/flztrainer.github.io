import React from 'react'
import { Link } from 'react-router-dom'
import "./PricingStyles.css"

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
         <div className='card'>
          <h3>-Basic-</h3>
          <span className='bar'></span>
          <p className='btc'>1000 GBP</p>
          <p>
            -10 Days-
          </p>
          <p>- Multi-passenger -</p>
                    <p>- hybrid -</p>
                    <p>- Big wheels -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                    </div>

                    <div className='card'>
                    <h3>- Premium -</h3>
                    <span className='bar'></span>
                    <p className='btc'>1500 GBP</p>
                    <p>- 20 Days -</p>
                    <p>- Multi-passenger -</p>
                    <p>- electric -</p>
                    <p>- small wheels -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                
                <div className='card'>
                    <h3>- Advanced -</h3>
                    <span className='bar'></span>
                    <p className='btc'>2200 GBP</p>
                    <p>- 60 Days -</p>
                    <p>- private -</p>
                    <p>- electric -</p>
                    <p>- no wheels -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>

         </div>



        </div>
    
  )
}

export default Pricing