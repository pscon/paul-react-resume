import React from "react";
import "../components/index.css";

function LeftSection() {
  return (
    <div className="left-section">
      <div className="left-content">
        <div className="profile">
          <div className="image">
            {/* <img src={require("../images/pauldp.png").default} alt="pics" /> */}
            <img src="../logo.svg" alt="pics" />
          </div>
          <h2 className="name">Ekunola Paul</h2>
          <p className="career">Software Engineer</p>
        </div>
        <div className="contact-info">
          <h3 className="main-title">Contact Info</h3>
          <ul>
            <li>Phone no:  +2348112699079</li>
            <li>ekunolapaul@gmail.com</li>
            <li>
              <a href="https://ekunola-paul.netlify.app/">Portfolio</a>
            </li>
            <li><a href="https://www.linkedin.com/in/ekunola-paul">Linkedin</a></li>
            <li><a href='https://github.com/pscon'>Github</a></li>
            <li>Lagos, Nigeria.</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="main-title">Skills</h3>
          <ul>
            <li>
              <p className="skill-title">React.js</p>
              <div className="progress-bar">
                <div className="progress js-progress"></div>
              </div>
            </li>

            <li>
              <p className="skill-title">Firebase</p>
              <div className="progress-bar">
                <div className="progress ps-progress"></div>
              </div>
            </li>
            <li>
              <p className="skill-title">Javascript</p>
              <div className="progress-bar">
                <div className="progress n-progress"></div>
              </div>
            </li>
            <li>
              <p className="skill-title">html/css</p>
              <div className="progress-bar">
                <div className="progress ps-progress"></div>
              </div>
            </li>
            <li>
              <p className="skill-title">Bootstrap</p>
              <div className="progress-bar">
                <div className="progress ps-progress"></div>
              </div>
            </li>
            <li>
              <p className="skill-title">Netlify</p>
              <div className="progress-bar">
                <div className="progress ps-progress"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="references-section">
          <h3 className="main-title">References</h3>
          <div className="referee">
            <h6 className="sub-title">Ekunola Ezekeil</h6>
            <p className="sub-para">Senior Software Developer</p>
            <ul>
              {/* <li>
                07661892982
              </li> */}
              <li>ekunolaezekiel@gmail.com</li>
            </ul>
          </div>
          <div className="referee">
            <h6 className="sub-title">John</h6>
            <p className="sub-para">Frontend Developer</p>
            <ul>
              {/* <li>
            
                07661892982
              </li> */}
              <li>jizzyjay232@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
