import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Resume: React.FC = () => (
  <div>
    <Header />
    <main>
      <h2>Resume</h2>
      <p><a href="/resume/richard-lyle-resume.pdf" download>Download My Resume (PDF)</a></p>
      <section>
        <h3>Education</h3>
        <p>West Point Military Academy – B.S. in Systems Engineering, 2024</p>
      </section>
      <section>
        <h3>Experience</h3>
        <p>Army Signal Officer – El Paso, TX</p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React</li>
          <li>Responsive Web Design</li>
          <li>DOM Manipulation</li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
);

export default Resume;