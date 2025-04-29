import React from "react";
import myImg from "../../assets/my-image.jpg";
import { MdFileDownload } from "react-icons/md";

const Home = () => {

  const resume = () => {
    const resumeUrl = "/Mishra.pdf";
    window.open(resumeUrl, "_blank");

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Mishra.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (

    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center px-6 py-10 md:px-20 md:py-12">
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-5xl font-semibold leading-normal tracking-tighter">
          Hi 👋, I'm Sandeep Mishra
        </h1>
        <p className="text-sm md:text-lg mt-4">
          Detailed-oriented and responsible Frontend Web Developer with a great
          knowledge of Web Development. Capable of writing efficient code using
          ReactJS, JavaScript, CSS and HTML. Passionate about coding and looking
          for an opportunity in software development.
        </p>

        <button
          onClick={resume}
          className="flex gap-1 items-center mt-5 text-white text-sm md:text-lg py-1 px-3 md:py-2 md:px-4 font-semibold rounded-3xl bg-[#465697] hover:bg-white hover:text-black"
        >
          Resume <MdFileDownload />
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          className="h-60 w-60 md:h-96 md:w-96 rounded-full object-cover"
          src={myImg}
          alt="Sandeep Mishra"
        />
      </div>
    </div>

  );
};

export default Home;
