import React from "react";
import "./styleone.css";

const AnimatedCardPage = () => {
  return (
    <div className="w-screen bg-black items-center justify-center flex h-screen">
      <div className="parentWrap ">
      <div className="cardwrapper">
        <div className="little-card card bg-red-200">
          <img
            src="https://i.pinimg.com/originals/51/2f/10/512f106b565c3be66aab56b0a38fe339.gif"
            alt=""
          />
        </div>
        <div className="big-card big-card-1 card bg-yellow-100 overflow-hidden">
          <img
            src="https://i.pinimg.com/564x/9d/52/9b/9d529b9e3b6a6716953e353c7ede687e.jpg"
            alt=""
          />
        </div>
        <div className="little-card card bg-blue-100"></div>
        <div className="big-card big-card-2 card bg-green-200 overflow-hidden">
          {" "}
          <img
            className="h-full "
            src="https://media1.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif?cid=ecf05e479obrebzvjpal7lhkeywu7mti836tydnik9olkbqh&rid=giphy.gif&ct=g"
            alt=""
          />
        </div>
        <div className="little-card card bg-red-400"></div>
        <div className="big-card big-card-3 card bg-orange-400"></div>
        <div className="little-card card bg-yellow-300"></div>
        <div className="big-card big-card-4 card bg-purple-600"></div>
      </div>
    </div>
    </div>
  );
};

export default AnimatedCardPage;
