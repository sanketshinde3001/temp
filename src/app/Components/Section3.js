// import { pages } from 'next/dist/build/templates/app-page'
import Image from "next/image";
import React from "react";

export default function Pages() {
  return (
    <div className="flex justify-center ">
      <div className="container h-1/2 w-3/5 bg-orange-50 rounded-2xl  flex justify-between align-center m-20 p-16   ">
        <div className="m-20 content align-middle w-1/3 h-auto">
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
        <div className="img h-1/5 w-1/2 ">
          <Image className="rounded-2xl" 
            src="https://pros.weddingpro.com/wp-content/uploads/2023/10/5_HP_streamlined-comms.png"
            width={500}
            height={500}
            alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
