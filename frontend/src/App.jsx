import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage';
import About from './components/about';
import { Services } from './components/services';
import Contactus from './components/contactus';

function App() {
  return (
    <Router>
      <div className='app-background'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
