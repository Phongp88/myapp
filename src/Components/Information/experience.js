import React from 'react';

function experience() {
  return (
    <div>
      <h2>Work</h2>
      <div className="projectInformation">
        <a href="https://www.insurelearn.com/loss-control-trivia-game/">
          <div className="gridInformation">
            <h3 className="projectTitle">Trivia</h3>
            <p className="projectDescription">Training Software</p>
            <p className="projectCompany"><span className="javaScript"></span>Javascript</p>
            <div className="companyTitle"><span class="companyText">Insure Learn</span></div>
          </div>
        </a>
        <a href="https://www.insurelearn.com/">
          <div className="gridInformation">
            <h3 className="projectTitle">Insure Learn</h3>
            <p className="projectDescription">Marketing Website</p>
            <p className="projectCompany"><span className="php"></span>PHP</p>
            <div className="companyTitle"><span class="companyText">Insure Learn</span></div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default experience;