'use client';

import Color from "../HelperUi/Colors";
import Thunder from "../HelperUi/Thunder";

const homepage = () => {
  return (
    <div className="min-h-screen w-full bg-[#acafb9] flex justify-center items-center px-40">
      <div className="w-full text-black text-7xl p-8 font-bold">
        <p>If</p>
        <p>You dont feel the blaze</p>
      </div>
      <div className=" h-screen w-full flex justify-end items-end">
        {/* <Thunder /> */}
        <Color/>
      </div>
    </div>
  );
};

export default homepage;
