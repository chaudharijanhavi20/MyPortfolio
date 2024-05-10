import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

const Footer = () => {
  const [display, setDisplay] = useState(false);

  const handleRedirect = (repositoryUrl) => {
    window.open(repositoryUrl, "_blank");
  };
  return (
    <div className=" bg-black">
    <p className="text-center font-semibold text-blue-500 text-4xl mb-8 font-signature">-- Thanks For visiting --</p>
    <footer className=" border-t-2 border-gray-300 text-gray-200 lg:text-left">
   
      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Janhavi Chaudhari
            </h6>
            <p>Full-Stack Developer and Passionate</p>
            <p>Competitive Programmer </p>
          </div>
          {/* <!-- Products section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Message me here!
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaWhatsapp size={20} className="mr-3 h-5 w-5" />
              +91-7822927179
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <HiOutlineMail size={20} className="mr-3 h-5 w-5" />{" "}
              janvhichaudhari8300@gmail.com
            </p>
          </div>

          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Find Me Here!
            </h6>
            <p
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/janhavi-chaudhari-a6a832247/"
                )
              }
              className="mb-4 flex items-center justify-center md:justify-start"
            >
              <FaLinkedin size={25} className="mr-3 h-5 w-5" />
              https://www.linkedin.com/in/janhavi-chaudhari-a6a832247/{" "}
            </p>
            <p
              onClick={() =>
                handleRedirect("https://github.com/chaudharijanhavi20")
              }
              className="mb-4 flex items-center justify-center md:justify-start"
            >
              <FaGithub size={25} className="mr-3 h-5 w-5" />{" "}
              https://github.com/chaudharijanhavi20
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
