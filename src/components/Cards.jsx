import React from 'react'

const Cards = () => {
  return (
    <div>
      <div className='w-[100%] h-[400px] md:flex grid grid-cols-1 gap-5 pt-5'>
          <div className='md:w-[50%] w-[100%] h-[100%] flex gap-5'>
            <div className='w-[50%] h-[95%] flex flex-col gap-5'>
              <div className='w-[100%] h-[50%] relative'>
                <div className='w-[100%] h-[100%] overflow-hidden'>
                  <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_03_271x.jpg?v=1614290467" alt="" className=' object-cover hover:scale-125 duration-300 w-[100%] h-[100%]' />
                </div>
                <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
              </div>
              <div className='w-[100%] h-[50%] relative'>
                <div className='w-[100%] h-[100%] overflow-hidden'>
                  <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_04_271x.jpg?v=1614290467" alt="" className=' object-cover hover:scale-125 duration-300 w-[100%] h-[100%]'/>
                </div>
                <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
              </div>
            </div>
            <div className='w-[50%] h-[100%] relative '>
              <div className='w-[100%] h-[100%] overflow-hidden'>
                <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_06_271x.jpg?v=1614290467' className='w-[100%] h-[100%] object-cover hover:scale-125 duration-300'/>
              </div>
              <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
            </div>
          </div>
          <div className='md:w-[50%] w-[100%] h-[95%] flex flex-col gap-5 '>
            <div className='w-[100%] h-[50%] flex gap-5'>
              <div className='w-[50%] h-[100%] relative'>
                <div className='w-[100%] h-[100%] overflow-hidden'>
                  <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_05_271x.jpg?v=1614290467" alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 duration-300'/>
                </div>
                <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
              </div>
              <div className='w-[50%] h-[100%] bg-[blue] relative'>
                <div className='w-[100%] h-[100%] overflow-hidden'>
                  <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_07_271x.jpg?v=1614290467" alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 duration-300'/>
                </div>
                <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
              </div>
            </div>
            <div className='w-[100%] h-[50%] relative'>
              <div className='w-[100%] h-[100%] overflow-hidden'>
                <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_08_561x.jpg?v=1614290467" alt="" className='w-[100%] h-[100%] object-cover hover:scale-125 duration-300'/>
              </div>
              <button id="button" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-5 py-2 bg-[#fff] bg-opacity-[80%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cards