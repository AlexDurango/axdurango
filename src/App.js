import React from "react";

import './App.css'

// Import components
import { Navbar } from "./components/Navbar";
import { MainTitle } from "./components/MainTitle";
import { AboutMe } from './components/AboutMe';
import { AllProjects } from "./components/projects/AllProjects";
import { Contact } from "./components/Contact";

const App = () => {
  return (

    <div>
      {/* Sidebar */}
      <Navbar />

      <div className="ctn">
        
        {/* Alex Durango + video */}
        <MainTitle />

        {/* Description mia*/}
        <AboutMe />

        {/* Grid con los proyectos */}
        <AllProjects />

        {/* Información de contacto + mapa */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
