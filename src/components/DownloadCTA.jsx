import "./DownloadCTA.css";
import phone2 from "../assets/konnect-app.png";

const DownloadCTA = () => {
  return (
    <section className="download-cta">
      <div className="cta-content">
        <h2>Download Konnect App</h2>
        <p>
          Get started with Konnect by downloading our app today! Whether you're looking to book a ride, send a parcel, or register as a driver, our app offers all the features you need.<br />
          For Android Users: Head over to the Google Play Store and search for "Konnect" or click  <a href="https://play.google.com/store/apps/details?id=konnect" target="_blank" rel="noopener noreferrer"> 
           here
          </a>
           to download the app directly.<br />
          For iOS Users: Visit the Apple App Store and search for "Konnect " or click  
          <a href="https://apps.apple.com/us/app/konnect/id1548234567" target="_blank" rel="noopener noreferrer">
           here
          </a>
          to download the app instantly.<br />
          Download now and experience seamless transportation with Konnect Ride!
        </p>

      </div>

      <div className="cta-image">
        <img src={phone2} alt="Centered phone screenshot" className="phone-main" />
      </div>
    </section>
  );
};

export default DownloadCTA;
