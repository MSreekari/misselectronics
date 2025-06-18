import React from 'react'
import Navbar from './navbar';
import Hero from './hero';
import Follow from './follow';
import About from './about';
import { Services } from './services';

const LandingPage = () => {
  return (
    <div className='app-background'>
      <Navbar />
      <Hero />
      <Follow />
      <About />
      <Services />
    </div>
  )
}

export default LandingPage