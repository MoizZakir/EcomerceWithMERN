import React from 'react'
import Nabar from '../Compoents/Nabar'
import Announecment from '../Compoents/Announecment'
import Slider from '../Compoents/Slider'
import Catagories from '../Compoents/Catagories'
import Products from '../Compoents/Products'
import NewsLetter from '../Compoents/NewsLetter'
import Footer from '../Compoents/Footer'


const Home = () => {
  return (
    <div>
      <Announecment/>
        <Nabar/>
        <Slider/>
        <Catagories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home