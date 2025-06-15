import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>About Me</h2>
        <p>Army Signal Officer and retired hockey player. Stationed in El Paso, TX; grew up in Duluth, MN. Currently on deployment in Europe until fall. Graduated from West Point in May 2024.</p>
        <ul>
          <li><a href="https://github.com/richardlyle">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/richard-lyle-jr-761aba256/">LinkedIn</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default About;