import React from 'react'
import './styleseven.css'

const CoffeeHomepage = () => {
  return (
    <div className="flex bg-white w-full mainb text-black">
    <div className="w-[53%] h-full rotpar ">
      <div className="">
        <img className="scale-50  moving" src="/mypng.png" alt=""/>
        <h2 className="mx-6 text-6xl font-black relative bottom-80">Coffe have been always there In parellel space</h2>
      </div>
    </div>
    <div className="w-[47%] flex justifyparent">
      <div className="w-[33%] h-screen mr-1 flex flex-col justify-end justi1">
        <div className="w-full overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src="/coffee.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-[33%] h-screen  flex flex-col justify-center ">
        <div className="w-full overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src="/coffee2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="w-[33%] h-screen ml-1 flex flex-col justi2 justify-start">
        <div className="w-full  overflow-hidden h-[400px]">
          <div className="video-wrapper">
            <video autoPlay loop muted>
              <source src="/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

  </div>  )
}

export default CoffeeHomepage