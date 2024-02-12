import React from "react";

const Footer = () => {
  return (
    <>
      <div className="  bg-back w-screen ">
        <div className="container flex justify-between align-center mx-36 p-20">
          <div className="img--1 ">
            <img className="h-3/4 mx-10 rounded-2xl" src="./footer.webp" alt="" />
          </div>
          <div className="heading text-white">
            <h2 className="text-3xl font-bold ">Get started with us!</h2>
            <p className="my-6">
              Fill out the form below, or call 1-877-331-7752 to get started.
            </p>
            <div className="input">
              <input
                className="p-2 my-2 "
                type="text"
                placeholder="first name"
                required="true"
              />
              <input
                className="p-2 my-2 mx-2"
                type="text"
                placeholder="Last name"
                required="true"
              />
            </div>
            <div>
              <input
                className="p-2 my-2 "
                type="text"
                placeholder="Company"
                required="true"
              />
              <input
                className="p-2 my-2 mx-2"
                type="text"
                placeholder="Business Category"
                required="true"
              />
            </div>
            <div>
              <input
                className="p-2 my-2 "
                type="text"
                placeholder="Phone"
                required="true"
              />
              <input
                className="p-2 my-2 mx-2"
                type="text"
                placeholder="Email"
                required="true"
              />
            </div>
            <input
              className="p-2 my-2 "
              type="text"
              placeholder="Country"
              required="true"
            />
            <div className="flex justify-start align-center">
              <input type="checkbox" name="" id="" />
              <p className="m-5">
                By submitting and sharing your information you agree to
                WeddingPro’s terms of use and privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
