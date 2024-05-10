import React from "react";
import Facerec from "../assets/facerec.jpeg";
import Plagiarism from "../assets/plagiarism.jpeg";
import Swapnil from "../assets/swapnil.jpeg";
import Citizen from "../assets/citizen.png";
import Sadhana from "../assets/sadhana.png";
import Music from "../assets/music.png";
import Sociallinks from "./Sociallinks";
import { PiBracketsAngleBold } from "react-icons/pi";
import NavBar from "./NavBar";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
import Home from "./Home"


const Allproj = () => {
  const navigate= useNavigate()
  const [show, setShow] = useState(false);
  const ShowName = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const [display, setDisplay] = useState(false);

  const handleRedirect = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };
  return (
    <div
      name="Allproj"
      className=" w-full bg-black"
    >
    <NavBar/>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" flex justify-between sm:pt-20">
          <p className="text-4xl text-white font-semibold mt-20 pt-0">
            <span className="font-bold text-blue-400">/</span>Projects ..
          </p>
          <button
            onClick={()=>navigate("/")}
            className="text-2xl text-white font-bold w-30 h-10 px-6 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
            hover:scale-105"
          >
            Back
            <FaArrowRight />
          </button>
        </div>
        <p className="text-white pt-5">L i s t O f m y A l l p r o j e c t s . . . .</p>
        <div className="grid mt-10 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4   sm:px-0 ">
          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105 mb-10">
            <img
              src={Citizen}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-105"
            ></img>
            <div className="px-4 py-2 m-1">
              <div>
                <p className="text-2xl font-bold text-white ">
                  Citizen Safety App
                </p>
              </div>
              <div>
                <p className="text-white">
                  {" "}
                  Implemented Real time fraud prevention tools: SMS, URL, call,
                  UPI.Real-time Near By user detection & emergency assistance.
                  Engaging stories, simplified laws, news, AI videos.Chatbot for
                  instant fraud solutions. Using{" "}
                  <span className="font-bold text-blue-400">
                    React Native
                  </span>{" "}
                  And <span className="font-bold text-blue-400">FastAPI</span>.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/CitizenSafetyApp')}
              className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105 mb-10">
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
                  <span className="font-bold text-blue-400">CHARTJS</span>.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/Face-recognition-attendance-system')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              
                
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105 mb-10">
            <img
              src={Plagiarism}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-110"
            ></img>
            <div className="px-4 py-2 m-1 text-white">
              <div>
                <p className="text-2xl font-bold ">Plagiarism Detector</p>
              </div>
              <div>
                <p>
                  Developed an Plagiarism Dtector system using{" "}
                  <span className="font-bold text-blue-400">
                    ML Models,Django
                  </span>{" "}
                  and <span className="font-bold text-blue-400">REACT</span>
                  which Detect Plagirism with high Acuracy. Beside this our
                  system also detects the plagiarism of handwritten text,for
                  that we have used dataset from{" "}
                  <span className="font-bold text-blue-400">Kaggle</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/plagiarismanalyzer')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105 ">
            <img
              src={Swapnil}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-110"
            ></img>
            <div className="px-4 py-2 m-1 text-white">
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
              <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/pipeweb')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105 ">
            <img
              src={Sadhana}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-110"
            ></img>
            <div className="px-4 py-2 m-1 text-white">
              <div>
                <p className="text-2xl font-bold ">Live Ecommerce Website</p>
              </div>
              <div>
                <p>
                  {" "}
                  Built eccomerce website with real time order and payment
                  system using{" "}
                  <span className="font-bold text-blue-400">
                    REACT JS
                  </span> and{" "}
                  <span className="font-bold text-blue-400">DJANGO</span>. Built
                  admin panel with Tree structure to get network of member in
                  market.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button onClick={() => handleRedirect('https://19herbs.netlify.app/')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Demo
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg  hover:scale-105">
            <img
              src={Music}
              alt="facerecognition attendance system"
              className="rounded-md duration-200 hover:scale-110"
            ></img>
            <div className="px-4 py-2 m-1 text-white">
              <div>
                <p className="text-2xl font-bold ">
                  Emotion based Music Player
                </p>
              </div>
              <div>
                <p>
                  A{" "}
                  <span className="font-bold text-blue-400">
                    React Js ,Tailwind css
                  </span>{" "}
                  and <span className="font-bold text-blue-400">Django</span>
                  -powered music player that dynamically selects tracks based on
                  user emotions detected using machine learning models, offering
                  a personalized listening experience.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                Code
                <PiBracketsAngleBold size={15} className="ml-1" />
              </button>
            </div>
          </div>

          
        </div>
        <p className="text-2xl text-white font-semibold mt-20">
            <span className="font-bold text-blue-400">#</span>Small-Projects
          </p>
          <div className="flex flex-wrap sm:flex-nowrap w-full">
            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">API Chat Application</p>
                </div>
                <br></br>
                <div>
                  <p className="text-blue-400"> DJANGO </p>
                  <p className="text-white">
                    IT demonstrates proficiency in developing real-time
                    messaging solutions, emphasizing expertise in API
                    integration and customization.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/chat_application')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                  Code
                  <PiBracketsAngleBold size={15} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 sm:mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">Club House Orientation</p>
                </div>
                <br></br>
                <div>
                  <p className="text-blue-400"> Java HTML CSS JAVASCRIPT</p>
                  <p className="text-white">
                    It includes features like virtual tours, introductions to
                    club rules and facilities, interactive maps, and Q&A
                    sessions with experienced members.{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                  Code
                  <PiBracketsAngleBold size={15} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 sm:mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">Shop Website</p>
                </div>
                <br></br>
                <div>
                  <p className="text-blue-400">
                    HTML , CSS , JAVASCRIPT , DJANGO{" "}
                  </p>
                  <p className="text-white">
                    Developed an eccomerce website with real time order and
                    payment system
                  </p> 
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button onClick={() => handleRedirect('https://github.com/chaudharijanhavi20/ice_cream_main')} className="group  text-white hover:scale-105 duration-200 hover:text-blue-500 w-fit px-6 py-3 my-2 flex items-center rounded-md ">
                  Code
                  <PiBracketsAngleBold size={15} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
      </div>
      <Sociallinks/>
    </div>
  );
};

export default Allproj;
