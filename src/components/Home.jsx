import React from "react";
import Janhavi from "../assets/Janhavi.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../components/BlinkingAnimation.css";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  
  const [display, setDisplay] = useState(false);

  const handleRedirect = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };
  return (
    <div name="home" className="h-screen w-full bg-black">
    
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full ">
      {/* <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-4 md:flex-row"> */}
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white ">
              <span className="font-bold text-blue-500">Janhavi Chaudhari</span> 
            </h2>
            <p className="text-gray-400 text-3xl mt-4 ">Full Stack Developer</p>
            <p className="text-gray-200 py-4 sm:w-[50%] my-5 sm:my-0 text-center font-thin">
            {/* An enthusiastic Student Developer. */}
            As an enthusiastic student developer, I'm deeply intrigued by full-stack development.
             Eager to dive into both front-end and back-end technologies, I'm driven by a genuine passion 
             for crafting comprehensive and dynamic digital solutions.
            </p>
            <div>
              <button
               onClick={() =>
                    handleRedirect(
                      "https://drive.google.com/file/d/1k3cXNmKeXVt1jlxWUIQXlG4X5IvWmwu8/view?usp=sharing"
                    )
                  } className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md border border-blue-600 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-50">
                Download CV
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          {/* <div>
            <img
              src={Janhavi}
              alt="Janhavi"
              className="rounded-2xl mx-auto w-2/3 md:w-80 border-x-8 border-blue-400 p-5"
            />
            <div
              className=" group  items-center px-2 py-1  mx-auto  border  border-blue-400
               p-8  text-white "
            >
              <div>
              <span className="text-blue-500 font-bold"># </span>
                 Current working on the project A Self-Learning AI-Powered PDF to
                Data Converter. 
                <span className="blinking-element">
                   |
                </span>
              </div>
            </div>
            </div> */}
        
        {/* </div> */}
        {/* <div
              className=" flex justify-center items-center w-full h-12 px-2 py-1 mx-auto mt-16 border  border-blue-400
               p-8 shadow-md s text-white "
            >
              <div className="w-fit flex flex-row items-center p-2 font-semibold">
              <span className="blinking-element">
               "We could never learn to be brave and patient if there were only joy in the world."
                </span>
              </div>
              <p> -Helen Keller</p>
            </div> */}

      
 


            
     
      </div>
    </div>
  );
};

export default Home;
