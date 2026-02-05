import "./Footer.css";
import KonnectFooter from "../assets/Konnect-footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Logo & Description */}
        <div className="footer-left">
          <h3>
            <img src={KonnectFooter} alt="Konnect Logo" className="footer-logo" />
          </h3>
          <p classname="konnect">
            Konnect Ride is a cutting-edge mobile app designed to revolutionize the way you travel and send parcels. Whether you're commuting to work, heading out for a night on the town, or need to send a package across the city, Konnect Ride offers a reliable, convenient, and affordable solution at your fingertips.
          </p>
        </div>

        {/* Center: Links */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#workflow">Privacy policy</a></li>
            <li><a href="#download">Terms and condition</a></li>
          </ul>
        </div>

        {/* Right: Contact & Social */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>4140 parker Rd, Allentown, Nigeria 31134</p>
          <p>(252) 555-0126</p>
          <p>contact@example.com</p>

          <div className="social-icons">
            <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Konnect (c) 2024. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
