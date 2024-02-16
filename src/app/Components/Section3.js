// import { pages } from 'next/dist/build/templates/app-page'
import Image from "next/image";
import React from "react";

export default function Pages() {
  return (

      <div className="container bg-orange-50 rounded-2xl  flex justify-between align-center  mx-auto h-3/4 px-28">
        <div className="w-1/2 flex items-start justify-center flex-col">
          <div className="w-4/5">
          <h2 className="font-bold text-4xl   ">
            Streamline 
            communication with couples
          </h2>
          <h4 className="mt-9 text-xl">
            We know you're busy, so our platform is designed to be a
            one-stop shop for all the client communications you get from
            The Knot and WeddingWire.
          </h4>
          <button className="mt-7 bg-purple-950 p-3 rounded-3xl text-white">
            Connect with your next booking
          </button>
          </div>
          
        </div>
        <div className=" w-1/2 my-16 flex items-center justify-end ">
          <Image className="rounded-2xl" 
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/5_HP_streamlined-comms.png"
            width={500}
            height={500}
            alt="Streamline communication with couples" />
        </div>

    </div>
  );
}
