import React from 'react';
import './about.css';
import Navbar from './navbar';
import { Lightbulb, Cable, CirclePower, CloudCheck } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import videoFile from '../assets/AboutUs.mp4';

const About = () => {
  return (
    <div id="about-section">
      <p className="heading">About Us</p>
      <motion.main
        className="main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <video
          className="video"
          width="320"
          height="180"
          controls
          autoPlay
          muted
          loop
          playsInline
          style={{ pointerEvents: 'none' }}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="right-section">
          <div className="main-heading">
            <p>We extend our services</p>
            <p className="sub-heading">
              to the <span>wide</span> variety
            </p>
          </div>

          <div className="main-content">
            <div>Innovative <span className="icon"><Lightbulb /></span></div>
            <div>Connected <span className="icon"><Cable /></span></div>
            <div>Effortless <span className="icon"><CirclePower /></span></div>
            <div>Secure <span className="icon"><CloudCheck /></span></div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default About;
