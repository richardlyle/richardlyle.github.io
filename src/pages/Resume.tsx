import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="name" style={{ textAlign: 'center' }}>Second Lieutenant Richard Lyle</h1>
      <p className="contact" style={{ textAlign: 'center' }}>El Paso, Texas | 218-213-1393 | rjlyle00@gmail.com</p>
      <hr className="divider" />
      <h2 className="section-title" style={{ textAlign: 'center' }}>Profile</h2>
      <p className="profile-text">
        Recent Signal Officer (2LT) with experience in network engineering, secure computing, and 
        communications seeking to leverage leadership skills and technical expertise in a civilian cybersecurity 
        role. Proven ability to deliver results under pressure, as demonstrated by leading a team to establish a secure 
        network across multiple classifications during an overseas deployment in just 48 hours. Eager to contribute 
        to the leading edge of computer security and make a lasting impact on the field.
      </p>
      <hr className="divider" />

      <h2 className="section-title" style={{ textAlign: 'center' }}>Employment History</h2>

      <div className="job">
        <h3 className="job-title" style={{ textAlign: 'center' }}>United States Army – Second Lieutenant (2LT)</h3>
        <h4 className="job-duration" style={{ textAlign: 'center' }}>Feb 2025 — Present</h4>
        <h4 className="job-location" style={{ textAlign: 'center' }}>G6 Network Operations Officer in Charge (Acting), DTAC, 1AD – Romania</h4>
        <p className="job-description">
          Selected within three months on active duty to oversee both network and radio communication teams. Acting 
          with the authority and responsibility above my current rank, lead a team of 20 soldiers responsible for the 
          installation network and maintenance of infrastructure across two separate classified systems. Successfully 
          managed and executed complex communication projects, ensuring seamless connectivity and adherence to 
          strict security protocols.
        </p>
      </div>

      <div className="job">
        <h4 className="job-duration" style={{ textAlign: 'center' }}>Nov 2024 — Feb 2025</h4>
        <h4 className="job-location" style={{ textAlign: 'center' }}>Signal Platoon Leader, TAC, SIS Co, HHBN, 1AD – El Paso</h4>
        <p className="job-description">
          Successfully deployed 20 Soldiers and over $30,000,000 worth of equipment. In charge of integrating and 
          mobilizing key communications equipment and systems in support of the 1st Armored Division Headquarters. 
          Supervised and executed the sanitation of mission critical platforms and systems, ensuring compliance with 
          current US and European laws and regulations. Adapted to mission objectives despite possessing little 
          hands-on experience with many of the problem sets encountered.
        </p>
      </div>

      <h2 className="section-title" style={{ textAlign: 'center' }}>Education</h2>

      <div className="education">
        <h3 className="education-location" style={{ textAlign: 'center' }}>Signal Basic Officer Leaders Course – Augusta</h3>
        <h4 className="education-duration" style={{ textAlign: 'center' }}>Jun 2024 — Nov 2024</h4>
      </div>

      <div className="education">
        <h3 className="education-location" style={{ textAlign: 'center' }}>BA of Science and Cyber Science: Physical Systems, United States Military Academy</h3>
        <h4 className="education-duration" style={{ textAlign: 'center' }}>Aug 2020 — May 2024</h4>
        <p className="education-details"style={{ textAlign: 'center' }}>
          Graduated from the Electrical Engineering, Computer and Cyber Science Department<br/>
          Focus: Physical Systems<br/>
          - Received the Master of the Sword Fitness award<br/>
          - Placed 2nd in Undergraduate Capstone Project Presentation and Competition<br/>
          - Army NCAA Men’s Ice Hockey: Captain (’24)<br/>
          - Built Autonomous Robot and competed in the NASA Astrobotics Competition
        </p>
      </div>

      <h2 className="section-title" style={{ textAlign: 'center' }}>Skills</h2>
      <div className="skills" style={{ textAlign: 'center' }}>
        <p>Operations Planning | Operations Management | Agility & Innovation</p>
        <p>Coalition/Team Building | Network Engineering | Multi-Domain Combat Support Integration</p>
        <p>Problem-Solving | Organizational Strategic Planning | Software Integration</p>
      </div>
    </div>
  );
};

export default Resume;
