import React from "react";
import Province from '../assets/svg/new/png/CNDprovince.png'

const Ordering = () => {
  return (
    <div className="flex flex-col gap-[2em] items-center  mb-[3em]">
      <div className=" flex flex-col gap-[3.4em] mt-[8.4em]">
        <div className=" flex flex-col items-center">
          <p className="text-[2.6em] font-bold">How your order works</p>
          <p className="text-[1.3em]">Let's get your started</p>
        </div>

        <div className="flex justify-center gap-[5em] h-[460px] mb-10 ">
          <div className="flex flex-col gap-[20px] rounded-[20px] bg-white shadow-[2px_2px_40px_2px_rgba(0,0,0,.1)] w-[40%] h-full items-center ">
            <p className="font-medium text-[19px] mt-[8px]">
              We aim to provide The Best Customer Experience
            </p>
            <div className="flex flex-col gap-[20px] h-[90%] pb-[15px] ">
              <div className="w-full flex justify-evenly h-[50%]">
                <div className=" relative bg-[#FFDAC0] w-[40%] font-bold text-[25px] text-[#F47820] rounded-[20px] flex items-center justify-center px-[20px] text-center leading-[33px] ">
                  Place your Order
                  <div className=" w-[45px] h-[45px] absolute top-[0px] text-[30px] left-[-20px] text-white bg-[#F47820] flex items-center justify-center rounded-[100%] ">
                    1
                  </div>
                </div>

                <div className="relative bg-[#F47820] w-[40%] font-bold text-[25px] text-white rounded-[20px] flex items-center justify-center px-[20px] text-center leading-[33px]">
                  Receive a Confirmation Email
                  <div className=" w-[45px] h-[45px] absolute top-[0px] text-[30px] left-[-20px] text-white bg-black flex items-center justify-center rounded-[100%] ">
                    2
                  </div>
                </div>
              </div>

              <div className=" w-full flex justify-evenly h-[50%]">
                <div className="relative bg-[#F47820] w-[40%] font-bold text-[25px] text-white rounded-[20px] flex items-center justify-center px-[10px] text-center leading-[33px]">
                  Receive Product Tracking Details
                  <div className=" w-[45px] h-[45px] absolute top-[0px] text-[30px] left-[-20px] text-white bg-black flex items-center justify-center rounded-[100%] ">
                    3
                  </div>
                </div>

                <div className="relative bg-[#FFDAC0] w-[40%] font-bold text-[25px] text-[#F47820] rounded-[20px] flex items-center justify-center px-[10px] text-center leading-[33px]">
                  Get Product to your Door step
                  <div className=" w-[45px] h-[45px] absolute top-[0px] text-[30px] left-[-20px] text-white bg-[#F47820] flex items-center justify-center rounded-[100%] ">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex relative flex-col gap-[20px] rounded-[20px] bg-[#FFDAC0] shadow-[2px_2px_40px_2px_rgba(0,0,0,.1)] w-[40%] h-full  justify-center ps-[5.5vw]">
            <p className="pe-[10px] font-bold text-[20px]">We are delighted to let you know</p>

            <div className=" w-[85%] rounded-[20px] bg-[rgba(244,120,32)]  h-[65%] flex items-center">
              <img className="rounded-[20px] h-full w-full" src={Province} alt="" /> 

            </div>

            <p className="absolute left-[2.4em] top-[3em]  w-[70%] font-extrabold leading-[60px] text-white text-[50px]">We serve all Provinces in Canada</p>
          
          </div>

          
        </div>
      </div>

      <div className="flex w-[80%] items-center p-[2em] rounded-[20px] gap-[8em] justify-center shadow-[2px_2px_40px_2px_rgba(0,0,0,.1)] ">

        <div className="">
          <p className="text-[1.9em] font-extrabold">Subscribing to our newsletters</p>
          <p className="text-[#F47820] text-[1.2em]">Get weekly insights on new products and offers avialable</p>
        </div>

        <form className=" w-[40%] h-[3.4em] border-[1.5px] border-[#fba568] flex gap-1  justify-center p-1 rounded-[10px]">
          <input type="text" placeholder="Your email address" className="border placeholder:text-[rgba(0,0,0,.1)] border-black w-[70%] indent-1 text-[1.3em] outline-none border-none" />
          <button className="bg-[#006838] w-[40%] text-white font-bold text-[1.2em] rounded-[10px]">Subscribe</button>
        </form>

      </div>
    </div>
  );
};

export default Ordering;
