import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // make sure this file exists and returns JSX
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import WorkExperience from './components/WorkExperience';

function App() {
  useEffect(() => {
    const updateCursorPosition = (e) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <Router>
      {/* 🔦 Torchlight Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none torchlight-layer" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}


export default App;
