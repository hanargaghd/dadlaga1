import React from 'react'
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='overflow-hidden'>
        <Slider {...settings}>
          <div>
            <div className='relative'>
              <div>
              <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png?v=1613745760' alt='Hero1'/>
              <div className='absolute z-50'>
                <h2>Ready to</h2>
                <h1>Use Unique Demos</h1>
                <h3>Optimized for speed, website that sells</h3>
                <button>SHOP NOW!</button>
              </div>
             </div>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png?v=1613745760' alt='Hero2' />
              <div className='absolute'>
                <h2>Ready to</h2>
                <h1>Use Unique Demos</h1>
                <h3>Optimized for speed, website that sells</h3>
                <button>SHOP NOW!</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
  )
}

export default Hero