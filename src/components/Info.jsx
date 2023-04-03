import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { IoArrowUndoOutline } from "react-icons/io5"
import { BsTruck } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"


const Info = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-[50px]'>
        <h2 className='mb-[25px] text-[2rem] cursor-pointer hover:text-[#3b82f6] duration-200'>LATEST FROM BLOG</h2>
        <h3 className='mb-[25px] text-xl cursor-pointer'>THE FRESHEST AND MOST EXCITING NEWS</h3>
      </div>
      <div className='w-100 h-[400px] block md:flex justify-center items-center gap-5'>
        <div className='w-[100%] md:w-[25%] h-[100%] flex flex-col relative'>
          <div className='w-[100%] h-[100%] flex flex-col '>
            <div className='w-[100%] h-[70%] bg-[gray] '>
              <img className='w-[100%] h-[100%]' src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_07_253x.jpg?v=1531404631" alt="" />
            </div>
          </div>
          <div className='absolute bottom-0 left-[5%] w-[90%] h-[40%] bg-[#fff] flex flex-col justify-center items-center rounded-lg'>
            <p className='text-[#3b82f6]'>LADIES</p>
            <p className='font-[500] text-[1.2rem]'>CATALOGUE MODE</p>
            <p className='w-[80%] text-[gray] text-[14px]'>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div className='flex justify-between items-center gap-20 text-[0.8rem]'>
              <p>by Diego Lopez on June 21, 2018</p>
              <div className='flex justify-center items-center'><FaRegComment/>25</div>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[25%] h-[100%] flex flex-col relative'>
          <div className='w-[100%] h-[100%] flex flex-col group'>
            <div className='w-[100%] h-[70%] bg-[gray] '>
              <img className='w-[100%] h-[100%]' src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_12_365x.jpg?v=1531405283" alt="" />
            </div>
          </div>
          <div className='group-hover:scale-125 absolute bottom-0 left-[5%] w-[90%] h-[40%] bg-[#fff] flex flex-col justify-center items-center rounded-lg'>
            <p className='text-[#3b82f6]'>LADIES</p>
            <p className='font-[500] text-[1.2rem]'>CATALOGUE MODE</p>
            <p className='w-[80%] text-[gray] text-[14px]'>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div className='flex justify-between items-center gap-20 text-[0.8rem]'>
              <p>by Diego Lopez on June 21, 2018</p>
              <div className='flex justify-between items-center'><FaRegComment/>25</div>
            </div>
          </div>
        </div>
        <div className='w-[100%] md:w-[25%] h-[100%] flex flex-col relative'>
          <div className='w-[100%] h-[100%] flex flex-col '>
            <div className='w-[100%] h-[70%] bg-[gray] '>
              <img className='w-[100%] h-[100%]' src="https://cdn.shopify.com/s/files/1/0130/5041/3114/articles/bl_08_365x.jpg?v=1531405203" alt="" />
            </div>
          </div>
          <div className='absolute bottom-0 left-[5%] w-[90%] h-[40%] bg-[#fff] flex flex-col justify-center items-center rounded-lg'>
            <p className='text-[#3b82f6]'>LADIES</p>
            <p className='font-[500] text-[1.2rem]'>CATALOGUE MODE</p>
            <p className='w-[80%] text-[gray] text-[14px]'>It is a long established fact that by the readable content of a page when looking at its layout.</p>
            <div className='flex justify-between items-center gap-20 text-[0.8rem]'>
              <p>by Diego Lopez on June 21, 2018</p>
              <div className='flex justify-center items-center'><FaRegComment/>25</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='flex justify-center items-center pt-[2rem] font-[500]'><a className='underline text-[#3b82f6] hover:no-underline' href="">@ FOLLOW US</a>&nbsp;  ON</h2>
        <h2 className='flex justify-center items-center pt-[1rem] pb-[2rem] font-[400]'>INSTAGRAM</h2>
        <div className='grid sd:grid-cols-3 md:grid-cols-6 md:pt-0 pt-[50rem]'>
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
      <div className='flex justify-center items-center gap-5 py-[4rem]'>
        <div className='flex justify-center items-center gap-2 cursor-pointer hover:text-[#2879FE]'>
          <div>
            <TfiHeadphoneAlt className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>SUPPORT 24/7</h2>
            <p className='text-[12px] text-[gray] md:flex hidden'>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 cursor-pointer hover:text-[#2879FE]'>
          <div>
            <IoArrowUndoOutline className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>30 DAYS RETURN</h2>
            <p className='text-[12px] text-[gray] md:flex hidden'>Simply return it within 24 days for an exchange.</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 cursor-pointer hover:text-[#2879FE]'>
          <div>
            <BsTruck className='text-[1.5rem] text-[#2879fe]'/>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[14px] font-semibold'>FREE SHIPPING</h2>
            <p className='text-[12px] text-[gray] md:flex hidden'>Free shipping on all US order or order above $99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info