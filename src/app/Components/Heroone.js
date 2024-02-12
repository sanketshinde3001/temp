import React from "react";
import Image from "next/image";

const Heroone = () => {
  return (
    <div className=" mx-auto mt-5 flex  justify-center  gap-10 relative ">
      <div className=" absolute bg-yellow-50 rounded-[5%] h-3/4 top-0 z-[-11] w-[96%]"></div>
      <div className="w-1/3">
        <div className="w-full">
        <Image
          src="https://pros.weddingpro.com/wp-content/themes/weddingpro-theme/dist/images/knot-ww-combined.png"
          width={527}
          height={47}
          alt="Picture of the author"
          className="mb-16 mt-12 "
        />

        <h2 className="text-5xl font-semibold mb-16 ">
          Grow your wedding business with the&nbsp;
          <span className="relative text-5xl font-semibold">
           industry
            <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
          </span>
          <span className="relative text-5xl font-semibold">
          leaders couples love
            <span className="absolute bottom-0 left-0 w-full h-6 bg-yellow-400 -z-10"></span>
          </span>
        </h2>
        <h3 className="text-xl mb-5 w-4/5 leading-10">
          WeddingPro combines The Knot and WeddingWire, two of the best wedding
          advertising marketplaces, to give you access to more couples in your
          area and increase your booking opportunities
        </h3>

        <button className="px-6 py-3 bg-purple-700 text-white rounded-3xl font-semibold  mb-60">
          Let's Partner Together
        </button>
        </div>
        <div className="w-full pt-16">
          <h2 className="text-4xl leading-relaxed font-semibold w-4/5">Let WeddingPro help  your business thrive</h2>
          <p className="w-4/5 mt-6 leading-8">
          The Knot and WeddingWire attract up to 21 million unique visitors every month, so there are always new couples in your area looking for a business just like yours.
          </p>
        </div>
        
      </div>

      {/* Column  2 */}
      <div className="w-[35%] flex  justify-between gap-4">
        <div className="w-[48%] flex flex-col items-center justify-center gap-12">
          <div className="w-full relative">
            <div className=" bg-purple-300 px-8 py-3 font-semibold absolute text-xl bottom-10 -left-20">
              Passionate professionals
            </div>
            <Image
              src="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_HP_Hero1.png"
              width={500}
              height={500}
              className="rounded-xl "
              alt="Picture of the author"
            />
            
          </div>
          <div className="w-full relative">
            <div className=" bg-purple-300 px-8 py-3 font-semibold absolute text-xl bottom-10 -left-40 w-full text-center">
              Countless beautiful weddings
            </div>
            <img
              src="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_HP_Hero2-1.png"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="w-[47%]">
          <div className="w-full relative h-full">
            <div className=" bg-purple-300 px-10 py-3 font-semibold absolute text-xl bottom-52 -right-40 w-full text-center z-10">
            Millions of happy couples
            </div>
            <img
              src="https://pros.weddingpro.com/wp-content/uploads/2023/10/3_HP_Hero3.png"
              className="rounded-xl absolute bottom-28 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroone;
