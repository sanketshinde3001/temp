// import { pages } from 'next/dist/build/templates/app-page'
import React from "react";

export default function Section5() {
  return (
    <div className="flex justify-center">
      <div className="container h-1/2 w-1/2 bg-orange-50 rounded-2xl  flex justify-between align-center m-20 p-16  ">
        <div className="img h-72 w-72 ">
          <img className="rounded-2xl" src="./weddingpro-2.webp" alt="" />
        </div>
        <div className="content m-6">
          <h2 className="font-bold text-3xl mb-9">
            Access support <br />
            anytime you need it <br />
          </h2>
          <h4 className="">
            We provide onboarding guidance, a dedicated <br />
            support team and on-demand resources and <br /> education to help
            you get the most out of your <br />
            advertising journey.
          </h4>
          <button className="mt-7 bg-purple-950 p-3 rounded-3xl text-white">
            Connect with your next booking
          </button>
        </div>
      </div>
    </div>
  );
}
