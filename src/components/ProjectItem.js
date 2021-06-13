import React from "react";

// {technologies.forEach(technology => {
//   idCount++;
//   return <span key={idCount}>{technology}</span>
// })} 


function ProjectItem({ name, about, technologies }) {

  let idCount = 0;
  let spanTags = []
  function createSpanTags() {
    for(let i = 0; i < technologies.length; i++) {
      let currentTechnology = technologies[i];
      idCount++;
      spanTags.push(<span key={idCount}>{currentTechnology}</span>)
    }
  }

  createSpanTags()

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies"> 
        {spanTags}
      </div> 
    </div>
  );
}

export default ProjectItem;
