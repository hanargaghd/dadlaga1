import React from 'react'
import { useState } from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

const Footer = () => {
  let [click1, setClick1] = useState(false);
  const handleClick1 = () =>{
    setClick1(current => !current);
    setClick2 = false;
    setClick3 = false;
    setClick4 = false;
    setClick5 = false;
  }
  let [click2, setClick2] = useState(false);
  const handleClick2 = () =>{
    setClick1 = false;
    setClick2(current => !current);
    setClick3 = false;
    setClick4 = false;
    setClick5 = false;
  }
  let [click3, setClick3] = useState(false);
  const handleClick3 = () =>{
    setClick1 = false;
    setClick2 = false;
    setClick3(current => !current);
    setClick4 = false;
    setClick5 = false;
  }
  let [click4, setClick4] = useState(false);
  const handleClick4 = () =>{
    setClick1 = false;
    setClick2 = false;
    setClick3 = false;
    setClick4(current => !current);
    setClick5 = false;
  }
  let [click5, setClick5] = useState(false);
  const handleClick5 = () =>{
    click5 = !setClick5
    setClick1 = false;
    setClick2 = false;
    setClick3 = false;
    setClick4 = false;
    setClick5(current => !current);
  }
  return (
  <div className=' bg-[#F7F8FA] '>
    <div>
      <div id='button' className='bg-[#2879fe]'>
      <div className='flex justify-center md:justify-between items-center w-[80%] m-auto h-[50px]'>
        <div className='hidden md:flex gap-10 justify-center items-center '>
          <h2 className='text-[#fff] font-[500]'>BE IN TOUCH WITH US:</h2>
          <div className='flex'>
            <input type="email" placeholder='Enter your e-mail' className='h-[40px] rounded-tl-lg rounded-bl-lg outline-none pl-3'/>
            <div className='h-[40px] flex justify-center items-center bg-[#303030] text-[#fff] rounded-tr-lg rounded-br-lg w-[100px] text-[0.8rem]'>JOIN US</div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-3 text-[#fff] cursor-pointer'>
          <FaFacebookF className='hover:text-[#3b3b3b] duration-200'/>
          <FaTwitter className='hover:text-[#3b3b3b] duration-200'/>
          <FaGoogle className='hover:text-[#3b3b3b] duration-200'/>
          <FaInstagram className='hover:text-[#3b3b3b] duration-200'/>
          <FaPinterest className='hover:text-[#3b3b3b] duration-200'/>
        </div>
      </div>
      </div>
    <div className='w-[80%] m-auto md:h-[400px]'>
      <div className='hidden xl:grid grid-cols-4 text-[1rem] pt-[2rem]'>
        <div>
          <h2 className='font-[500]'>CATEGORIES</h2>
          <ul className='pt-[1.5rem] text-[gray] space-y-[0.7rem]'>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>Shoes</li>
            <li>New Arrivals</li>
            <li>Clearance</li>
          </ul>
        </div>
        <div>
          <h2 className='font-[500]'>BUY WITH US</h2>
          <ul className='pt-[1.5rem] text-[gray] space-y-[0.7rem]'>
            <li>Abous us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className='pr-[2rem]'>
          <h2 className='font-[500]'>ABOUT</h2>
          <p className='pt-[1.5rem] text-[gray]'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt.</p>
        </div>
        <div>
          <h2 className='font-[500]'>CONTACT US</h2>
          <ul className='pt-[1.5rem] space-y-[1rem]'>
            <li className='flex'><p className='text-[#3b3b3b] '>ADDRESS:</p>&nbsp;7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</li>
            <li className='flex'><p className='text-[#3b3b3b] '>PHONE:</p>&nbsp;+566 4774 9930; +566 4774 9940</li>
            <li className='flex'><p className='text-[#3b3b3b] '>HOURS:</p>&nbsp;all week from 9 am to 9 pm</li>
            <li className='flex'><p className='text-[#3b3b3b] '>E-MAIL:</p>&nbsp;<a href="#">info@mydomain.com</a></li>
          </ul>
        </div>
      </div>
      <div className='xl:hidden flex flex-col gap-[15%] h-[100%] w-[100%] justify-center'>
        <div onClick={handleClick1} className='w-[100%] h-[20%] cursor-pointer py-5'>
          <div className='flex justify-between items-center'>
            <div className={click1 ? "text-blue-400" : ""}>CATEGORIES</div>
            <div><AiOutlinePlus/></div>
          </div>
          <ul className={click1 ? "py-5 block bg-white px-2" : "hidden"}>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>Shoes</li>
          </ul>
        </div>
        <div onClick={handleClick2} className='w-[100%] h-[20%] cursor-pointer py-5'>
          <div className='flex justify-between items-center'>
            <div className={click2 ? "text-blue-400" : ""}>BUY WITH US</div>
            <div><AiOutlinePlus/></div>
          </div>
          <ul className={click2 ? "py-5 block bg-white px-2" : "hidden"}>
            <li>About</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div onClick={handleClick3} className='w-[100%] h-[20%] cursor-pointer py-5'>
          <div className='flex justify-between items-center'>
            <div className={click3 ? "text-blue-400" : ""}>ABOUT</div>
            <div><AiOutlinePlus/></div>
          </div>
          <ul className={click3 ? "py-5 block bg-white px-2" : "hidden"}>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis, quibusdam accusamus placeat iure commodi.</li>
          </ul>
        </div>
        <div onClick={handleClick4} className='w-[100%] h-[20%] cursor-pointer py-5'>
          <div className='flex justify-between items-center'>
            <div className={click4 ? "text-blue-400" : ""}>CONTACT US</div>
            <div><AiOutlinePlus/></div>
          </div>
          <ul className={click4 ? "py-5 block bg-white px-2" : "hidden"}>
            <li className='flex'><p className='text-[#3b3b3b] '>ADDRESS:</p>&nbsp;7895 Piermont Dr NE Albuquerque, NM 198866, United States of America</li>
            <li className='flex'><p className='text-[#3b3b3b] '>PHONE:</p>&nbsp;+566 4774 9930; +566 4774 9940</li>
            <li className='flex'><p className='text-[#3b3b3b] '>HOURS:</p>&nbsp;all week from 9 am to 9 pm</li>
            <li className='flex'><p className='text-[#3b3b3b] '>E-MAIL:</p>&nbsp;<a href="#">info@mydomain.com</a></li>
          </ul>
        </div>
        <div onClick={handleClick5} className='w-[100%] h-[20%] cursor-pointer py-5'>
          <div className='flex justify-between items-center'>
            <div className={click5 ? "text-blue-400" : ""}>BE IN TOUCH WITH US</div>
            <div><AiOutlinePlus/></div>
          </div>
          <ul className={click5 ? "py-5 block bg-white px-2" : "hidden"}>
            <li>
              <div className='flex'>
                <input type="email" placeholder='Enter your e-mail' className='h-[40px] rounded-tl-lg rounded-bl-lg outline-none pl-3'/>
                <div className='h-[40px] flex justify-center items-center bg-[#303030] text-[#fff] rounded-tr-lg rounded-br-lg w-[100px] text-[0.8rem]'>JOIN US</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className='h-[100px] w-[100%] md:w-[80%] bg-white flex justify-center md:justify-between items-center m-auto'>
      <div className='hidden sd:flex'>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_95x.png?v=1614293854" alt="" />
        </div>
        <div>&nbsp;&nbsp;© Wokiee 2022. All Rights Reserved</div>
      </div>
      <div className='flex gap-2'>
        <div className='border-[1px] border-solid border-[#E1E2EF] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded-lg relative '>
          <img className='w-[100%] h-[100%] object-contain' src="https://w7.pngwing.com/pngs/782/863/png-transparent-paypal-logo-paypal-logo-paypal-blue-text-trademark-thumbnail.png" alt="" />
          <div className='w-[80px] h-[40px] absolute z-2 bg-white opacity-[0.01%] hover:opacity-50 duration-200'></div>
        </div>
        <div className='border-[1px] border-solid border-[#E1E2EF] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded-lg relative '>
          <img className='w-[100%] h-[100%] object-contain' src="https://w7.pngwing.com/pngs/308/426/png-transparent-visa-logo-credit-card-visa-logo-payment-visa-blue-text-trademark-thumbnail.png" alt="" />
          <div className='w-[80px] h-[40px] absolute z-2 bg-white opacity-[0.01%] hover:opacity-50 duration-200'></div>
        </div>
        <div className='border-[1px] border-solid border-[#E1E2EF] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded-lg relative '>
          <img className='w-[100%] h-[100%] object-contain' src="https://w7.pngwing.com/pngs/962/794/png-transparent-mastercard-credit-card-mastercard-logo-mastercard-logo-love-text-heart-thumbnail.png" alt="" />
          <div className='w-[80px] h-[40px] absolute z-2 bg-white opacity-[0.01%] hover:opacity-50 duration-200'></div>
        </div>
        <div className='border-[1px] border-solid border-[#E1E2EF] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded-lg relative '>
          <img className='w-[100%] h-[100%] object-contain' src="https://w7.pngwing.com/pngs/676/292/png-transparent-apple-pay-google-pay-mobile-payment-apple-text-logo-payment-thumbnail.png" alt="" />
          <div className='w-[80px] h-[40px] absolute z-2 bg-white opacity-[0.01%] hover:opacity-50 duration-200'></div>
        </div>
        <div className='border-[1px] border-solid border-[#E1E2EF] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded-lg relative '>
          <img className='w-[100%] h-[100%] object-contain' src="https://w7.pngwing.com/pngs/850/508/png-transparent-google-pay-send-online-wallet-mobile-payment-mobile-pay-text-trademark-payment-thumbnail.png" alt="" />
          <div className='w-[80px] h-[40px] absolute z-2 bg-white opacity-[0.01%] hover:opacity-50 duration-200'></div>
        </div>

      </div>
  </div>
</div>
  )
}

export default Footer