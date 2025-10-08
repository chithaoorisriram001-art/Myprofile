import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="info-box">
        <h1>👋 Hi, I'm <span className="highlight">Sriram</span></h1>
        <h2>React Developer & Freelancer</h2>
        <p className="contact">Crafting clean, modern, and responsive web applications.
           <br /> 🚀 Turning ideas into powerful digital experiences.</p>

        <div className="contact">
          📞 <span>+91 8712412307</span> <br />
          📧 <a href="mailto:yourname@gmail.com">chithanoori.sriram001@gmail.com</a>
        </div>

        <div className="links">
          <a href="https://github.com/chithaoorisriram001-art" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/chithanoori-sriram-461251389" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default App;
