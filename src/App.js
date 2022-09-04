import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Experience from './pages/Experience';
import Projects from './pages/Projects';




function App() {

  return (
    <div>
      <main className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;