import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import Footer from './components/Footer.tsx';
import Biography from './pages/Biography.tsx';
import Interests from './pages/Interests.tsx';
import Contact from './pages/Contact.tsx';
import Resume from './pages/Resume.tsx';
import Gallery from './pages/Gallery.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="layout-wrapper">
        <Header />
        <div className="layout-body">
          <Sidebar />
          <div className="layout-main">
            <Routes>
              <Route path="/biography" element={<Biography />} />
              <Route path="/interests" element={<Interests />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;