import React from "react";
import Sociallinks from "./Sociallinks";
import { useNavigate } from "react-router-dom";
import Gdsc from "../assets/gdsc.png";
import Csi from "../assets/csi.png";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";

const Wholeabout = () => {
  const navigate = useNavigate();
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
    <div name="Allproj" className=" w-full bg-black">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <h1
            onClick={() => navigate("/")}
             className="text-4xl text-white font-semibold mt-20 pt-0 flex flex-row">
              <span className="font-bold text-blue-400"><BiLeftArrowAlt /></span>About-ME . . . .
            </h1>
          </div>

          <div className="pt-6 text-white font-thin">
            <p>W h o __ a m __ I__ ?</p>
          </div>
          <br></br>
          <p className="text-4xl mt-8 text-blue-400 font-signature">
            <span className="text-white">Hello! I am </span> Janhavi Ganesh
            Chaudhari.
          </p>
        </div>
        <br></br>
        <div className="text-white">
          <p className="text-xl mt-4">
            I am a proficient full-stack developer hailing from Mumbai, India.
            With a comprehensive skill set, I specialize in crafting responsive
            websites from inception to fruition, imbuing them with dynamic
            functionality and ensuring user-centric experiences.
          </p>
          <br></br>
          <p className="text-xl mt-4">
            My dedication to transforming ideas into tangible online platforms
            has been honed through year of self-guided learning and practical
            experience. I've had the privilege of collaborating with diverse
            clients, aiding them in establishing their digital footprint with
            elegant web solutions.
          </p>
          <br></br>
          <p className="text-xl mt-4">
            Driven by an insatiable curiosity and a commitment to staying
            abreast of the latest advancements, I am continuously expanding my
            expertise across cutting-edge technologies and frameworks.
          </p>
        </div>

        {/* Skills section */}
        <div>
          <p className="text-white text-2xl font-bold mt-14">
            <span className="text-blue-400">#</span>Skills
          </p>
        </div>
        <div className="grid mt-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
            <div
              class="group-hover:duration-400 relative rounded-2xl w-54 h-36 bg-zinc-900 text-gray-50 
  flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content[''] 
   before:bg-blue-900 before:right-3 before:top-0 before:w-56 before:h-32 before:-z-10 p-5"
            >
              <span class="text-2xl font-bold">Languages</span>
              <p class="text-blue-400 font-light">
                C , C++ , Python , Javascript
              </p>
            </div>
          </div>
          <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
            <div
              class="group-hover:duration-400 relative rounded-2xl w-54 h-36 bg-zinc-900 text-gray-50 
  flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content[''] 
   before:bg-blue-900 before:right-3 before:top-0 before:w-56 before:h-32 before:-z-10 p-5"
            >
              <span class="text-2xl font-bold">Tools</span>
              <p class="text-blue-400 font-light">
                {" "}
                Vs code , Figma , Canve , Xampp , Postman , Git
              </p>
            </div>
          </div>

          <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
            <div
              class="group-hover:duration-400 relative rounded-2xl w-54 h-36 bg-zinc-900 text-gray-50 
  flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content[''] 
   before:bg-blue-900 before:right-3 before:top-0 before:w-56 before:h-32 before:-z-10 p-5"
            >
              <span class="text-2xl font-bold">Databases</span>
              <p class="text-blue-400 font-light">
                MYSQL , Postgresql , SQLite , Firebase
              </p>
            </div>
          </div>

          <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 mt-10">
            <div
              class="group-hover:duration-400 relative rounded-2xl w-54 h-36 bg-zinc-900 text-gray-50 
  flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content[''] 
   before:bg-blue-900 before:right-3 before:top-0 before:w-56 before:h-32 before:-z-10 p-5"
            >
              <span class="text-2xl font-bold">Framework</span>
              <p class="text-blue-400 font-light">Django , FastAPI , React</p>
            </div>
          </div>
        </div>

        {/* Internship Part */}
        <div>
          <p className=" text-white text-2xl font-bold mt-14">
            <span className="text-blue-400">#</span>Internships
          </p>
        </div>
        <div>
          <div className="flex sm:flex-nowrap flex-wrap flex-row">
            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">Swapnil Enterprises</p>
                </div>

                <div>
                  <p className="text-gray-400">Full Stack Developer</p>
                  <p className="text-gray-400">August 2022 - Oct 2022</p>
                  <p className="text-white mt-3">
                    Maintained an e-commerce site using Django, Tailwind CSS,
                    and JavaScript. I built an admin panel for CRUD operations
                    and implemented efficient product retrieval with pagination.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-3">
                <button
                  onClick={() =>
                    handleRedirect(
                      "https://drive.google.com/file/d/14BJ7rJRXzaCJ7_JGq_hA-oTMzSOt7Hn1/view"
                    )
                  }
                  className="group text-white w-26 h-8 flex items-center mt-3 p-2 rounded-md bg-gradient-to-r
      border border-blue-400 hover:scale-110"
                >
                  Certificate
                </button>
              </div>
            </div>

            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 sm:mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">Dmce Alumini</p>
                </div>

                <div>
                  <p className="text-gray-400">Web Developer</p>
                  <p className="text-gray-400">August 2021 - may 2023</p>
                  <p className="text-white mt-3">
                    Maintained a college alumni portal using HTML, CSS, JS, and
                    PHP.Enhanced the portal to efficiently handle a dataset of
                    over 35,000 alumni records.Improved the user experience of
                    the portal
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-3">
                <button
                  onClick={() =>
                    handleRedirect(
                      "https://drive.google.com/file/d/1jB2-04FWaYAo4lrIWcQjIehTX8Xjq6Az/view?usp=sharing"
                    )
                  }
                  className="group text-white w-26 h-8 flex items-center mt-3 p-2 rounded-md bg-gradient-to-r
      border border-blue-400 hover:scale-110"
                >
                  Certificate
                </button>
              </div>
            </div>

            <div className="sm:w-1/3 w-full shadow-md border shadow-gray-600 rounded-lg  hover:scale-105 sm:mt-20 m-5">
              <div className="px-4 py-2 m-1 text-white">
                <div>
                  <p className="text-2xl font-bold ">Technohack Educate</p>
                </div>

                <div>
                  <p className="text-gray-400">Full Stack Developer</p>
                  <p className="text-gray-400">May 2023 - July 2023</p>
                  <p className="text-white mt-3">
                    Worked on real time industrial projects using REACT JS.Also
                    learned about Javascript libraries such as GSAP , AOS and
                    MATERIAL UI.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mb-3">
                <button
                  onClick={() =>
                    handleRedirect(
                      "https://drive.google.com/file/d/1X4wYzYeiMdDpPhZkwtv36Ds0DcM1PHt9/view?usp=sharing"
                    )
                  }
                  className="group text-white w-26 h-8 flex items-center mt-3 p-2 rounded-md bg-gradient-to-r
      border border-blue-400 hover:scale-110"
                >
                  Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Achivements */}
        <div>
          <p className=" text-white text-2xl font-bold mt-14">
            <span className="text-blue-400">#</span>Achivements
          </p>
          <div className="grid mt-2 sm:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-8 sm:px-0">
            <div className="mt-5">
              <p className="text-xl font-medium text-white">
                - Logithon 2024 Winner
              </p>
              <button
                onClick={() =>
                  handleRedirect(
                    "https://drive.google.com/file/d/1xDBZ943Bn-Yg2zcvHavumrzUPyIUoG5Z/view?usp=sharing"
                  )
                }
                className="text-white"
              >
                India's largest 24-hour logistics hackathon.{" "}
                <span className="underline hover:text-blue-400 hover:scale-90 duration-200">
                  view
                </span>
              </button>
            </div>
            <div className="mt-5">
              <p className="text-xl font-medium text-white">
                - UI/UX contest First Runner Up
              </p>
              <button
                onClick={() =>
                  handleRedirect(
                    "https://drive.google.com/file/d/10voImnGFaqmUAu74cfGpTMIRUuXK0CdZ/view?usp=sharing"
                  )
                }
                className="text-white"
              >
                Organized by CSI Datta Meghe College of Engineering.{" "}
                <span className="underline hover:text-blue-400 hover:scale-90 duration-200">
                  view
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Volenteering part */}
        <div>
          <div>
            <p className=" text-white text-2xl font-bold mt-14">
              <span className="text-blue-400">#</span>Volenteering
            </p>
          </div>

          <div className="grid mt-5 sm:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-8 sm:px-0">
            <div>
              
             
              
                <div className="ml-5">
                  <div>
                    <p className="text-white text-xl font-semibold">
                     - Backend Team <span className="text-gray-400">(GDSC DMCE)</span>
                    </p>
                    
                    <p 
                     className="text-gray-200">August 2022 - may 2023</p>
                  </div>
                  <button
                    onClick={() =>
                      handleRedirect(
                        "https://drive.google.com/file/d/1Ut0qwTCEio3i6XicBA0bgSKCH21X5vf7/view"
                      )
                    }
                    className="group text-white w-26 h-8 flex items-center mt-3 p-2 rounded-md bg-gradient-to-r
      border border-blue-400 hover:scale-110"
                  >
                    Certificate
                  </button>
                </div>
              </div>

            <div>
              
                
            <div className="ml-5">
                  <div>
                    <p className="text-white text-2xl font-bold"> - Tech Team <span className="text-gray-400">(CSI DMCE)</span></p>
                    <p className="text-gray-200">August 2022 - may 2023</p>
                  </div>
                  <button
                    onClick={() =>
                      handleRedirect(
                        "https://drive.google.com/file/d/139V1ZdnwfXV77Kfm-NMPuSgRSNK5mAba/view?usp=sharing"
                      )
                    }
                    className="group text-white w-26 h-8 flex items-center mt-3 p-2 rounded-md bg-gradient-to-r
      border border-blue-400 hover:scale-110"
                  >
                    Certificate
                  </button>
                </div>
              </div>
              </div>
        </div>
      </div>
      <Sociallinks />
    </div>
  );
};

export default Wholeabout;
