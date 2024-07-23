import React from 'react'
import './styleeight.css'

const CoffeeAnimationpage = () => {
  return (
<div className="flex bg-white flex-col md:flex-row md:w-full w-[80%] mainb">
    <div className="md:w-[53%] w-[100%] h-full rotpar ">
      <div className="">
        <img className="rot scale-75" src="/mypng.png" alt=""/>
        <h2 className="md:mx-6 mx-1 text-6xl font-black relative bottom-80">Coffe have been always there In parellel space</h2>
      </div>
    </div>
    <div className="md:w-[47%] w-[127%] relative md:bottom-0 bottom-96 flex justifyparent">
      <div className="w-[33%] h-screen mr-1 flex flex-col justify-end justi1">
        <div className="w-full overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoplay loop muted>
              <source src="/coffee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-[33%] h-screen  flex flex-col justify-center ">
        <div className="w-full overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoplay loop muted>
              <source src="/coffee2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-white h-10 w-[90%] mx-auto rounded-[3px]  text-black relative top-[90%] flex justify-start items-center p-2">
              <p className="mx-2 font-bold text-[rgba(0,0,0,0.8)]">Expresso</p>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[33%] h-screen ml-1 flex flex-col justi2 justify-start">
        <div className="w-full  overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoplay loop muted>
              <source src="/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

  </div>  )
}

export default CoffeeAnimationpage