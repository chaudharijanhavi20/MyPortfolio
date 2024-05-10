import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
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
    <div name="About" id="About" className="w-full sm:h-screen sm:p-5 bg-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div>
          
          <br></br>
          <p className="text-4xl mt-10 text-blue-400 font-signature">
            <span className="text-white">Hello! I am </span> Janhavi Ganesh
            Chaudhari.
          </p>
        </div>
        <br></br>
        <div>
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
        <div className="pt-4">
          <button
            onClick={() => navigate("/About")}
            className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r border border-blue-400 hover:scale-110"
          >
            Read more
            <FaArrowRight size={30} className="pl-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
