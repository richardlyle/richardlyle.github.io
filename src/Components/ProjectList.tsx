import React from 'react';
import Header from './Header';
import Footer from './Footer';

type Project = {
  title: string;
  description: string;
};

const projectList: Project[] = [
  { title: 'Project 1', description: 'Details about Project 1' },
  { title: 'Project 2', description: 'Details about Project 2' },
  { title: 'Project 3', description: 'Details about Project 3' },
  { title: 'Project 4', description: 'Details about Project 4' },
];

const Projects: React.FC = () => (
  <div>
    <Header />
    <main>
      <h2>My Projects</h2>
      <div className="grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Projects;