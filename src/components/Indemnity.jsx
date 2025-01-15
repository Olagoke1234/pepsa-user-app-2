import React from "react";
import { useNavigate } from "react-router-dom";
import "../componentsCSS/Indemnity.css";

function Indemnity() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="outermost-div">
        <div className="caption">
          <h1>Indemnity and Electronic Signature Consent Agreement</h1>
        </div>
        <div className="container">
          <div className="content">
            <h2>Effective Date: 1st December, 2024</h2>
            <p>
              1. Definition and Scope <br />
              a. Pepsa Solutions Limited, its groups, and subsidiaries
              (collectively, “Pepsa,” “we,” “us,” or “our”) are committed to
              protecting your privacy. This Privacy Policy (“Policy”) explains
              how we collect, use, disclose and protect Personal Information (as
              it is defined below) of those that engage with our Services, as
              defined below, (“Customers”) and stores, restaurants and/or other
              businesses utilizing Pepsa (“Merchants”). It applies to all
              Personal Information collected by us on www.pepsa.co (the “Site”),
              the Pepsa Marketplace and e-Store mobile applications, and any
              other websites or mobile applications that link to this Policy, as
              well as during any written, electronic, and oral communications
              (collectively, the “Services”). Pepsa may collect Personal
              Information to help you place and receive orders and to improve
              the Pepsa service. <br />
              b. If you are a Pepsa Customer, your access to and use of our
              Services are subject to our Terms and Conditions, which define
              some of the terms used throughout this Policy. Please make sure
              that you have carefully read and understand the Terms and
              Conditions before you use our Services. By using our Services, you
              accept the Terms and Conditions, and accept our privacy practices
              described in this Policy. If you do not feel comfortable with any
              part of this Policy or our Terms and Conditions, you must not use
              or access our Services.
              <br /> c. If you are a Pepsa Merchant, your access to and use of
              our Services are subject to the Merchant Terms of Service or other
              services agreement entered between you and Pepsa. <br />
              d. Pepsa uses a network of independent third-party contractors
              (“Dispatchers”) to provide delivery services to Merchants and
              Customers. Dispatchers should refer to the Contractor Agreement or
              information on how Pepsa collects and uses Dispatcher’ Personal
              Information. <br />
              e. Our Services may change from time to time. As a result, we
              reserve the right to update or modify this Policy at any time and
              from time to time without prior notice. If we make any material
              changes to the way we process your Personal Information, we will
              notify you before such changes are effective. If you object to any
              changes, you must cease using our Services. We recommend you
              review this Policy periodically. This Policy became effective on
              the date indicated at the top of this page. Your continued use of
              our Services after any changes or revisions to this Policy
              indicates your agreement to the terms of the revised Policy.{" "}
              <br />
              <br />
              1.      Collection of Personal Information When you use our
              Services, we may collect Personal Information about you. The types
              of Personal Information that we may collect about you are: <br />
              a.       Information You Provide to Us Directly You may provide
              your Personal Information to us when you use our Services,
              including when you register with Pepsa, search within or place
              orders through our Services, contact us with inquiries, use our
              Messaging on the Site or Services, respond to surveys, or
              otherwise access or use our Services. This information may
              include: <br /> Personal Identifiers and records information – We
              may collect information such as name, alias, email address, home
              address or delivery address, business address, account name, phone
              number, <br />
              .Biometric Verification Number, signature, or other similar
              identifiers.  
              <br /> .Characteristics of protected classifications under the law
              of the Federal Republic of Nigeria – We may collect your age, year
              or date of birth to enable us to determine if you are eligible to
              make some purchases. <br />
              Biometric information – We may collect face photo, identity
              document, facial recognition, voice, or other biometric data. Any
              biometric information will be permanently deleted from the system
              after it is no longer necessary.
              <br /> .Commercial Information – When you place an order through
              our Services, we collect information related to that order. This
              may include information such as <br />
              .Commercial Information - When you place an order through our
              Services, we collect information related to that order. This may
              include information such as
            </p>
          </div>
          <div className="documentation-footer">
            <div className="agreement">
              <input type="checkbox" className="checkbox" />{" "}
              <p>
                By clicking next you consent to have read and agree to the Terms
                and Conditions of operation{" "}
              </p>
            </div>
            <div className="documentation-btn">
              <input
                type="button"
                value={"Continue"}
                className="btn"
                onClick={handleGetStartedClick}
                name="checkbox"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Indemnity;
