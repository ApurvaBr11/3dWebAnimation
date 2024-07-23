import React from 'react'
import './stylettone.css'

const SwakshyaBharatPage = () => {
  return (
    <div className="swmain">
    <div className="bg-[#BFCCB5] h-12 w-full flex justify-between px-8 items-center fixed">
        <div className="text-lg font-bold">Swachh Bharat</div>
        <div className="flex justify-between gap-10 items-center font-semibold text-sm h-full hidden md:flex">
            <p>About</p>
            <p>FAQs</p>
            <p className="h-full px-4 bg-black text-white flex items-center ml-12">SingUp</p> 
        </div>
        
    </div>
    <div className="h-screen w-[99.9%]  flex justify-center items-center overflow-hidden">
        <div className="relative bottom-[148px] left-[642px] bg-white border-2 border-[#BFCCB5] w-4 h-4 rounded-full z-50"></div>
        <div className="relative top-[186px] left-[640px] bg-white border-2 border-[#BFCCB5] w-4 h-4 rounded-full z-50"></div>
        <div className="w-[1200px] h-[1200px] rounded-full border-2 border-[#BFCCB5] relative left-[600px] animate-spi"></div>
    </div>
    <div className="h-screen pt-12 px-8 absolute w-[99.9%] top-0  flex justify-center items-center overflow-hidden">
        <div className=" h-full flex justify-center items-center">
                <div className="h-2/4 w-2/3 bg-white">
                    <div className="h-1/2 flex justify-center  items-center">
                        <div className="w-1/3 h-full text-8xl">
                            REUSE
                        </div>
                        <div className="w-1/3 h-full text-md text-justify p-2 pt-4">
                            Swachh Bharat Abhiyan is a national cleanliness campaign in India launched to promote hygiene, sanitation, and cleanliness in the countrys urban and rural areas. Its goal is to create a cleaner and healthier India for all.
                            <p className="text-lg font-bold text-center">Swa Bharat - Swachh Bharat</p>
                        </div>
                        <div className="w-1/3 h-full text-8xl pl-4">REDUCE</div>
                    </div>
                    <div className="h-1/2 flex justify-center  items-center">
                        <div className="w-1/3 h-full text-8xl text-center flex justify-center  items-center">
                            RECYCLE
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
</div>  )
}

export default SwakshyaBharatPage
