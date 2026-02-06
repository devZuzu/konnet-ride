import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./legal.css";

const Privacy = () => {
  return (
    <>
        <Navbar />
          <section className="legal-page">
            <div className="terms-container">
            <h3> Cancellation Policy</h3>

            <h4>Free Cancellation Window:</h4>
            <p>
              Passengers can cancel a ride for free within 10 minutes of booking if the ride is scheduled to start in more than 1 hour.
              For rides scheduled to start within the next hour, free cancellation is allowed within 5 minutes of booking.
            </p>
            <h4>Cancellation Fees:</h4>
            <p>
              If a passenger cancels a ride after the free cancellation window but more than 30 minutes before the scheduled start time, a fee of 10% of the ride fare will be charged.
              Cancelling a ride within 30 minutes of the scheduled start time will incur a fee of 50% of the ride fare.
            </p>
            <h4>No-Show Policy:</h4>
            <p>
              If a passenger does not show up within 10 minutes of the scheduled pick-up time, the ride will be marked as a no-show and 100% of the ride fare will be charged.
            </p>

            <h3>App Policy </h3>

            <p>
              Welcome to Konnect Ride! We are committed to providing a safe, reliable, and enjoyable transportation experience for all users. This policy outlines the terms and conditions for using the Konnect Ride app, including user responsibilities, prohibited activities, and our commitments to you.
            </p>  
            <h3>User Responsibilities </h3>

            <h4> 1. Account Creation:</h4>
              <p>
                - Users must provide accurate and up-to-date information during registration.
                - Only one account per user is allowed. Duplicate accounts will be deactivated.
              </p>

           <h4> 2. Profile Maintenance:</h4>
             <p>
               - Users must keep their profiles current, including contact information and payment details.
               - Profile pictures and descriptions must be appropriate and non-offensive.
              </p>

           <h4> 3. Compliance with Laws:</h4>
              <p>
                - All users must comply with local, state, and federal laws while using the Konnect Ride app.
                - Drivers must possess a valid driver’s license, vehicle registration, and insurance.
              </p>  

           <h4> 4. Respectful Conduct:</h4>
              <p>
                - Users must treat each other with respect and courtesy.
                - Harassment, discrimination, and abusive behavior will not be tolerated.
              </p>  

           <h4> 5. Use of the App:</h4>
              <p>
                - The app must be used solely for its intended purpose.
               - Users must not engage in fraudulent activities, such as booking fake rides or providing false information.
              </p>

            <h3>Prohibited Activities </h3>

            <h4>1. Illegal Activities:</h4>
              <p>
                - Any illegal activities, including drug use, trafficking, and carrying prohibited items, are strictly forbidden.
              </p>  

           <h4> 2. Impersonation and Misrepresentation:</h4>
              <p>
                - Users must not impersonate others or provide misleading information.
              </p>

           <h4> 3. Damage to Property:</h4>
              <p>
                - Users must not damage or vandalize vehicles or property. 
               - Any damages caused by a user will be their responsibility.
              </p> 

           <h4> 4. Safety Violations:</h4>
              <p>
                - Drivers must adhere to all traffic laws and ensure passenger safety.
                - Passengers must wear seatbelts and follow the driver’s safety instructions.
              </p>  

            <h4>5. Inappropriate Content:</h4>
              <p>
                - Users must not share or upload inappropriate, offensive, or explicit content through the app.
              </p>  

            <h3>Our Commitments</h3>

            <h4>1. Data Privacy:</h4>
              <p>
                - We are committed to protecting your personal information.
                - User data will only be used as outlined in our Privacy Policy.
              </p>  

            <h4>2. Safety Measures:</h4>
              <p>
                - We conduct background checks on drivers to ensure safety.
                - Emergency features, such as an SOS button, are available for users.
              </p>  

            <h4>3. Customer Support:</h4>
              <p>
                - Our support team is available 24/7 to assist with any issues or concerns.
                - Users can contact support through the app or via email.
              </p>  

            <h4>4. Continuous Improvement:</h4>
              <p>
                - We are dedicated to improving our services based on user feedback.
                - Regular updates will be made to enhance functionality and user experience.
              </p>  

            <h3>Payment and Fees</h3>

            <h4>1. Payment Processing:</h4>
              <p>
                - Secure payment methods are available, including credit/debit cards and in-app wallets.
                - Payments are processed at the end of each trip or rental period.
              </p>  

            <h4>2. Cancellation Fees:</h4>
             <p>
               - Cancellation fees may apply as outlined in our Cancellation Policy.
               - Users will be notified of any applicable fees before confirming a cancellation.
              </p> 

            <h4>3. Disputes and Refunds:</h4>
              <p>
                - Users can dispute charges or request refunds through the support section of the app.
                - Refund requests will be reviewed and processed within 7 business days.
              </p> 

            <h3>Termination and Suspension</h3>

            <h4>1. Termination by User:</h4>
              <p>
                - Users can deactivate their accounts at any time through the app settings.
                - Deactivation will result in the loss of all account data and history.
              </p>  

            <h4>2. Termination by Konnect Ride:</h4>
             <p>
               - We reserve the right to suspend or terminate accounts that violate our policies.
               - Users will be notified of any violations and given an opportunity to respond.
              </p> 

            <h4>3. Reactivation:</h4>
             <p>
               - Suspended accounts may be reactivated upon review and resolution of the issue.
               - Users must contact support to initiate the reactivation process.
              </p>

           <h3> Changes to the Policy </h3>

            <p>
              Konnect Ride reserves the right to modify this policy at any time. Significant changes will be communicated to users via email and in-app notifications. Continued use of the app after any changes indicates acceptance of the updated policy.
            </p>

            <p>
              By using the Konnect Ride app, you agree to adhere to this policy and contribute to a safe and respectful community. Thank you for choosing Konnect Ride!
            </p> 
           </div>  
          </section>
        <Footer />
    </>
  )
}

export default Privacy