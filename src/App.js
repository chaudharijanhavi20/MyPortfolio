
import Main from "./Main.jsx";
import Allproj from "./components/Allproj.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx"

// import Main from "./Main.jsx"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Wholeabout from "./components/Wholeabout.jsx";


function App() {
 
  
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
          {/* <Route index element={<Home/>} /> */}
          <Route path="Projects" element={<Allproj/>} />
          <Route path="About" element={<Wholeabout/>} />
         
        
      </Routes>
    </Router>
    
      
    </div>
  );
}

export default App;
