import React from "react";
import './AllProjects.css'

import projectsInfo from './projectsInfo'

// Component project
import { Project } from "./Project";

export const AllProjects = () => {

    const projects = projectsInfo;

    return (
        <div id="Projects" className="allProjects">
            <h1>Some of my Projects!</h1>
            <div className="projectsCtn">
                {projects.map((project, index) => {
                    return (
                        <Project key={index} withProject={project} id={index} />
                    );
                })}
            </div>
        </div>
    );
}