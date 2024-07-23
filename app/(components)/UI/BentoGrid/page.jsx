import React from 'react'
import './stylefour.css'

const BentoGridpage = () => {
  return (
<div className="w-screen overflow-hidden bg-white">
        <div className="w-screen flex justify-between md:px-32 px-6 py-2 bg-[#CCD5AE] items-center fixed">
            <p className="text-4xl">PlantLets</p>
            <div className="  justify-between items-center gap-6 text-bold hidden md:flex">
                <p>About</p>
                <p>Documents</p>
                <p>MockUps</p>
            </div>
        </div>
        <div className="line"></div>
        <div className="md:mx-32 mx-6 rounded my-6 bg-[#] md:h-[85vh] md:flex-row flex-col flex p-[2px] bg-[#E6DDC4] mt-20">
            <div className="md:w-[30%] w-[100%] h-full hidden md:block">
                <div className="h-2/3 bg-[#E6DDC4] p-[2px] overflow-hidden">
                    <div className=" bg-white h-full w-full rounded-lg overflow-hidden  ">
                        <img className="relative bottom-16" src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt=""/>
                    </div>
                </div>
                <div className="h-1/3 bg-[#E6DDC4] w-[100%] p-[2px]">
                    <div className=" bg-white h-full w-full rounded-lg overflow-hidden  ">
                        <img src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className="md:w-[70%] w-[100%] h-full">
                <div className="h-1/3 bg-[#E6DDC4] p-[2px]">
                    <div className=" bg-white h-full w-full rounded-lg text-6xl font-bold text-center py-8 text-white txtbg">
                        ADOPT A PLANT LIKE A BABIE
                    </div>
                </div>
                <div className="h-2/3 bg-[#E6DDC4] md:flex-row flex-col flex">
                    <div className="md:w-[70%] w-[100%] bg-[#E6DDC4] h-full p-[2px]">
                        <div className=" bg-white h-full w-full rounded-lg overflow-hidden  ">
                            <img className="relative"
                                src="https://images.unsplash.com/photo-1466517158279-36780cbb0b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""/>
                        </div>
                    </div>
                    <div className="md:w-[30%] w-[100%] h-full flex-row md:flex-col flex">
                        <div className="h-1/2 bg-[#E6DDC4] w-full p-[2px]">
                            <div className=" bg-white h-full w-full rounded-lg overflow-hidden ">
                                <img className="relative md:bottom-32"
                                    src="https://images.unsplash.com/photo-1463154545680-d59320fd685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80"
                                    alt=""/>
                            </div>
                        </div>
                        <div className="h-1/2 bg-[#E6DDC4] w-full p-[2px]">
                            <div className=" bg-white h-full w-full rounded-lg overflow-hidden">
                                <img className="relative md:bottom-32"
                                    src="https://images.unsplash.com/photo-1538998073820-4dfa76300194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  )
}

export default BentoGridpage
