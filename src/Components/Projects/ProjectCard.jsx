import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ img, title, main, github }) => {

  return (

    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl  rounded-2xl">
      <img className="p-4 w-full" src={img} alt={`${title} screenshot`} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 mt-2 text-sm md:text-md leading-tight">{main}</p>
      <div className="px-2 md:px-4 flex">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mt-10 flex items-center gap-2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-xl bg-[#465697]"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        )}
      </div>
    </div>

  );
};

export default ProjectCard;
