import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="header-left">
              {/* <p><a href="#link">Get the most advanced template <FiChevronRight /></a></p> */}
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            <div className="header-right">
              <div className="address-content">
                <p>
                  <FiMapPin />
                  <span>Kathmandu, NEPAL</span>
                </p>
                <p>
                  <FiPhone />
                  <span>
                    <a href="#">+977 9860479694</a>
                  </span>
                </p>
              </div>
              <div className="social-icon-wrapper">
                <ul className="social-icon social-default icon-naked">
                  <li>
                    <Link to="https://www.facebook.com/resofttech">
                      <FiFacebook />
                    </Link>
                  </li>
                  {/* <li><Link to="twitter.com"><FiTwitter /></Link></li> */}
                  <li>
                    <Link to="https://www.instagram.com/radiantelixir/">
                      <FiInstagram />
                    </Link>
                  </li>
                  {/* <li><Link to="linkdin.com"><FiLinkedin /></Link></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
