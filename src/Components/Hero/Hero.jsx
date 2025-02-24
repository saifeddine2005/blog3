import React from 'react'
import './Hero.css';
const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero_content'>
            <h1>Welcome to React Blog</h1>
            <p>
            an informational website consisting of discrete, often informal diary-style text entries (posts).<br/> 
            Posts are typically displayed in reverse chronological order so that the most recent post  appears first,
             at the top of the web page.
            </p>
            <button className='cta-button'>Read Our Latest Blog Post</button>
        </div>

      </div>
    </div>
  )
}

export default Hero