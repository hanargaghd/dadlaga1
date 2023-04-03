import React from 'react'
import { Header,Footer } from '@/components'
import Login from "../components/login"

const login = () => {
  return (
    <div className='p-0 m-0 overflow-hidden'>
        <Header/>
        <Login/>
        <Footer/>
    </div>
  )
}

export default login