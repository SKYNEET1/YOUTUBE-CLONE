import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/yt-logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full px-4 py-2 bg-white shadow-md z-10">
      <div className="flex items-center space-x-4 md:space-x-5">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="YouTube Logo" className="h-8 cursor-pointer" />
      </div>

      <div className="hidden md:flex items-center w-full max-w-xs mx-2">
        <div className="flex-grow px-2 py-1 border rounded-l-full border-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button className="px-4  py-2 border rounded-r-full bg-gray-100 cursor-pointer border-gray-400">
          <CiSearch size={"16px"} />
        </button>
        <IoMdMic
          size={"39px"}
          className="ml-2 border border-gray-300 rounded-full cursor-pointer p-1 bg-gray-100 hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex items-center space-x-3">
        {/* Search Icon for Mobile */}
        <div className="md:hidden cursor-pointer">
          <CiSearch size={"24px"} />
        </div>
        <RiVideoAddFill className="text-2xl cursor-pointer" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <CgProfile className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;

