import React from 'react'
import Navbar from './navbar';
import Hero from './hero';
import Follow from './follow';
import About from './about';
import { Services } from './services';
import Contactus from './contactus';
import Footer from './footer';
import Opportunities from './opportunities';

const LandingPage = () => {
  return (
    <div className='app-background'>
      <Navbar />
      <Hero />
      <Follow />
      <About />
      <Services />
      <Opportunities />
      <Contactus />
      <Footer />
    </div>
  )
}

export default LandingPage