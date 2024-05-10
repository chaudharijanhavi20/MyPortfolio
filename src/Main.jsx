import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Sociallinks from "./components/Sociallinks.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

import Allproj from "./components/Allproj.jsx";
import Footer from './components/Footer.jsx';



const Main = () => {
  return (
    <div>
        <NavBar/>
      <Home/>
     
      <Skills/>
      <Projects/>
      <About/>
      
      <Footer/>
      <Sociallinks/>
      
    </div>
  )
}

export default Main
