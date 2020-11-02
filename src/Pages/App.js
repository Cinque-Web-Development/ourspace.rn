import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  );
}