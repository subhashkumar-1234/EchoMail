import React from "react";
import Avatar from "react-avatar";
import { BsQuestionCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between mx-3 h-16">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <RxHamburgerMenu size={"20px"} />
            </div>
            <img
              className="w-8"
              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
              alt="Gmail Logo"
            />
            <h1 className="text-2xl text-gray-500 font-medium "> Gmail</h1>
          </div>
        </div>
        <div className=" md:block hidden w-[50%] mr-60">
          <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
            <IoIosSearch size={"24px"} className="text-gray-700" />
            <input
              type="text"
              placeholder="Search Gmail"
              className="rounded-full w-full bg-transparent outline-none px-1"
            />
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex items-center gap-2">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <BsQuestionCircle size={"20px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <FiSettings size={"20px"} />
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
              <TbGridDots size={"20px"} />
            </div>
            <div>
              <Avatar
                src="https://lh3.googleusercontent.com/ogw/AF2bZyh7MTeKEdvHe4iF8AJkEKm7IyNG_OpuoeEBQX_h2HQrX64=s32-c-mo"
                size="40px"
                round={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
