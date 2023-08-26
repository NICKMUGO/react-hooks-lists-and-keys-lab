import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  const projects2=projects.map((projects) => (<ProjectItem key={projects.id} projects={projects}name={projects.name}
    about={projects.about}
    technologies={projects.technologies} />))
  return (
    <div id="projects">
      <div id="project-list">
      {projects2}
      </div>
    </div>
  );
};

export default ProjectList;
