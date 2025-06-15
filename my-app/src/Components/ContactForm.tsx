import React, { useState, FormEvent, ChangeEvent } from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Contact Me</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>Name:<input type="text" name="name" onChange={handleChange} required /></label>
            <label>Email:<input type="email" name="email" onChange={handleChange} required /></label>
            <label>Message:<textarea name="message" onChange={handleChange} required /></label>
            <button type="submit">Send</button>
          </form>
        ) : (
          <p>Thank you for your message!</p>
        )}
      </main>
      <Footer />
    </div>
  );
}; 
export default Contact;

