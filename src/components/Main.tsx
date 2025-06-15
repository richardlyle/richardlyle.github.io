import React from 'react';

const Main: React.FC = () => {
  return (
    <main id="projects" className="main">
      <h1>My Projects</h1>
      <div className="grid">
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
        <div className="project">Project 3</div>
        <div className="project">Project 4</div>
      </div>
    </main>
  );
};

export default Main;