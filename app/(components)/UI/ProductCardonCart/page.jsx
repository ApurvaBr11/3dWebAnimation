import React from 'react'
import './styletseven.css'
import { BiArrowBack } from 'react-icons/bi'

const ProductCard = () => {
  return (
    <div className="p-8 space-y-8">
    <div className="flex justify-evenly items-center bg-[#ffffff] ">
        <div className="h-60 md:w-1/3 w-full mx-6 md:mx-0 bg-[#191825] p-2 flex justify-between overflow-hidden">
            <div
                className="border-dashed border-r-2   border-white w-6 h-full flex flex-col justify-between items-center relative">
                <div className="rounded-full bg-[#ffffff] w-4 h-4 relative bottom-4 left-[11px]"></div>
                <div className="rounded-full bg-[#ffffff] w-4 h-4 relative top-4 left-[11px]"></div>
            </div>
            <div className="w-full h-full mx-2 flex">
                <div className="h-full w-[70%] p-2 text-white space-y-3">
                        <p className="text-[10px] font-semibold text-[#ffffff5f]"> *  Special addition  *  Best deals  *  Best Seller  * </p>
                        <div className="">
                            <p className="text-lg font-bold">Expresso Latte</p>
                            <p className="text-[8px] text-[#ffffff8f] font-thin my-1">Size : large / md / sm</p>
                            <p className="text-[10px] text-[#ffffff] font-semibold my-2 mr-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p className="text-[12px] text-[#ffffff8f] font-semibold my-1"> 4 reviews | * * * * *  </p>
                        </div>
                </div>
                <div className="h-full w-[30%]  flex flex-col items-center relative">
                    <img className="w-full h-full scale-150 relative"
                        src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""/>
                    <div className="rounded-full w-12 h-12 bg-[#ffffff41] absolute bottom-4 flex items-center justify-center font-black">
                    <BiArrowBack/>
                    </div>
                    <div className="rounded-full w-12 h-12 bg-[#ffffff41] absolute bottom-4 hov"></div>
                </div>
            </div>
            <div className="w-3 h-full flex flex-col justify-between items-center relative  left-4">
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
                <div className="w-full h-3  rounded-full bg-[#ffffff]"></div>
            </div>
        </div> 
    </div>
    
   
    
   </div>  )
}

export default ProductCard
