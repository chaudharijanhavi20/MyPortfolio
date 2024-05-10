import React from 'react'
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Sociallinks from "./components/Sociallinks.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Allproj from "./components/Allproj.jsx";
import Contact from './components/Contact.jsx';




const Main = () => {
  return (
    <div>
        <NavBar/>
      <Home/>
     
      <Skills/>
      <Projects/>
      <About/>
      
      <Contact/>
      <Sociallinks/>
      
    </div>
  )
}

export default Main
