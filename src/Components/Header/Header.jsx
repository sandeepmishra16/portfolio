import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (

    <nav className="bg-slate-950 flex flex-wrap justify-between md:items-center text-white px-20 py-6 md:px-20">
      <span className="text-3xl font-bold tracking-wide text-pink-600">
        SANDEEP MISHRA
      </span>

      <ul
        className={`${
          openMenu ? "block" : "hidden"
        }     mx-20  px-2 p-y6 font-semibold  bg-black rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-12`}
      >
        <a href="#About">
          <li className="text-md font-bold transition-all duration-300 hover:text-blue-500 hover:underline p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md font-bold transition-all duration-300 hover:text-blue-500 hover:underline p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Education">
          <li className="text-md font-bold transition-all duration-300 hover:text-blue-500 hover:underline p-1 md:p-0">
            Education
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md font-bold transition-all duration-300 hover:text-blue-500 hover:underline p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md font-bold transition-all duration-300 hover:text-blue-500 hover:underline p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setOpenMenu(true);
            setShowMenu(false);
          }}
        />
      ) : (
        <AiOutlineClose
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setOpenMenu(false);
            setShowMenu(true);
          }}
        />
      )}
    </nav>

  );
}
