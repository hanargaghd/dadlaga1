import React from 'react'
import { Header, Footer, Cards, Hero, Info, Trending } from "../components/index"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const index = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <Trending/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default index