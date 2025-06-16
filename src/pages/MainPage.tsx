import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <img src={"../images/profile.jpg"} alt="Richard Lyle" className="headshot" />
      <h1>Welcome to My Website</h1>
      <p>I'm Richard Lyle — Army officer, hockey player, and software developer in training.</p>
      <ul className="main-summary">
        <li>📖 Read about my journey in the <strong>Biography</strong></li>
        <li>🧩 Test your knowledge in the <strong>Interests Quiz</strong></li>
        <li>📄 View my <strong>Resume</strong></li>
        <li>📸 Browse photos in the <strong>Gallery</strong></li>
        <li>✉️ Reach out via the <strong>Contact Form</strong></li>
      </ul>
    </div>
  );
};

export default MainPage;
