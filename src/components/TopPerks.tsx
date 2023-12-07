import React from "react";
import First from "../assets/svg/new/top perks/png/1.png";
import Second from "../assets/svg/new/top perks/png/2.png";
import Third from "../assets/svg/new/top perks/png/3.png";
import Fourth from "../assets/svg/new/top perks/png/4.png";
import Frame19 from '../assets/svg/new/png/Frame 19.png'

const TopPerks = () => {
  return (
    <div className=" overflow-hidden">
      <p className=" ms-[65px] font-extrabold text-[35px]">
        Top <span className="text-[#F47820]">Perks</span> for you
      </p>

      <div className=" h-[54%] py-[20px] flex flex-nowrap gap-[50px] px-[50px] relative overflow-hidden w-[120%] forContinueBtn">
        {/* perk card */}
        <div className=" w-[21%] h-full relative rounded-[20px] perkCardTransition shadow-[10px_0px_50px_3px_rgba(0,0,0,0.02)]">
          {/* Card and like */}
          <div className=" w-[30px] flex flex-col gap-[10px] absolute left-[245px] top-[10px] z-10 ">
            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex justify-center items-center p-[3px]" >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75928 0.604004H2.84261L2.89678 0.614837C4.39845 0.643966 5.71056 1.63679 6.14678 3.074L6.36344 3.8215H17.6626C18.6604 3.82605 19.6078 4.26029 20.2626 5.01317C20.9155 5.77083 21.2045 6.77613 21.0534 7.76484L20.4034 12.2498C20.187 13.969 18.7344 15.2643 17.0018 15.2832H10.6318C9.11002 15.2775 7.76986 14.2801 7.32761 12.824L4.58678 3.58317C4.3769 2.79037 3.6627 2.23586 2.84261 2.229H1.75928C1.31055 2.229 0.946777 1.86524 0.946777 1.4165C0.946777 0.967773 1.31055 0.604004 1.75928 0.604004ZM8.88761 12.304C9.11758 13.0753 9.82689 13.604 10.6318 13.604H17.0018C17.8984 13.5943 18.6577 12.9402 18.8001 12.0548L19.4501 7.559C19.5386 7.03568 19.3943 6.49979 19.0549 6.09171C18.7156 5.68364 18.215 5.44403 17.6843 5.43567H6.85094L8.88761 12.304Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M10.3826 16.5832C9.7843 16.5832 9.29928 17.0682 9.29928 17.6665C9.29928 18.2648 9.7843 18.7498 10.3826 18.7498C10.9809 18.7498 11.4659 18.2648 11.4659 17.6665C11.4659 17.0682 10.9809 16.5832 10.3826 16.5832Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M16.8826 16.5832C16.2843 16.5832 15.7993 17.0682 15.7993 17.6665C15.7993 18.2648 16.2843 18.7498 16.8826 18.7498C17.4809 18.7498 17.9659 18.2648 17.9659 17.6665C17.9659 17.0682 17.4809 16.5832 16.8826 16.5832Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex items-center justify-center p-[3px]">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1 17.8C9.6 17.8 9 17.6 8.6 17.2C2.1 11.5 2 11.4 2 11.3L1.9 11.2C0.699998 10 0 8.3 0 6.6V6.4C0.1 2.8 3 0 6.6 0C7.7 0 9.2 0.6 10.1 1.8C11 0.6 12.6 0 13.7 0C17.3 0 20.1 2.8 20.3 6.4V6.6C20.3 8.4 19.6 10 18.4 11.3L18.3 11.4C18.2 11.5 17.4 12.2 11.7 17.3C11.2 17.6 10.7 17.8 10.1 17.8ZM3.5 11C3.9 11.4 5.9 12.8 9.6 16C9.9 16.3 10.3 16.3 10.6 16C14.4 12.6 16.6 10.7 17.1 10.3L17.2 10.2C18.2 9.2 18.7 7.9 18.7 6.6V6.4C18.6 3.6 16.4 1.5 13.6 1.5C12.9 1.5 11.5 2 11 3.1C10.8 3.5 10.4 3.7 10 3.7C9.6 3.7 9.2 3.5 9 3.1C8.5 2.1 7.2 1.5 6.4 1.5C3.7 1.5 1.4 3.7 1.3 6.4V6.7C1.3 8 1.9 9.3 2.8 10.2L3.5 11Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* Card and like */}

          <div className="h-[80%] shadow-[3px 3px 2px 4px rgba(253,253,253,.5)] flex items-end justify-center overflow-hidden rounded-[20px]">
            <img className="" src={First} alt="noImg" />
          </div>

          <div className="h-[20%] rounded-b-[20px] flex gap-[27px] p-[10px] items-center bg-[#FFDAC0]">
            <p className=" font-bold text-[#F47820] text-[18px]">Visionary Brew Magic Mushroom Tea</p>
            <p className="text-[33px] font-extrabold text-[#F47820]">$25</p>
          </div>
        </div>
        {/* perk card */}

         {/* perk card */}
         <div className=" w-[21%] h-full relative rounded-[20px] perkCardTransition shadow-[10px_0px_50px_3px_rgba(0,0,0,0.02)]">
          {/* Card and like */}
          <div className="w-[30px] flex flex-col gap-[10px] absolute left-[245px] top-[10px] z-10 ">
            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex justify-center items-center p-[3px]" >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75928 0.604004H2.84261L2.89678 0.614837C4.39845 0.643966 5.71056 1.63679 6.14678 3.074L6.36344 3.8215H17.6626C18.6604 3.82605 19.6078 4.26029 20.2626 5.01317C20.9155 5.77083 21.2045 6.77613 21.0534 7.76484L20.4034 12.2498C20.187 13.969 18.7344 15.2643 17.0018 15.2832H10.6318C9.11002 15.2775 7.76986 14.2801 7.32761 12.824L4.58678 3.58317C4.3769 2.79037 3.6627 2.23586 2.84261 2.229H1.75928C1.31055 2.229 0.946777 1.86524 0.946777 1.4165C0.946777 0.967773 1.31055 0.604004 1.75928 0.604004ZM8.88761 12.304C9.11758 13.0753 9.82689 13.604 10.6318 13.604H17.0018C17.8984 13.5943 18.6577 12.9402 18.8001 12.0548L19.4501 7.559C19.5386 7.03568 19.3943 6.49979 19.0549 6.09171C18.7156 5.68364 18.215 5.44403 17.6843 5.43567H6.85094L8.88761 12.304Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M10.3826 16.5832C9.7843 16.5832 9.29928 17.0682 9.29928 17.6665C9.29928 18.2648 9.7843 18.7498 10.3826 18.7498C10.9809 18.7498 11.4659 18.2648 11.4659 17.6665C11.4659 17.0682 10.9809 16.5832 10.3826 16.5832Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M16.8826 16.5832C16.2843 16.5832 15.7993 17.0682 15.7993 17.6665C15.7993 18.2648 16.2843 18.7498 16.8826 18.7498C17.4809 18.7498 17.9659 18.2648 17.9659 17.6665C17.9659 17.0682 17.4809 16.5832 16.8826 16.5832Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex items-center justify-center p-[3px]">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1 17.8C9.6 17.8 9 17.6 8.6 17.2C2.1 11.5 2 11.4 2 11.3L1.9 11.2C0.699998 10 0 8.3 0 6.6V6.4C0.1 2.8 3 0 6.6 0C7.7 0 9.2 0.6 10.1 1.8C11 0.6 12.6 0 13.7 0C17.3 0 20.1 2.8 20.3 6.4V6.6C20.3 8.4 19.6 10 18.4 11.3L18.3 11.4C18.2 11.5 17.4 12.2 11.7 17.3C11.2 17.6 10.7 17.8 10.1 17.8ZM3.5 11C3.9 11.4 5.9 12.8 9.6 16C9.9 16.3 10.3 16.3 10.6 16C14.4 12.6 16.6 10.7 17.1 10.3L17.2 10.2C18.2 9.2 18.7 7.9 18.7 6.6V6.4C18.6 3.6 16.4 1.5 13.6 1.5C12.9 1.5 11.5 2 11 3.1C10.8 3.5 10.4 3.7 10 3.7C9.6 3.7 9.2 3.5 9 3.1C8.5 2.1 7.2 1.5 6.4 1.5C3.7 1.5 1.4 3.7 1.3 6.4V6.7C1.3 8 1.9 9.3 2.8 10.2L3.5 11Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* Card and like */}

          <div className="h-[80%] shadow-[3px 3px 2px 4px rgba(253,253,253,.5)] flex items-end justify-center overflow-hidden rounded-[20px]">
            <img className="" src={Second} alt="noImg" />
          </div>

          <div className="h-[20%] rounded-b-[20px] flex gap-[27px] p-[10px] items-center bg-[#FFDAC0]">
            <p className="font-bold text-[#F47820] text-[18px]">Visionary Brew Magic Mushroom Tea</p>
            <p className="text-[33px] font-extrabold text-[#F47820]">$25</p>
          </div>
        </div>
        {/* perk card */}

         {/* perk card */}
         <div className="w-[21%] h-full relative rounded-[20px] perkCardTransition shadow-[10px_0px_50px_3px_rgba(0,0,0,0.02)]">
          {/* Card and like */}
          <div className="w-[30px] flex flex-col gap-[10px] absolute left-[245px] top-[10px] z-10 ">
            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex justify-center items-center p-[3px]" >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75928 0.604004H2.84261L2.89678 0.614837C4.39845 0.643966 5.71056 1.63679 6.14678 3.074L6.36344 3.8215H17.6626C18.6604 3.82605 19.6078 4.26029 20.2626 5.01317C20.9155 5.77083 21.2045 6.77613 21.0534 7.76484L20.4034 12.2498C20.187 13.969 18.7344 15.2643 17.0018 15.2832H10.6318C9.11002 15.2775 7.76986 14.2801 7.32761 12.824L4.58678 3.58317C4.3769 2.79037 3.6627 2.23586 2.84261 2.229H1.75928C1.31055 2.229 0.946777 1.86524 0.946777 1.4165C0.946777 0.967773 1.31055 0.604004 1.75928 0.604004ZM8.88761 12.304C9.11758 13.0753 9.82689 13.604 10.6318 13.604H17.0018C17.8984 13.5943 18.6577 12.9402 18.8001 12.0548L19.4501 7.559C19.5386 7.03568 19.3943 6.49979 19.0549 6.09171C18.7156 5.68364 18.215 5.44403 17.6843 5.43567H6.85094L8.88761 12.304Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M10.3826 16.5832C9.7843 16.5832 9.29928 17.0682 9.29928 17.6665C9.29928 18.2648 9.7843 18.7498 10.3826 18.7498C10.9809 18.7498 11.4659 18.2648 11.4659 17.6665C11.4659 17.0682 10.9809 16.5832 10.3826 16.5832Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M16.8826 16.5832C16.2843 16.5832 15.7993 17.0682 15.7993 17.6665C15.7993 18.2648 16.2843 18.7498 16.8826 18.7498C17.4809 18.7498 17.9659 18.2648 17.9659 17.6665C17.9659 17.0682 17.4809 16.5832 16.8826 16.5832Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex items-center justify-center p-[3px]">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1 17.8C9.6 17.8 9 17.6 8.6 17.2C2.1 11.5 2 11.4 2 11.3L1.9 11.2C0.699998 10 0 8.3 0 6.6V6.4C0.1 2.8 3 0 6.6 0C7.7 0 9.2 0.6 10.1 1.8C11 0.6 12.6 0 13.7 0C17.3 0 20.1 2.8 20.3 6.4V6.6C20.3 8.4 19.6 10 18.4 11.3L18.3 11.4C18.2 11.5 17.4 12.2 11.7 17.3C11.2 17.6 10.7 17.8 10.1 17.8ZM3.5 11C3.9 11.4 5.9 12.8 9.6 16C9.9 16.3 10.3 16.3 10.6 16C14.4 12.6 16.6 10.7 17.1 10.3L17.2 10.2C18.2 9.2 18.7 7.9 18.7 6.6V6.4C18.6 3.6 16.4 1.5 13.6 1.5C12.9 1.5 11.5 2 11 3.1C10.8 3.5 10.4 3.7 10 3.7C9.6 3.7 9.2 3.5 9 3.1C8.5 2.1 7.2 1.5 6.4 1.5C3.7 1.5 1.4 3.7 1.3 6.4V6.7C1.3 8 1.9 9.3 2.8 10.2L3.5 11Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* Card and like */}

          <div className="h-[80%] shadow-[3px 3px 2px 4px rgba(253,253,253,.5)] flex items-end justify-center overflow-hidden rounded-[20px]">
            <img className="h-[70%]" src={Third} alt="noImg" />
          </div>

          <div className="h-[20%] rounded-b-[20px] flex gap-[27px] p-[10px] items-center bg-[#FFDAC0]">
            <p className="font-bold text-[#F47820] text-[18px]">Visionary Brew Magic Mushroom Tea</p>
            <p className="text-[33px] font-extrabold text-[#F47820]">$25</p>
          </div>
        </div>
        {/* perk card */}

         {/* perk card */}
         <div className="w-[21%] h-full relative rounded-[20px] perkCardTransition shadow-[10px_0px_50px_3px_rgba(0,0,0,0.02)]">
          {/* Card and like */}
          <div className="w-[30px] flex flex-col gap-[10px] absolute left-[245px] top-[10px] z-10 ">
            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex justify-center items-center p-[3px]" >
              <svg
                className="w-full h-full"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.75928 0.604004H2.84261L2.89678 0.614837C4.39845 0.643966 5.71056 1.63679 6.14678 3.074L6.36344 3.8215H17.6626C18.6604 3.82605 19.6078 4.26029 20.2626 5.01317C20.9155 5.77083 21.2045 6.77613 21.0534 7.76484L20.4034 12.2498C20.187 13.969 18.7344 15.2643 17.0018 15.2832H10.6318C9.11002 15.2775 7.76986 14.2801 7.32761 12.824L4.58678 3.58317C4.3769 2.79037 3.6627 2.23586 2.84261 2.229H1.75928C1.31055 2.229 0.946777 1.86524 0.946777 1.4165C0.946777 0.967773 1.31055 0.604004 1.75928 0.604004ZM8.88761 12.304C9.11758 13.0753 9.82689 13.604 10.6318 13.604H17.0018C17.8984 13.5943 18.6577 12.9402 18.8001 12.0548L19.4501 7.559C19.5386 7.03568 19.3943 6.49979 19.0549 6.09171C18.7156 5.68364 18.215 5.44403 17.6843 5.43567H6.85094L8.88761 12.304Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M10.3826 16.5832C9.7843 16.5832 9.29928 17.0682 9.29928 17.6665C9.29928 18.2648 9.7843 18.7498 10.3826 18.7498C10.9809 18.7498 11.4659 18.2648 11.4659 17.6665C11.4659 17.0682 10.9809 16.5832 10.3826 16.5832Z"
                  fill="#FDFDFD"
                />
                <path
                  d="M16.8826 16.5832C16.2843 16.5832 15.7993 17.0682 15.7993 17.6665C15.7993 18.2648 16.2843 18.7498 16.8826 18.7498C17.4809 18.7498 17.9659 18.2648 17.9659 17.6665C17.9659 17.0682 17.4809 16.5832 16.8826 16.5832Z"
                  fill="#FDFDFD"
                />
              </svg>
            </button>

            <button className=" bg-[#F47820] w-full h-[30px] rounded-[7px] flex items-center justify-center p-[3px]">
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1 17.8C9.6 17.8 9 17.6 8.6 17.2C2.1 11.5 2 11.4 2 11.3L1.9 11.2C0.699998 10 0 8.3 0 6.6V6.4C0.1 2.8 3 0 6.6 0C7.7 0 9.2 0.6 10.1 1.8C11 0.6 12.6 0 13.7 0C17.3 0 20.1 2.8 20.3 6.4V6.6C20.3 8.4 19.6 10 18.4 11.3L18.3 11.4C18.2 11.5 17.4 12.2 11.7 17.3C11.2 17.6 10.7 17.8 10.1 17.8ZM3.5 11C3.9 11.4 5.9 12.8 9.6 16C9.9 16.3 10.3 16.3 10.6 16C14.4 12.6 16.6 10.7 17.1 10.3L17.2 10.2C18.2 9.2 18.7 7.9 18.7 6.6V6.4C18.6 3.6 16.4 1.5 13.6 1.5C12.9 1.5 11.5 2 11 3.1C10.8 3.5 10.4 3.7 10 3.7C9.6 3.7 9.2 3.5 9 3.1C8.5 2.1 7.2 1.5 6.4 1.5C3.7 1.5 1.4 3.7 1.3 6.4V6.7C1.3 8 1.9 9.3 2.8 10.2L3.5 11Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* Card and like */}

          <div className=" h-[80%] shadow-[3px 3px 2px 4px rgba(253,253,253,.5)] flex items-end justify-center overflow-hidden rounded-[20px]">
            <img className="h-[72%]" src={Fourth} alt="noImg" />
          </div>

          <div className="h-[20%] rounded-b-[20px] flex gap-[27px] p-[10px] items-center bg-[#FFDAC0]">
            <p className="font-bold text-[#F47820] text-[18px]">Visionary Brew Magic Mushroom Tea</p>
            <p className="text-[33px] font-extrabold text-[#F47820]">$25</p>
          </div>
        </div>
        {/* perk card */}

        <button className="w-[70px] h-[70px]  absolute top-[140px] left-[78em] flex hover:opacity-10 rounded-[100%] ">
            <svg className="w-full h-full"   viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_267)">
<rect x="4" width="86" height="86" rx="43" fill="url(#paint0_linear_0_267)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.4558 60.7892C34.4558 59.9134 34.7888 59.0376 35.457 58.3694L51.2851 42.5436L35.457 26.7178C34.1228 25.3813 34.1228 23.2146 35.457 21.8781C36.7935 20.5439 38.9602 20.5439 40.2967 21.8781L58.5423 40.1237C59.8765 41.4602 59.8765 43.6269 58.5423 44.9634L40.2967 63.209C38.9602 64.5432 36.7935 64.5432 35.457 63.209C34.7888 62.5408 34.4558 61.665 34.4558 60.7892Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_0_267" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_267"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_267" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_267" x1="-81.5" y1="1.07319e-06" x2="225.5" y2="77" gradientUnits="userSpaceOnUse">
<stop stop-color="#F47820"/>
<stop offset="0.97291" stop-color="#F47820" stop-opacity="0"/>
</linearGradient>
</defs>
            </svg>
        </button>
      </div>

{/* Lorem ipsum Reactangle */}
      <div className=" w-[85%] flex justify-between p-[25px] rounded-[20px] h-[280px] linearBg mx-auto mt-[50px]">
        <div className="flex flex-col ps-[20px] justify-between">
          <p className="font-bold w-[50%] text-[40px] leading-[45px] tracking-[0px] text-white">Lorem <span className="text-[#F47820]">ipsum dolor</span> sit amet consectetur </p>
          <p className="w-[70%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <button className="bg-[#006838] text-white flex items-center p-[6px] w-[120px] justify-center rounded-[7px]">ipsum dolos</button>
        </div>

        <div className="w-[25%] h-[100%] border border-black">
          <img className="w-full h-full" src={Frame19} alt="noImg" />
        </div>
      </div>
{/* Lorem ipsum Reactangle */}

      
    </div>
  );
};

export default TopPerks;
