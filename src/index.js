import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className="bg-black">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
  </main>
);