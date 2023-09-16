import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flinders CySoc CTF Platform</h1>
        <p>Welcome to the Capture The Flag challenge!</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>CySoc CTF Platform is your gateway to exciting cybersecurity challenges. Join us on a journey of discovery and skill-building in the world of cybersecurity.</p>
        </section>
        <section>
          <h2>Upcoming Challenges</h2>
          <ul>
            <li>Web Exploitation</li>
            <li>Binary Analysis</li>
            <li>Crypto Challenges</li>
            <li>Reverse Engineering</li>
          </ul>
        </section>
        <section>
          <h2>Join the Challenge</h2>
          <p>Are you ready to test your cybersecurity skills? Join our upcoming challenges and unlock the hidden secrets of the digital world.</p>
        </section>
      </main>
      {/* Hidden flag in the source code */}
      <footer>
        <p>Can you uncover hidden secrets?</p>
      </footer>
    </div>
  );
}

export default App;
