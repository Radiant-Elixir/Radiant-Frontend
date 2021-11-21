import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const AboutTwo = () => {
  return (
    <div className="rwt-about-area about-style-2 rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="col-lg-5">
            <div className="thumbnail">
              <img
                className="w-100"
                src="./images/about/about-1.png"
                alt="About Images"
              />
            </div>
          </div>

          <div className="col-lg-7 mt_md--30 mt_sm--30">
            <div className="content">
              <div className="section-title">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">Get to know</span>
                  </h4>
                  <h2 className="title mt--10">About Us.</h2>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <p>
                    We officially established on 9th October 2018, named
                    ‘Radiant Elixir Softtech.’ It is an IT Company which
                    delivers you various IT-related information. We make
                    Websites such as School Management Software, Accounting
                    Software, and Inventory Management System according to your
                    demand and requirement. We also provide services on web-app
                    development, mobile app development, and Bulk SMS system. We
                    gorgeously design and analyze the entire project for the
                    clients. Our focus is to provide benefits to the customers.
                    Our team always filters and discusses every level of our
                    services provided. With our services, we ensure you offer
                    full support to simplify the use of technology.
                  </p>

                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      Complete Software Solutions
                    </li>
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      Elegant and Modern Designs
                    </li>

                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      24/7 support
                    </li>
                  </ul>
                </ScrollAnimation>
                {/* <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="read-more-btn mt--40">
                    <Link className="btn-default btn-icon" to="#">
                      More About Us{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
