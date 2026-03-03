const { useState, useEffect } = React;
const project1 = "images/black-loginpage.png";
const project2 = "images/prisioner-delima.png";
const project3 = "images/grid.png";
const Projects = () => {

    return (
        <div className="projects-cont" id="projects">
            <div className="project-title">What have i built?</div>
            <div className="project-cont">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project3} alt="Gridcraft" />
                    </div>
                    <div className="project-card-title">GridCraft</div>
                    <div className="project-card-desc">Front end application using react.js that runs directly in your browser used to create pixel arts in a 16 X 16 grid and download as an image</div>
                    <div className="project-card-btn">
                        <a href="https://github.com/Rohan-Shridhar/gridcraft"><i className="fab fa-github"></i></a>
                        <div />
                        <a href="https://rohan-shridhar.github.io/gridcraft/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project2} alt="Prisoners Delima" />
                    </div>
                    <div className="project-card-title">Prisoners Delima</div>
                    <div className="project-card-desc">The Prisoner's Dilemma is a classic thought experiment in game theory, a field that studies how and why people make decisions when their outcomes depend on the choices of others.</div>
                    <div className="project-card-btn">
                        <a href="https://github.com/Rohan-Shridhar/Prisoners-Delima"><i className="fab fa-github"></i></a>
                        <div />
                        <a href="https://rohan-shridhar.github.io/Prisoners-Delima/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project1} alt="Attendance Tracker" />
                    </div>
                    <div className="project-card-title">Attendance Tracker</div>
                    <div className="project-card-desc">A web application that tracks attendance of students and lets teachers mark attendance of students.</div>
                    <div className="project-card-btn">
                        <a href="https://github.com/Rohan-Shridhar/Attendance-Tracker"><i className="fab fa-github"></i></a>
                        <div />
                        <a href="https://attendance-tracker-seven-kappa.vercel.app/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
