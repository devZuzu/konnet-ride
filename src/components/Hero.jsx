import React from 'react';
import "./Hero.css";
import googleplay from "../assets/google-play.png";
import appstore from "../assets/app-store.png";
import phoneMockUp from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-left">
            <h1>
                Download app,<br /> Book ride, <br /> Konnect<br /> with passengers.
            </h1>
            <p>
                Download Konnect app from Playstore, create <br />account, connect with passengers,<br /> konnect with drivers.
            </p>

            <div className="hero-buttons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={googleplay} alt="Google Play Store" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={appstore} alt="Apple App Store" />
                    </a>
            </div>

        </div>

        <div className="hero-right"> 
            <img src={phoneMockUp} alt="Phone Mockup" />
        </div>
    </section>
  )
}

export default Hero