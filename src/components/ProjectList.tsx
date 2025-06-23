import React from 'react';
import { projects } from '../data/projects';

const ProjectList = () => (
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a> – {project.description}
        </li>
      ))}
    </ul>
  </section>
);

export default ProjectList;
