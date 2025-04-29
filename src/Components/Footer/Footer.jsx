import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {

  return (

    <>
      <div id="Footer" className="flex flex-col md:flex-row gap-10 justify-between bg-slate-950 text-white px-16 py-10 md:px-32 md:py-12" >
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal mt-2">
            You can reach out to me at:
          </h3>
        </div>

        <ul className="space-y-4 text-sm md:text-xl text-center md:text-left">
          <li className="flex justify-center md:justify-start gap-2 items-center hover:text-lime-700">
            <IoCallOutline size={20} />
            +91-6388632060
          </li>

          <li className="flex justify-center md:justify-start gap-2 items-center hover:underline hover:text-lime-700">
            <a
              href="mailto:sandeepmishra0916@gmail.com"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineEmail size={20} />
              sandeepmishra0916@gmail.com
            </a>
          </li>

          <li className="flex justify-center md:justify-start gap-2 items-center hover:underline hover:text-lime-700">
            <a
              href="https://www.linkedin.com/in/sandeep-mishra-0438181b2"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin size={20} />
              Linkedin
            </a>
          </li>

          <li className="flex justify-center md:justify-start gap-2 items-center hover:underline hover:text-lime-700">
            <a
              href="https://github.com/sandeepmishra16"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center bg-slate-950 text-white px-6">
        <h1 className="text-xl md:text-3xl mt-6 font-bold text-center">Thank you for visiting.</h1>
      </div>

      <div className="flex justify-center items-center bg-slate-950 text-white px-6">
        <h1 className="mt-4 mb-6 text-sm md:text-lg text-center">
          © 2025 Designed and Built by Sandeep Mishra
        </h1>
      </div>
    </>
    
  );
};

export default Footer;
