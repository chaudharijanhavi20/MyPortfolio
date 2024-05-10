import React from "react";
import Facerec from "../assets/facerec.jpeg";
import Swapnil from "../assets/swapnil.jpeg";
import Citizen from "../assets/citizen.png";
import { PiBracketsAngleBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import Allproj from "./Allproj";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [display, setDisplay] = useState(false);

  const handleRedirect = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const ShowName = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div name="projects"  id="Projects" className="w-full bg-black text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full sm:h-full">
        <div className="flex justify-between items-center">
          <p className="font-bold text-2xl sm:text-4xl hover:underline ">My Project</p>
          <button
            onClick={() => navigate("/projects")}
            className="text-2xl text-blue-400 hover:scale-90 duration-200 font-bold hover:text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md "
          >
            View more
            <FaArrowRight />
          </button>
        </div>
        {show && <Allproj />}
        <div className="grid mt-10 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              src={Citizen}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-105"
            ></img>
            <div className="px-4 py-2 m-1">
              <div>
                <p className="text-2xl font-bold ">Citizen Safety App</p>
              </div>
              <div>
                <p>
                  {" "}
                  Implemented Real time fraud prevention tools: SMS, URL, call,
                  UPI.Real-time Near By user detection & emergency assistance.
                  Engaging stories, simplified laws, news, AI videos.Chatbot for
                  instant fraud solutions
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  handleRedirect(
                    "https://github.com/chaudharijanhavi20/CitizenSafetyApp"
                  )
                }
                className="group  text-white hover:scale-105 duration-200
               hover:text-blue-500  flex items-center rounded-md "
              >
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              src={Facerec}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-110"
            ></img>
            <div className="px-4 py-2 m-1 text-white">
              <div>
                <p className="text-2xl font-bold ">Mera Attendance</p>
              </div>
              <div>
                <p>
                  Developed an Face recognition attendance system using{" "}
                  <span className="font-bold text-blue-400">DJANGO</span> and{" "}
                  <span className="font-bold text-blue-400">REACT</span> This
                  model is capable of real time facedetection and recognition
                  with high accuracy.It also provides visualisation using
                  library{" "}
                  <span className="font-bold text-blue-400">CHARTJS</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  handleRedirect(
                    "https://github.com/chaudharijanhavi20/Face-recognition-attendance-system"
                  )
                }
                className="group  text-white hover:scale-105 duration-200 hover:text-blue-500  flex items-center rounded-md "
              >
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg ">
            <img
              src={Swapnil}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-105"
            ></img>
            <div className="px-4 py-2 m-1">
              <div>
                <p className="text-2xl font-bold ">Pipeweb</p>
              </div>
              <div>
                <p>
                  Developed an e-commerce website using{" "}
                  <span className="font-bold text-blue-400">
                    Django,Tailwind CSS
                  </span>
                  , and{" "}
                  <span className="font-bold text-blue-400">JavaScript</span>.
                  Created a system for smooth retrieval of 1500+ products with
                  pagination.Implemented Location tracking ,sessions and cookies{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  handleRedirect(
                    "https://github.com/chaudharijanhavi20/pipeweb"
                  )
                }
                className="group  text-white hover:scale-105 duration-200 hover:text-blue-500  flex items-center rounded-md "
              >
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
