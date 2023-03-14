import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { IoArrowUndoOutline } from "react-icons/io5"
import { BsTruck } from "react-icons/bs"

const Info = () => {
  return (
    <div>
      <div>
        <h2>LATEST FROM BLOG</h2>
        <h3>THE FRESHEST AND MOST EXCITING NEWS</h3>
      </div>
      <div className='flex gap-2' >
        <div className='flex flex-col'>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_07_253x.jpg?v=1531404631" alt=""/>
            <div className='w-[90%] m-auto '>
            <h2>LADIES</h2>
            <h2>CATALOGUE MODE</h2>
            <p>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div className='flex'>
              <p>by Diego Lopez on June 21, 2018</p>
              <span>25</span>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_07_253x.jpg?v=1531404631" alt=""/>
          <div>
            <h2>LADIES</h2>
            <h2>CATALOGUE MODE</h2>
            <p>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div>
              <p>by Diego Lopez on June 21, 2018</p>
              <span>25</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_07_253x.jpg?v=1531404631" alt=""/>
          <div>
            <h2>LADIES</h2>
            <h2>CATALOGUE MODE</h2>
            <p>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div>
              <p>by Diego Lopez on June 21, 2018</p>
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='flex justify-center items-center'>@ FOLLOW US ON</h2>
        <h2 className='flex justify-center items-center'>INSTAGRAM</h2>
        <div className='grid grid-cols-6'>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst01_640x640.jpg?v=1620125943" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst02_640x640.jpg?v=1620125952" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst03_640x640.jpg?v=1620125963" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst04_640x640.jpg?v=1620125974" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst05_640x640.jpg?v=1620125984" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/inst06_640x640.jpg?v=1620125994" alt="" />
            <div className='w-[100%] h-[100%] absolute z-2 top-0 left-0 bg-[black] bg-opacity-[75%] flex justify-center items-center opacity-10 transition duration-500 ease-in-out hover:opacity-100'>
              <AiOutlineInstagram className='text-[2rem]'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <TfiHeadphoneAlt className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>SUPPORT 24/7</h2>
            <p className='text-[12px] text-[gray]'>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <IoArrowUndoOutline className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>30 DAYS RETURN</h2>
            <p className='text-[12px] text-[gray]'>Simply return it within 24 days for an exchange.</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <div>
            <BsTruck className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>FREE SHIPPING</h2>
            <p className='text-[12px] text-[gray]'>Free shipping on all US order or order above $99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info