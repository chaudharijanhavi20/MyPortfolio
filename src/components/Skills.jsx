import React from "react";
import style from '../components/style.css'

const Skills = () => {
  return (
    <div
      name="Skills"
      id="Skills"
      className="w-full min-screen sm:h-full bg-black text-white"
    >
  
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto ">
        <div>
        <h2 className="text-2xl">
                  These are Technologies I have worked with....
                </h2>
          <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-8  sm:px-0">
        
            <section className="py-10" id="technologies">
              <div className="container m-auto px-4">
                
                <div className="mt-8">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">
                        HTML , CSS And BOOTSTRAP
                      </h2>
                      <p className="text-gray-500">100%</p>
                    </div>
                    <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-800 to-cyan-600 block rounded-md" />
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">JAVASCRIPT</h2>
                      <p className="text-gray-500">85%</p>
                    </div>
                    <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-800 to-cyan-600 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">UI/UX IN FIGMA</h2>
                      <p className="text-gray-500">90%</p>
                    </div>
                    <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-800 to-cyan-600 block rounded-md" />
                  </div>
                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">REACT JS</h2>
                      <p className="text-gray-500">90%</p>
                    </div>
                    <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-800 to-cyan-600 block rounded-md" />
                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold">TAILWIND CSS</h2>
                      <p className="text-gray-500">75%</p>
                    </div>
                    <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-800 to-cyan-600 block rounded-md" />
                  </div>
                </div>
              </div>
            </section>
            {/* <div className="w-1/2 h-1/3 shadow-md border shadow-blue-200 rounded-lg  hover:scale-105 mt-20 m-5"> */}
            <div className=" bounce">
              <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center sm:p-10   px-4 md:flex-row">
                <div>
                  <div
                    className=" flex justify-center items-center w-full h-12 px-2 py-1 mx-auto border  border-white
               p-8 shadow-md s text-white "
                  >
                    <p className="font-bold">Languages</p>
                  </div>
                  <div
                    className=" flex justify-center items-center w-full h-22 p-2 mx-auto  border  border-white
                shadow-md s text-gray-400"
                  >
                    <p> C , C++ ,Javascript , Python </p>
                  </div>
                </div>
                <div className="sm:ml-5  m-5">
                  <div
                    className=" flex justify-center items-center w-full h-12 px-2 py-1 mx-auto border  border-white
               p-4 shadow-md s text-white "
                  >
                    <p className="font-bold">Framework</p>
                  </div>
                  <div
                    className=" flex justify-center items-center w-full h-22  p-2 mx-auto  border  border-white
                shadow-md s text-gray-400 "
                  >
                    <p>Django , FastAPI , React</p>
                  </div>
                </div>
              </div>
              <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center sm:p-10  px-4 md:flex-row">
                <div>
                  <div
                    className=" flex justify-center items-center w-full h-12 px-2 py-1 mx-auto border  border-white
               p-8 shadow-md s text-white "
                  >
                    <p className="font-bold">Tools</p>
                  </div>
                  <div
                    className=" flex justify-center items-center w-full h-22 p-2 mx-auto  border  border-white
                shadow-md s text-gray-400"
                  >
                    <p> Vs code ,Postman , Figma , Git</p>
                  </div>
                </div>
                <div className="sm:ml-5 m-5">
                  <div
                    className=" flex justify-center items-center w-[100%] h-12 px-2 py-1 mx-auto  border  border-white
               p-8 shadow-md s text-white "
                  >
                    <p className="font-bold">Databases</p>
                  </div>
                  <div
                    className=" flex justify-center items-center w-full h-22 p-2 px-2 py-1 mx-auto border  border-white
                shadow-md s text-gray-400 "
                  >
                    <p>MYSQL , Postgresql , SQLite </p>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
