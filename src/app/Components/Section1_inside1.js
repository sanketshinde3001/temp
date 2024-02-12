import React from "react";
import Image from "next/image";
import Sec1_Cards from "./Sec1_Cards";

const Section1_inside1 = () => {
  return (
    <>
      <div className="relative font-serif w-full h-screen  flex justify-center top-28">
        <div className="h-[48%] w-[94%] bg-orange-50 rounded-3xl ">
          <br />
          <strong className="text-5xl p-8">Our customers</strong>

          <div className="flex flex-row item-center">
            <div className="w-1/2 p-8 text-lg"> 
              <p>
                At WeddingPro, our customers’ success is our No. 1 priority.{" "}
              </p>
              <br />
              <p>
                From venues and caterers to photographers and wedding planners,
                discover who we work with and how partnering with The Knot and
                WeddingWire results in increased wedding bookings, rave reviews,
                and so much more!
              </p>
            </div>
            <div className="absolute z-10 right-0 top-14 p-0">
              <Image
                className="rounded-l-3xl right-0"
                src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-3.png"
                width={650}
                height={366}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
 
      <strong className="text-4xl pb-64 pl-20 font-semibold">Discover how WeddingPro can grow your business</strong>

      <Sec1_Cards />
      
      
    </>
  );
};

export default Section1_inside1;
