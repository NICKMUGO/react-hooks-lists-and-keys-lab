import React from 'react';

const ProjectItem = ({ technologies }) => {
  return (
    <div>
      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
        
      ))}
    </div>
  );
};

export default ProjectItem;
