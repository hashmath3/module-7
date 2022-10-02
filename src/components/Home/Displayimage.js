import React from 'react'
import './Displayingimage.css'
import img1 from '../images/hero.png'

const Displayimage = ({activeStep}) => {
  return (
    <div className='container-fluid'>
        <div className='displayrow'>
            <div className='display-col-md-6'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
              <h4>We know how large objrcts will act,<br/>
                but things on a small scale</h4>
              <div className='cta'>
                <button className='button'><h3>SHOP NOW</h3></button>
              </div>
            </div>
            <div className='image-col-md-6'>
                <div className='hero-cover'>
                    <div className='none'>
                        <img src={img1} alt=''/>
                        <svg width="501" height="488" viewBox="0 0 501 488" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="250.42" cy="237.941" r="249.941" fill="white"/>
</svg>
                    </div>
                </div>
            </div>
        </div>
      

    </div>
  )
}

export default Displayimage