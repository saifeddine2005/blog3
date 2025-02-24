import React from 'react'
import './Subscribe.css';
const Subscribe = () => {
  return (
    <div>
        <div className='subscribe'>
          <div className='left'>
            <h3>Subscribe to </h3>
            <h2>Our Newsletter</h2>
          </div>
          <div className='right'>
           <input type='text' placeholder='Enter Email' />
           <button>Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default Subscribe