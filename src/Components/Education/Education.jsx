import React from "react";

export default function Education() {

  return (

    <div id="Education" className="px-10 md:px-24 mb-10 mt-32">
      <h1 className="text-2xl md:text-4xl mb-10 text-center text-white font-bold">Educations</h1>
      <div className="flex">
        <div className="w-2/3">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-5 items-center">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">MERN Stack Web Development</h2>
              <h3 className="mt-3 text-lg font-bold leading-tight">APNA COLLEGE</h3>
              <p className="mt-3 text-sm leading-tight font-thin">
                Aug 2024 - Present
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-5 items-center">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">B.Tech in Electrical & Electronics Engineering</h2>
              <h3 className="mt-3 text-lg font-bold leading-tight">IES University , Bhopal</h3>
              <p className="mt-3 text-sm leading-tight font-thin">
                Sept 2021 - June 2024
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-5 items-center">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Diploma in Electrical Engineering</h2>
              <h3 className="mt-3 text-lg font-bold leading-tight">Saroj Institute of Technology & Management , Lucknow</h3>
              <p className="mt-3 text-sm leading-tight font-thin">
                July 2018 - Sept 2021
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-5 items-center">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Intermediate</h2>
              <h3 className="mt-3 text-lg font-bold leading-tight">PNMIC, Kushinagar | U.P Board</h3>
              <p className="mt-3 text-sm leading-tight font-thin">
                April 2017 - April 2018
              </p>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-8 rounded-lg p-5 items-center">
            <span className="text-white">
              <h2 className="text-2xl leading-tight">Matriculation</h2>
              <h3 className="mt-3 text-lg font-bold leading-tight">Gyaneshwari High School | Bihar Board</h3>
              <p className="mt-3 text-sm leading-tight font-thin">
                April 2015 - June 2016
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>

  );
};
