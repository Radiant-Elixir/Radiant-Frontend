import React from "react";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const ContactOne = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Phone Number</h4>
                    <p>
                      <a href="tel:+977 9860479694">+977 9860479694</a>
                    </p>
                    <p>
                      <a href="tel:+222 222 222 333">+977 9841343191</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p>
                      <a href="mailto:contact@resofttech.com">
                        contact@resofttech.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:sales@resofttech.com">
                        sales@resofttech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      Pepsicola, Kathmandu-32 <br /> Bagmati, Nepal 44600
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt--40 row--15">
        <div className="col-lg-7">
          <ContactForm formStyle="contact-form-1" />
        </div>
        <div className="col-lg-5 mt_md--30 mt_sm--30">
          {/* <GoogleMapStyle /> */}
          <div className="thumbnail">
            <img
              className="w-100"
              src="./images/contact/contact.png"
              alt="Contact Images"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactOne;
