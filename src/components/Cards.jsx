import React from 'react'

const Cards = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
      <div className='w-[50%] flex justify-between items-center gap-3'>
        <div className='w-[50%] flex justify-between items-center'>
          <div className='h-[50%] flex flex-col justify-between items-center gap-3'>
            <div className='relative'>
              <img src='	https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_03_271x.jpg?v=1614290467' />
              <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SALE</button>
            </div>
            <div className='relative'>
              <img src='	https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_04_271x.jpg?v=1614290467' />
              <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>NEW</button>
            </div>
          </div>
        </div>
        <div className='w-[50%] flex flex-col justify-between items-center relative'>
          <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_06_271x.jpg?v=1614290467'/>
          <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>WOMEN</button>
        </div>
      </div>
      <div className='w-[50%] flex flex-col justify-between items-center gap-2'>
        <div className='flex gap-3'>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_05_271x.jpg?v=1614290467" alt=""/>
            <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>MEN</button>
          </div>
          <div className='relative'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_07_271x.jpg?v=1614290467" alt=""/>
            <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>ACCESSORIES</button>
          </div>
        </div>
        <div className='relative'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_08_561x.jpg?v=1614290467" alt=""/>
          <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-1 px-2 py-1 bg-[#fff] bg-opacity-[90%] rounded-[5px] hover:text-[#fff] hover:bg-sky-600'>SHOES</button>
        </div>
      </div>
    </div>
  )
}

export default Cards