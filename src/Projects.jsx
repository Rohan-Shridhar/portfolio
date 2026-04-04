const { useState, useEffect } = React;
const project1 = "images/todolist.png";
const project2 = "images/notjs.png";
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
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/gridcraft"><i className="fab fa-github"></i></a>
                        <a href="https://rohan-shridhar.github.io/gridcraft/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project2} alt="NotJS" />
                    </div>
                    <div className="project-card-title">NotJS</div>
                    <div className="project-card-desc">A simple code recognition application for only javascript and throws 418 teapot HTTp error if javascript is not detected</div>
                    <div className="project-card-btn">
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/NotJS"><i className="fab fa-github"></i></a>
                        <a href="https://rohan-shridhar.github.io/NotJS/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project1} alt="To Do List" />
                    </div>
                    <div className="project-card-title">To Do List</div>
                    <div className="project-card-desc">A basic, functional To-Do List application built with React for managing tasks. Includes basic task management functionality.</div>
                    <div className="project-card-btn">
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/To-Do-List"><i className="fab fa-github"></i></a>
                        <a href="https://to-do-list-iota-fawn-49.vercel.app"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
