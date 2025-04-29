import React from "react";
import ProjectCard from "./ProjectCard";
import restaurantImg from "../../assets/restaurant.png";
import jioCinemaimg from "../../assets/jio-cinema.png";
import shopifyImg from "../../assets/shopify.png";

const Projects = () => {

  return (

    <div id="Projects" className="px-10 py-6 md:px-24  text-white ">
      <h1 className="text-2xl md:text-4xl text-white text-center font-bold">
        Projects
      </h1>
      <div className="py-12 px-8 mt-6 flex flex-wrap gap-6">
        <ProjectCard
          img={shopifyImg}
          title="E-commerce Website"
          main="I built E-commerce website's Home page, Men, Women and Kids section and Cart page.  Implemented functionalities like Carousel, dynamic products per page, adding & removing products from the cart."
          github="https://github.com/sandeepmishra16/E-commerce-Shopify"
        />
        <ProjectCard
          img={jioCinemaimg}
          title="JioCinema Clone"
          main="I built the Jio Cinema using React, Express.js, CSS, and HTML.Created a backend API using Express.js to serve dynamic movie content. Implemented a search feature allowing users to find movies efficiently."
          github="https://github.com/sandeepmishra16/JioCinema-Clone"
        />
        <ProjectCard
          img={restaurantImg}
          title="Restaurant Website"
          main="I built a restaurant website's Home, Menu, About and Contact page using React, Tailwind CSS, and HTML. Enabled seamless client-side navigation using React Router, enhancing performance."
          github="https://github.com/sandeepmishra16/Restaurant-website"
        />
      </div>
    </div>

  );
};

export default Projects;
