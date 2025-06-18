import React from 'react'
import Navbar from './navbar'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Services.css'

export const Services = () => {
  return (
    <div className='services-container'>
        <p className="title">Our Services</p>
        <p className="subtitle">Explore our innovative tech solutions designed to make life smarter, easier, and more efficient.</p>
        <motion.main
        className="services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className='grid-container'>
          <div className='card card1'>
            <img src='src/assets/card1.png'></img>
            <h2>Smart Garden Automation</h2>
            <p>Monitor and water your garden automatically with intelligent, eco-friendly control systems.</p>
            <button>Book Now</button>
          </div>
          <div className='card card2'>
            <img src='src/assets/card2.png'></img>
            <h2>Smart Attendance System</h2>
            <p>Track attendance seamlessly using facial recognition and real-time data logging.</p>
            <button>Book Now</button>
          </div>
          <div className='card card3'>
            <img src='src/assets/card3.png'></img>
            <h2>Smart Home Automation</h2>
            <p>Control your lights, appliances, and security with a single smart interface.</p>
            <button>Book Now</button>
          </div>
          <div className='card card4'>
            <img src='src/assets/card4.png'></img>
            <h2>Technical Support</h2>
            <p>Get prompt, reliable tech assistance to keep your smart systems running smoothly.</p>
            <button>Book Now</button>
          </div>
        </div>
        </motion.main>
    </div>
  )
}
