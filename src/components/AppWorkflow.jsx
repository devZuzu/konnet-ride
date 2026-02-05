import "./AppWorkflow.css";
import phone1 from "../assets/app-workflow.png";
import Message from "../assets/envelope-icon.png";
import Car from "../assets/car-icon.png";
import Upload from "../assets/upload-icon.png";

const AppWorkflow = () => {
  return (
    <section className="workflow">
      <h2>App Workflow</h2>

      <div className="workflow-tabs">
        <button className="tab">Passenger</button>
        <button className="tab active">Driver</button>
      </div>

      <div className="workflow-content">
        {/* LEFT: PHONES */}
        <div className="workflow-phones">
          <img src={phone1} alt="Call screen" className="phone front" />
          
        </div>

        {/* RIGHT: STEPS */}
        <div className="workflow-steps">
          <div className="step">
            <div className="icon">
                <img src={Message} alt="Message" className="step-icon-img" />
            </div>
            <h4>Receive a offer</h4>
            <p>You specify our details, Simply input your information, and specify user type</p>
          </div>

          <div className="step">
            <div className="icon"> 
                <img src={Upload} alt="Upload screen" className="step-icon-img" />
            </div>
            <h4>Upload trip</h4>
            <p>Input your trip details and price, receive offer</p>
          </div>

          <div className="step">
            <div className="icon">
                <img src={Car}  alt="Map screen" className="step-icon-img" />
            </div>
            <h4>Start trip</h4>
            <p>Accept offers from passengers and begin your <br /> journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWorkflow;
