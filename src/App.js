import Header from './Header';
import Nav from './nav';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Little Lemon</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Welcome to Little Lemon</h2>
        <p>Best Mediterranean food in town!</p>
      </main>

      <footer>
        <p>&copy; 2025 Little Lemon</p>
      </footer>
    </>
  );
}

export default App;


