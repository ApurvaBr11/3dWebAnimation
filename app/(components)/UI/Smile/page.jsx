import React from 'react'
import './styletwenty.css'

const SmileCurvepage = () => {
  return (
 <div className="here main flex flex-col justify-center items-center h-screen ">
        <div className="curve">
            <div className="w-1/5 overflow-hidden bg-black">
                <img className="relative top-[160px] scale-[1.2]" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""/>
            </div>
            <div className="w-1/5 overflow-hidden">
                <img className="relative top-[170px] scale-[1.2]" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt=""/>
            </div>
            <div className="w-1/5 overflow-hidden">
                <img className="relative top-[280px] scale-[2]" src="https://images.unsplash.com/photo-1560707854-fb9a10eeaace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
            </div>
            <div className="w-1/5 overflow-hidden">
                <img className="relative top-[210px] scale-[1.3]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
            </div>
            <div className="w-1/5 overflow-hidden">
                <img className="relative top-[160px] left-8 scale-[1.4]" src="https://images.unsplash.com/photo-1533128361669-69c065857a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt=""/>
            </div>
        </div>
        <div className="text-6xl font-bold text-black relative bottom-[420px] w-1/2 px-20 flex justify-between items-center">
            <p className="">We</p>
            
            <p className="">Fetch</p>
        </div>
        <div className=" absolute bottom-[380px]">
            <div className="">
                <svg className=" relative" width="200" height="">
                    <path id="curve" d="M 100,60 a 40,40 0 1,1 0,80 a 40,40 0 1,1 0,-80" fill="none" stroke=""/>
                    <text >
                        <textPath  xlinkHref="#curve"> smiles smiles smiles  smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles smiles </textPath>
                    </text>
                </svg> 
            </div>  
            <div className="relative bottom-[65px] left-[80px] animatesp rotate-[90deg]">
                <svg width="50" height="30">
                    <line x1="5" y1="15" x2="35" y2="15" stroke="black" stroke-width="2"/>
                    <polyline points="30,10 35,15 30,20" stroke="black" stroke-width="2" fill="none"/>
                  </svg>
                   
              </div>  
        </div> 
        
    </div>  )
}

export default SmileCurvepage