import React from "react";
import { useLocation } from "react-router-dom";

const Copyright = () => {
  const location = useLocation();
  if (location?.pathname) {
    if (!location?.pathname?.split("/").includes("contact")) {
      localStorage.removeItem("subject");
    }
  }
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                {/* <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms And Condition</a></li>
                                <li><a href="/contact">Contact Us</a></li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-md-right">
              <p className="copyright-text">
                © Radiant Elixir Sofftech {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
