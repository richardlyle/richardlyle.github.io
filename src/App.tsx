import React from 'react';
import Header from './Components/Header.tsx';
import Footer from './Components/Footer.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="home">
        <h1>Welcome to Richard Lyle's Portfolio</h1>
        <p>Army Signal Officer, West Point Graduate, Hockey Player, and Web Developer.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;