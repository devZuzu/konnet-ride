import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AppWorkflow from '../components/AppWorkflow';
import DownloadCTA from '../components/DownloadCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <AppWorkflow />
      <DownloadCTA />
      <Footer />
      
    </>
  )
}

export default Home
