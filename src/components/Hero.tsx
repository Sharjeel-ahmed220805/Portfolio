import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div data-aos="flip-left" id="hero"className="min-h-screen bg-no-repeat bg-[url(/powder_blue.png)]  bg-cover"
    style={{backgroundSize: "30%", backgroundPosition: "left 100px top 150px"}}
    >

    <Navbar />
    
     




     {/* serious code*/}
     <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
      <div className="hidden lg:block"></div>
      <div className="text[70px] sm:text-[90px] font-bold leading-tight flex justify-end  items-center">
        <div>
          <p data-aos="flip-right">I'm  </p>
          <p data-aos="flip-right">Sharjeel </p>
          <p data-aos="flip-right">Ahmed </p>                   
        </div>
      </div>
      </div> 
    </div>
     
  )
}

export default Hero
