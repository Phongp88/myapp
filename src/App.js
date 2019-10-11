import React from 'react';
import TopHeader from './Components/Header/topHeader.js'
import Experience from './Components/Information/experience.js'
import Projects from './Components/Information/projects.js';
import NavBar from './Components/Header/navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <div className="aboutMe">
          <TopHeader />
        </div>
        <div className="myInformation">
          <Experience />
          <Projects />
        </div>
      </div>
      <div>
        <footer>
          <span>© 2019 Phong Pham All Rights Reserved</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
