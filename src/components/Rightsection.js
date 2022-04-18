import React from "react";
import "../components/index.css";

function Rightsection() {
  return (
    <div className="right-section">
      <div className="right-main-content">
        <div className="about sect">
          <h2 className="right-title">About Me</h2>
          <p className="para">
            I am a highly resourceful and focused software engineer with
            experience in building web and mobile applications. I excel and I'm
            invested in every stage of the life cycle of software development,
            including design implementation, coding, debugging, testing, and
            maintenance.
            <br />
            <br />
            Some of the tools and technologies I use are: Html, Css, Javascript,
            React.js, Firebase, bootstrap, Cordova, Ionic, Netlify, Github.{" "}
          </p>
        </div>

        <section className="experince sect">
          <h2 className="right-title">Experience</h2>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title">
                DevAngles Infotech Software Developer{" "}
              </h5>
              <p className="para">February 2022 - PRESENT</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2">Software Developer Intern</h5>
                <p className="para">
                  - Converted design and mockups to high-quality frontend
                  components using Javascript and the React library.
                  <br />
                  <br />
                  - Implement Firebase, a database, authentication, and cloud
                  storage and hosted React application on it. Optimized the
                  frontend app to
                  <br />
                  <br />
                  - Performed code reviews to ensure proper coding conventions
                  are followed.
                  <br />
                  <br />
                  - Deploying React Applications on Google Cloud Platform
                  (Google’s App Engine).
                  <br />
                  <br />- Documentation Of Tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title">Bincom Dev Center</h5>
              <p className="para">September 2021 - February 2022</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2">Frontend Engineer </h5>
                <p className="para">
                  - Converted design and mockups to high-quality frontend
                  components using Javascript and the React library.
                  <br />
                  <br />
                  - Built Mobile App using Cordova, Angular and Ionic.
                  <br />
                  <br />
                  - Maintaining Company's mobile applications.
                  <br />
                  <br />
                  - Worked on building out new features for the mobile
                  applications.
                  <br />
                  <br />- Documentation Of Tasks.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title">Ijaodola Technical Company</h5>
              <p className="para">November 2016 - September 2017</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2"> Technician</h5>
                <p className="para">
                  - Repaired and maintained computer systems.
                  <br />
                  - Repaired and maintain printers
                  <br />
                  - Diagnosing Faulty Computer System
                  <br />
                  - Installed and updated software.
                  <br />- Built and configured new hardware.
                </p>
              </div>
            </div>
          </div>
         
        </section>
        <section className="education sect">
          <h2 className="right-title">education</h2>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title">Olabisi Onabanjo University</h5>
              <p className="para">September 2017 - 2022</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2">B.SC Engineering</h5>
                <p className="para">
                Bachelor of Science in Computer Engineering 

                </p>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title">FAS Comprehensive College</h5>
              <p className="para"> 2013 - 2016</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2">A - Levels</h5>
                <p className="para">
                A - Levels Certificate
                </p>
              </div>
            </div>
          </div>
      
        </section>
        <section className="awards sect">
          <h2 className="right-title">Awards</h2>
          <div className="timeline">
            <div className="left-tl-content">
              <h5 className="tl-title"> Fas college</h5>
              <p className="para">2016</p>
            </div>
            <div className="right-tl-content">
              <div className="tl-content">
                <h5 className="tl-title-2">Excellent Work</h5>
                <p className="para">
                
                </p>
              </div>
            </div>
          </div>
       
        </section>
      </div>
    </div>
  );
}

export default Rightsection;
