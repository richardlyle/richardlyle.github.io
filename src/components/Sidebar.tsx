import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <section id="about">
        <h2>About Me</h2>
        <p>
          Army Signal Officer and retired hockey player. Stationed in El Paso, TX; Grew up in Duluth, MN. Currently on deployment in Europe until the fall. Graduated from West Point Military Academy in May 2024.
        </p>
      </section>
      <section>
        <h3>Links</h3>
        <ul>
          <li><a href="https://github.com/richardlyle">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/richard-lyle-jr-761aba256/">LinkedIn</a></li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
