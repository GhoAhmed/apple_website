import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
  </main>
);