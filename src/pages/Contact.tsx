import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaBirthdayCake } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src="images/profile.jpg" alt="Richard Lyle" className="profile-photo" />
        
        <div className="contact-info">
          <h1>2LT Richard Lyle</h1>
          <p className="position">SIS Co., HHBN, 1AD</p>
          <p className="position">TAC Platoon Leader</p>

          <div className="contact-row">
            <FaPhone className="icon" />
            <a href="tel:+12182131393">(218) 213-1393</a>
          </div>

          <div className="contact-row">
            <FaEnvelope className="icon" />
            <div className="email-group">
              <a href="mailto:rjlyle00@gmail.com">rjlyle00@gmail.com</a>
              <a href="mailto:richard.j.lyle4.mil@army.mil">richard.j.lyle4.mil@army.mil</a>
            </div>
          </div>

          <div className="contact-row">
            <FaBirthdayCake className="icon" />
            <span>08/21/2000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
