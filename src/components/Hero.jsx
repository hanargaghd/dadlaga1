import React from 'react'
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion"
import { useState,useEffect } from "react"



const Hero = () => {

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // function handleMouseMove(event) {
  //   x.set(event.clientX);
  //   console.log("x:"+x.current)
  //   y.set(event.clientY);
  //   console.log("y:"+y.current)
  // }

  const [currentSlide,setCurrentSlide] = useState(0);

  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
    animateSlide(newIndex);
  };
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const settings = {
    dots: true,
    customPaging: (i) => customPaging(i, currentSlide),
    beforeChange: handleSlideChange,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    cssEase: "ease",
  };

  const customPaging = (i, currentSlide) => {
    const isActive = currentSlide === i;
    const dotClass = `absolute z-3 bottom-10 lg:bottom-20 dot-${i+1} w-4 h-4 rounded-full ${isActive ? 'bg-black' : 'bg-gray-500'} mx-1`;
    return <div className={dotClass}></div>;
  };
  
  const animateSlide = (index) => {
    if (index === currentSlide) {
      controls1.start({
        opacity: [0,1],
        y: [-500,-200],
        transition: { duration: 2 },  
      });
      controls2.start({
        opacity: [0,1],
        y: [-500,-200],
        transition: { duration: 2 },  
      });
    } 
    else{
      controls1.start({ 
        opacity: [0,1],
        y: [-500,0],
        transition:{
          duration: 2
        }
      });
      controls2.start({ 
        opacity: [0,1],
        y: [-500,0],
        transition:{
          duration: 2
        }
      });
    }
  };
  
  const [color, setColor] = useState("#fff");
  const [newColor, setNewColor] = useState("rgb(96 165 250");

  useEffect(() => {
    // document.getElementById("button").style.backgroundColor = color;
    // document.querySelector("#button").style.backgroundColor = color;
    const buttons = document.querySelectorAll("#button");
    buttons.forEach(button => {
      button.style.backgroundColor = color;
      // button.classList.add()
      // button.appendChild()
    })
  }, [color]);

  useEffect(() => {
    if (newColor !== "") {
      setColor(newColor);
    }
  }, [newColor]);

  const handleClick = (color) => {
    setNewColor(color);
  };

  return (
  <div>
    <div className='fixed z-10 right-[-4rem] top-[30%]'>
      <div className='relative group'>
        <div className='absolute z-2 w-8 h-8 rounded-lg bg-gradient-to-r from-red-400 via-blue-400 to-green-400 group-hover:opacity-0 duration-[1000ms]'></div>
        <div className='h-8 w-100 flex translate-x-24 group-hover:translate-x-[-4rem] duration-300'>
          <button onClick={() => handleClick("rgb(248 113 113")} className='w-8 h-8 rounded-lg bg-red-400'></button>
          <button onClick={() => handleClick("rgb(96 165 250")} className='w-8 h-8 rounded-lg bg-blue-400'></button>
          <button onClick={() => handleClick("rgb(74 222 128")} className='w-8 h-8 rounded-lg bg-green-400'></button>
        </div>
      </div>
    </div>
    <div className='relative z-3 overflow-hidden h-[50vh] lg:h-[100vh]'>
        <Slider {...settings}>
          <div className='relative'>
            <div className='relative flex items-center justify-center'>
              <img className='h-[50vh] lg:h-[100vh]' src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png?v=1613745760' alt='Hero1'/>
              <motion.div
              animate={controls1}
               initial={{ opacity: 1}}
               onAnimationEnd={() => animateSlide(0)}
               className='absolute z-50 flex flex-col justify-center items-center'>
                <h2 className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-[#fff] font-400 font-sans'>Ready to</h2>
                <h1 className='text-[35px] md:text-[50px] lg:text-[70px] text-[#fff] font-500 font-sans'>Use Unique</h1>
                <h1 className='text-[35px] md:text-[50px] lg:text-[70px] text-[#fff] font-500 font-sans'>Demos</h1>
                <h3 className='text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] '>Optimized for speed, website that sells</h3>
                <button id='button' className='rounded-lg px-10 py-4 mt-10 bg-[#3b82f6] font-[700] text-[#fff] hover:bg-[#fff] hover:text-[#3b82f6] duration-200 ease-in-out'>SHOP NOW!</button>
              </motion.div>
            </div>
          </div>
          <div>
            <div className='relative flex justify-center items-center'>
              <img className='h-[50vh] lg:h-[100vh]' src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png?v=1613745760' alt='Hero2' />
              <motion.div
               animate={controls2}
               initial={{ opacity: 1 }}
               onAnimationEnd={() => animateSlide(1)}
               className='absolute z-50 flex flex-col justify-center items-center'>
                <h2 className='text-[1rem] md:text-[1.5rem] lg:text-[2rem] text-[#3b82f6] font-400 font-sans'>Multipurpose</h2>
                <h1 className='text-[35px] md:text-[50px] lg:text-[70px] text-[#3b3b3b] font-500 font-sans'>Premium</h1>
                <h1 className='text-[35px] md:text-[50px] lg:text-[70px] text-[#3b3b3b] font-500 font-sans'>Shopify Theme</h1>
                <h3 className='text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#3b3b3b] w-[50%] sm:w-[100%]'>30 skins, powerful features, great support, exclusive offer</h3>
                <button id='button' className='rounded-lg px-10 py-4 mt-10 bg-[#3b82f6] font-[700] text-[#fff] hover:bg-[#1f4581] duration-200 ease-in-out'>SHOP NOW!</button>
              </motion.div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Hero