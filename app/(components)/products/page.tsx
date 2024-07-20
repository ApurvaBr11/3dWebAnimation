"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-red-50">
      <motion.div
        animate={{ x: -400, scale: 1.3 }}
        exit={{ x: 0, scale: 1}}
        className=" border-black p-2"
      >
        <Link href={"/"}>
          <img
            className="h-96"
            src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-1/2 absolute right-0 space-y-4"
      >
        <p className="text-4xl font-bold">I m anshuman</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa
          sequi rerum facilis aliquam architecto alias temporibus, omnis
          adipisci eaque, itaque natus dicta aliquid totam. Mollitia illo
          delectus esse a?
        </p>
      </motion.div>
      
    </div>
  );
};

export default page;
