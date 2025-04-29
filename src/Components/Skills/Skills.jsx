import React from "react";
import {FaCss3, FaHtml5, FaJs, FaReact, FaBootstrap, FaNodeJs, FaGithub,} from "react-icons/fa";
import { TbSql, TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill, RiVercelFill  } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiExpress,SiMongodb, SiMui } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container">
        <div id="Skills" className=" px-10 py-4 mb-24 md:px-24">
          <h1 className="text-2xl md:text-4xl text-center text-white font-bold">
            Technical Skills
          </h1>
          <div className="h-auto w-full gap-10 mt-28 py-10">
            <Slider {...settings}>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950  rounded-xl">
                  <FaHtml5 color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    HTML
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaCss3 color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    CSS
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaJs color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    JavaScript
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaReact color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    React
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <TbBrandRedux color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Redux
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaNodeJs color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Node.js
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <SiExpress color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Express
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <TbSql color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    SQL
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <SiMongodb  color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    MongoDB
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <RiTailwindCssFill
                    color="#E34F26"
                    size={80}
                    className="ml-10"
                  />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Tailwind CSS
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaBootstrap color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Bootstrap
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <SiMui color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Material UI
                  </p>
                </div>
              </div>
              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <VscVscode color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    VS Code
                  </p>
                </div>
              </div>

              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <FaGithub color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Github
                  </p>
                </div>
              </div>

              <div>
                <div className="w-40 h-52 content-center bg-zinc-950 rounded-xl">
                  <RiVercelFill color="#E34F26" size={80} className="ml-10" />
                  <br />
                  <br />
                  <p className="text-white text-center text-xl font-bold">
                    Vercel
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
