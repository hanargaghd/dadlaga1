import React from 'react'
import { Header, Footer, Cards, Hero, Info, Trending } from "../components/index"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.module.css"
import { SessionProvider, useSession } from 'next-auth/react';

const  index = () => {
  const { data: session, status } = useSession()
  if(session) {
    console.log("Welcome ",session.user)
  }
  else{
    console.log("You are not logged in. State : ",status); 
  }

  return (
    <SessionProvider>
      <div className='overflow-hidden'>
        <Header/>
        <Hero/>
        <Cards/>
        <Trending/>
        <Info/>
        <Footer/>
      </div>
    </SessionProvider>
  )
}

export default index