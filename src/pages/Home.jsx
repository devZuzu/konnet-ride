import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AppWorkFlow from '../components/AppWorkFlow';
import DownloadCTA from '../components/DownloadCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <AppWorkFlow />
      <DownloadCTA />
      <Footer />
      
    </>
  )
}

export default Home
