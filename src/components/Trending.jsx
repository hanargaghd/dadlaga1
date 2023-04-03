import React from 'react'
import { TiStarFullOutline } from "react-icons/ti"
import { Zurag1, Zurag2, Zurag3, Zurag4, Zurag5, Zurag6, Zurag7, Zurag8 } from "../assets/zurag"
import Image from 'next/image'
import { TiStarOutline } from "react-icons/ti"
import { useState, useEffect } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi"
import { motion } from 'framer-motion'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaBalanceScale } from 'react-icons/fa'


const Trending = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "December, 31, 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / (1000 * 60)) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    
    useEffect(() => {
      const interval = setInterval(() => getTime(), 1000);
      return () => clearInterval(interval);
    }, []);
    
    let [Baraa, setBaraa] = useState([]);

    useEffect(() => {
        fetch('/api/baraa/getBaraa')
        .then(response => response.json())
        .then(data => setBaraa(data))
        .catch(error => console.log(error));
    }, []);


    let data = [  
        {
            id: 1,
            image: Zurag1,
            alt: "First Image"
        },
        {
            id: 2,
            image: Zurag2,
            alt: "Second Image"
        },
        {
            id: 3,
            image: Zurag3,
            alt: "Third Image"
        },
        {
            id: 4,
            image: Zurag4,
            alt: "Fourth Image"
        },
        {
            id: 5,
            image: Zurag5,
            alt: "Fifth Image"
        },
        {
            id: 6,
            image: Zurag6,
            alt: "Sixth Image"
        },
        {
            id: 7,
            image: Zurag7,
            alt: "Seventh Image"
        },
        {
            id: 8,
            image: Zurag8,
            alt: "Eighth Image"
        },
    ]

    const mergedObj = {};
    Baraa.forEach((dbItem) => {
    const assetsItem = data.find((assetsItem) => assetsItem.id === dbItem.id);
    if (assetsItem) {
        mergedObj[dbItem.id] = { ...dbItem, ...assetsItem };
    }
    });
  return (
    <div className='pt-[20rem] md:pt-[20rem] lg:pt-0'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='mt-[50px] text-[2rem] cursor-pointer hover:text-[#3b82f6] duration-200'>BEST SELLER</h2>
        <h3 className='mt-[25px] mb-[25px] text-xl cursor-pointer'>TOP PRODUCT OF THIS WEEK</h3>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 '>
        {Object.values(mergedObj).map(newProps => (
            <div key={newProps.id} className="group"> 
            <div className='relative w-[100%] h-[100%] flex flex-col justify-center items-center pb-24'>
                <Image src={newProps.image} alt={newProps.alt}/>
                <div className='absolute bg-white bottom-0 flex flex-col justify-center items-center gap-2 w-full'>
                    <ul className={newProps.hyamdralDate ? 'flex gap-3 justify-center items-center' : "opacity-0 flex justify-center items-center"}>
                        <li className='bg-[#fff] text-[#2879FE] rounded-lg flex flex-col justify-center items-center '>
                            <p>{days < 10 ? `0${days}` : days}</p>
                            <p>Day</p>
                        </li>
                        <li className='bg-[#fff] text-[#2879FE] rounded-lg flex flex-col justify-center items-center '>
                            <p>{hours < 10 ? `0${hours}` : hours}</p>
                            <p>Hrs</p>
                        </li>
                        <li className='bg-[#fff] text-[#2879FE] rounded-lg flex flex-col justify-center items-center '>
                            <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
                            <p>Min</p>
                        </li>
                        <li className='bg-[#fff] text-[#2879FE] rounded-lg flex flex-col justify-center items-center '>
                            <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
                            <p>Sec</p>
                        </li>
                    </ul>
                    <span className='text-[yellow]'>
                        {newProps.rating === 5 ? <div className='flex'>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                        </div> : newProps.rating === 4 ? <div className='flex'>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarOutline className='text-[gray] opacity-[50%]'/>
                        </div> : <div className='flex'>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarFullOutline/>
                            <TiStarOutline className='text-[gray] opacity-[50%]'/>
                            <TiStarOutline className='text-[gray] opacity-[50%]'/>
                        </div>}
                    </span>
                    <h2>{newProps.title}</h2>
                    <p>${Math.round((newProps.price)*100/100).toFixed(2)}</p>
                    <div className='group-hover:flex hidden '>
                        <motion.div transition={{duration: 0.3, ease: "easeInOut"}} initial={{height: 0,opacity:0}} whileInView={{opacity:1,height:"auto"}}>
                            <button id="button" className='flex justify-center items-center bg-[#2879FE] hover:bg-[#1959FA] text-[#fff] text-[14px] py-2 px-4 rounded-lg'><HiOutlineShoppingBag/>&nbsp;ADD TO CART</button>
                        </motion.div>
                    </div>
                 </div>
                <div className='group-hover:flex hidden absolute flex-col gap-5 top-0 right-0 justify-center items-center'>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className='bg-white hover:bg-[#2879FE] hover:text-[#fff] duration-200 w-10 h-10 flex justify-center items-center rounded-full'>  
                        <AiOutlineEye />
                        </motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className='bg-white hover:bg-[#2879FE] hover:text-[#fff] duration-200 w-10 h-10 flex justify-center items-center rounded-full'>  
                        <AiOutlineHeart />
                        </motion.div>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className='bg-white hover:bg-[#2879FE] hover:text-[#fff] duration-200 w-10 h-10 flex justify-center items-center rounded-full'>  
                        <FaBalanceScale />
                        </motion.div>
                    </div>
                </div>
            </div>
        ))}
    </div>  
        
      <div className='block sm:flex gap-5 justify-center items-center pt-24'>
        <div className='relative sm:w-[30%] w-[100%] group'>
          <div className='overflow-hidden w-100 h-100 '>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_10_367x.jpg?v=1614290467" alt="" className='group-hover:scale-125 duration-500 w-[100%] h-[100%] object-contain' />
          </div>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%]  group-hover:px-10 group-hover:py-10 duration-300'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
        <div className='relative sm:w-[30%] w-[100%] group'>
          <div className='overflow-hidden w-100 h-100 '>
            <img className='group-hover:scale-125 duration-500 w-[100%] h-[100%] object-contain' src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_11_367x.png?v=1614290510" alt="" />
          </div>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%]  group-hover:px-10 group-hover:py-10 duration-300'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
        <div className='relative sm:w-[30%] w-[100%] group'>
          <div className='overflow-hidden w-100 h-100 '>
            <img className='group-hover:scale-125 duration-500 w-[100%] h-[100%] object-contain' src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_09_367x.jpg?v=1614290467" alt="" />
          </div>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%] group-hover:px-10 group-hover:py-10 duration-300'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Trending