import React from 'react'
import { HiOutlineShoppingBag} from "react-icons/hi"
import { CiUser } from "react-icons/ci"
import { AiOutlineSearch } from "react-icons/ai"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"


const Header = () => {
  return (
    <div className='flex items-center'>
      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-4 text-[12px]'>
          <li>
            <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_95x.png?v=1614293854' alt='Logo' />
          </li>
          <li>HOME</li>
          <li>SHOP</li>
          <li>PAGES</li>
          <li>BLOG</li>
          <li>PORTFOLIO</li>
          <li>WOMEN</li>
          <li>MEN</li>
          <li>BUY THEME!</li>
        </ul>
        <ul className='flex justify-center items-center'>
          <li><AiOutlineSearch/></li>
          <li><HiOutlineShoppingBag/></li>
          <li><CiUser/></li>
          <li><HiAdjustmentsHorizontal/></li>
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header