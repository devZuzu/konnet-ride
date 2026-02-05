import React from 'react'
import "./HowItWorks.css";
import HowItWork from "../assets/how-it-work.png"

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How it works</h2>

      <div className="steps">
        <img src={HowItWork} alt="How Konnect Ride Works" />
      </div>

      
    </section>
  );
};

export default HowItWorks;