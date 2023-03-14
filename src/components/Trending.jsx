import React from 'react'
import { TiStarFullOutline } from "react-icons/ti"
import { TiStarHalfOutline } from "react-icons/ti"
import { TiStarOutline } from "react-icons/ti"



const Trending = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h2>BEST SELLER</h2>
        <h3>TOP PRODUCT OF THIS WEEK</h3>
      </div>
      <div className='grid grid-cols-4 grid-rows-2'>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Premier_Cropped_Skinny_Jean_13_2048x2048_dab3dc7a-ea19-4476-8f0b-431b4317bff8_228x.jpg?v=1626266572" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Premier Cropped Skinny Jean</span>
            <span>$380.00</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_2048x2048_4a6d6aad-3619-4140-be98-998454c3287d_600x.jpg?v=1626265140" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
          <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>East Hampton Fleece Hoodie</span>
            <span>$450.00</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'> 
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Relaxed-FitCottonShirt_4_228x.jpg?v=1626266842" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
          <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Relaxed-Fit Cotton Shirt</span>
            <span>$480.00</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/TailoredFitMesh-PanelPolo_4_228x.jpg?v=1626266062" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Tailored Fit Mesh-Panel Polo</span>
            <div className='flex'>
              <span className='text-[#F8353E]'>$400.00&nbsp;&nbsp;</span>
              <span className='line-through'>$460.00</span>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/SlimFitCottonOxfordShirt_228x.jpg?v=1626290189" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Slim Fit Cotton Oxford Shirt</span>
            <span>$Price</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Faxon_Chambray_Low-Top_Sneaker_Featured_2048x2048_45918428-ab1d-40aa-988f-8543c7fa8bd8_228x.jpg?v=1626263765" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Faxon Canvas Low-Top Sneaker</span>
            <span>$Price</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'> 
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Viscose-CashmereScarf_4_228x.jpg?v=1626266964" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Viscose-Cashmere Scarf</span>
            <span>$Price</span>
          </div>
        </div>
        <div>
          <div className='w-[100%] h-[300px]'>
            <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/PlaidCottonOxfordShirt_8_228x.jpg?v=1626264687" alt="" className='w-[100%] h-[100%] object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[yellow] flex'>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarFullOutline/>
              <TiStarHalfOutline/>
              <TiStarOutline className='text-[gray] opacity-[50%]'/>
            </span>
            <span>Plaid Cotton Oxford Shirt</span>
            <span>$Price</span>
          </div>
        </div>
      </div>
      <div className='flex gap-2 '>
        <div className='relative'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_10_367x.jpg?v=1614290467" alt="" />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%]'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
        <div className='relative'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_11_367x.png?v=1614290510" alt="" />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%]'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
        <div className='relative'>
          <img src="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_09_367x.jpg?v=1614290467" alt="" />
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] px-5 py-5 rounded-xl bg-opacity-[75%]'>
            <h3 className='text-[12px] flex justify-center items-center'>AUTUMN 2022</h3>
            <h2>NEW ARRIVALS</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending