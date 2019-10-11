import React from 'react';

function projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projectInformation">
        <a href="https://github.com/Phongp88/AnimeTracker">
          <div className="gridInformation">
            <h3 className="projectTitle">Anime List Tracker</h3>
            <p className="projectDescription">Developing an anime tracking site using React, Redux and MongoDB</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="https://github.com/Phongp88/home">
          <div className="gridInformation">
          <h3 className="projectTitle">My Personal Website</h3>
            <p className="projectDescription">Website to sell myself by only using React and Material UI</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="https://github.com/Phongp88/ToDoListReact">
          <div className="gridInformation">
            <h3 className="projectTitle">Todo List</h3>
            <p className="projectDescription">Developed a Todo list in react to understand the basics of state and components</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
        <a href="https://github.com/Phongp88/phongp88-First-Portfolio">
          <div className="gridInformation">
            <h3 className="projectTitle">My First Portfolio</h3>
            <p className="projectDescription">That every same looking bootstrap site to display my current skills</p>
            <p className="projectLanguage"><span className="javaScript"></span>Javascript</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default projects;