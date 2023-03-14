import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaPinterest } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-[#2879fe]'>
        <div className='flex gap-10 justify-center items-center '>
          <h2>BE IN TOUCH WITH US:</h2>
          <div className='flex'>
            <input type="email" placeholder='Enter your e-mail' className='h-[80%] rounded-xl outline-none pl-3'/>
          </div>
        </div>
        <div className='flex justify-center items-center gap-3 text-[#2879fe]'>
          <FaFacebookF/>
          <FaTwitter/>
          <FaGoogle/>
          <FaInstagram/>
          <FaInstagram/>
          <FaPinterest/>
        </div>
      </div>

    </div>
  )
}

export default Footer