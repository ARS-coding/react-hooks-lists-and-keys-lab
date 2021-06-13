import React from "react";
import ProjectItem from "./ProjectItem";

// {props.arrayOfObjects.forEach((projectObj) => {
//   <ProjectItem key={projectObj.id} name={projectObj.name} about={projectObj.about} />          
// })}


function ProjectList(props) { // there's an array called projects that has object inside that each represents an individual project

  let projectItems = []; // there's gonna be ProjectItem components inside that we are gonna return with the ProjectList component
  function createProjectItem() {
    for(let i = 0; i < props.projects.length; i++) { // loop through the objects that represents an individual project
      let currentProjectObject = props.projects[i];
      projectItems.push
      (<ProjectItem 
        key={currentProjectObject.id} 
        name={currentProjectObject.name} 
        about={currentProjectObject.about} 
        technologies={currentProjectObject.technologies} 
      />)
    }
  }

  createProjectItem()
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectItems}
      </div>
    </div>
  );
}

export default ProjectList;
