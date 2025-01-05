import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
          <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
        </div>
        {/* delivery */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input type="text" placeholder="Search next_amazon_yt products" />
        </div>
      </div>
    </div>
  );
};
export default Header;
