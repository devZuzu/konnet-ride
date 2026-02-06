import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Legal.css";


const Terms = () => {
  return (
    <>
        <Navbar />

        <section className="legal-page">
          <div className="terms-container">

            <h4> Konnect  Terms and Conditions </h4>

            <p className="updated">Last Updated: [12/04/204]</p>

            <p>
              Welcome to Konnect Ride! By accessing or using the Konnect app, website, or services, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully. If you do not agree to these Terms, you may not use the Service.
            </p>

           <h4> 1. Acceptance of Term </h4>
            <p>
              By creating an account or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all users of the Service, including drivers, passengers, and parcel senders.
            </p>

            <h4>2. Eligibility</h4>
            <p>
              To use the Service, you must be at least 18 years old and legally capable of entering into a binding contract. By using the Service, you represent and warrant that you meet these requirements.
              </p>

            <h4>3. Account Registration</h4>
             <p>
               -Information Requirements: You must provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials.
               - Account Security You agree to notify Konnect  immediately of any unauthorized use of your account. Konnect  is not liable for any loss or damage arising from unauthorized use of your account.
              </p>

            <h4>4. User Responsibilities</h4>
              <p>
                - Conduct You agree to use the Service only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Service.
               - Third-Party Bookings If you book a ride or service on behalf of a third party, you are responsible for their actions and behavior during the service.
               </p>

            <h4>5. Driver and Vehicle Requirements</h4>
              <p>
                - Driver Obligations Drivers must hold a valid driver’s license, vehicle registration, and insurance. Drivers are responsible for maintaining their vehicles in a safe and roadworthy condition.
               - Vehicle Information**: Drivers must provide accurate vehicle details during registration and keep this information up to date.
               </p>

            <h4>6. Booking and Cancellation</h4>
             <p>
               - Ride Booking: Users can book rides through the app. All bookings are subject to driver availability and may be canceled by the driver or Konnect  for any reason.
               - Cancellation Policy: Cancellation fees may apply if a booking is canceled after a driver has been assigned. Details are provided in our Cancellation Policy.
              </p>

            <h4>7. Payments and Fees</h4>
              <p>
                - Payment Methods Konnect  accepts various payment methods, including credit/debit cards and in-app wallets. Payment is processed at the end of each trip or service.
               - Service Fees: Konnect may charge service fees for each transaction, which will be displayed before booking.
               - Refunds: Refunds are at the discretion of Konnect and will be processed according to our Refund Policy.
              </p> 

            <h4>8. Safety and Liability</h4>
             <p>
               - Safety Measures Konnect implements safety measures, including driver background checks and in-app emergency features. However, Konnect  does not guarantee the safety of the Service.
               - Liability: Konnect  is not liable for any direct, indirect, incidental, or consequential damages arising from the use of the Service, including but not limited to accidents, injuries, or loss of property.
              </p> 

            <h4>9. User Content</h4>
              <p>
                - Ownership: Users retain ownership of any content they submit, post, or display on or through the Service. However, by submitting content, you grant Konnect a worldwide, non-exclusive, royalty-free license to use, modify, distribute, and display such content.
               - Prohibited Content: Users must not post content that is offensive, defamatory, or violates any third-party rights.
              </p> 

            <h4>10. Intellectual Property</h4>
            <p>
              All intellectual property rights in the Service, including but not limited to software, text, graphics, logos, and trademarks, are owned by Konnect  or its licensors. You may not reproduce, modify, or distribute any content from the Service without express permission.
            </p>  

            <h4>11. Termination</h4>
             <p>
               - Termination by User: You may terminate your account at any time by following the instructions in the app. Termination will not relieve you of any obligations under these Terms that have accrued before termination.
               - Termination by Konnect :  Konnect reserves the right to suspend or terminate your account if you violate these Terms or for any other reason, at its sole discretion.
              </p> 

            <h4>12. Changes to the Terms</h4>
            <p>
              Konnect may update these Terms from time to time. Changes will be effective upon posting the revised Terms in the app or on our website. Continued use of the Service after such changes constitutes acceptance of the updated Terms.
            </p>  

            <h4>13. Dispute Resolution</h4>
             <p>
               - Governing Law These Terms are governed by and construed in accordance with the laws of [Jurisdiction].
               - Arbitration Any disputes arising out of or related to these Terms or the Service will be resolved through binding arbitration, as per the rules of the [Arbitration Organisation].
              </p> 

           <h4> 14. Miscellaneous </h4>
              <p>
                - Entire Agreement: These Terms, together with the Privacy Policy, constitute the entire agreement between you and Konnect .
               - Severability If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>

           <h4> Contact Information:</h4>

           <p>
             If you have any questions about these Terms, please contact us at <strong>[support@konnnectride.com](mailto:support@konnnectride.com). </strong>
            </p>
            ---

            <p>
              By using Konnect Ride, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>

          </div>
        </section>
        <Footer />
    </>
  );
};

export default Terms;
