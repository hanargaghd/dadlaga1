import React from 'react'
import { Header,Footer } from '@/components'
import Signup from "../components/signup"

const signup = () => {
  return (
    <div className='p-0 m-0 overflow-hidden'>
        <Header/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default signup