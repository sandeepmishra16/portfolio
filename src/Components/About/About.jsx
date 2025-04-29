import React from "react";
import MyImg from "../../assets/about.jpg";

export default function About()  {
  return (
    <div id="About" className="text-white md:flex overflow-hidden  items-center md:flex-wrap md:justify-center bg-[#0c0e19] shadow-xl mx-0 md:mx-20 mb-28 bg-opacity-30 rounded-2xl p-12">

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          
          <div className="mr-32">
         
            <img className="md:h-80" src={MyImg} alt="About img" />
          </div>

          <div className="w-96">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
            <hr />
            <p className="text-sm md:text-xl font-[400] text-blue-300 leading-tight mt-4">
              A self-motivated, hard-working, and ambitious Frontend Web
              Developer and a good learner with proficiency in JavaScript.
              Having a Problem-solving mindset. Looking forward to working as a developer and
              competent employee in an exciting tech company.
            </p>
          </div>
        </div>
      </div>
  );
}
