import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const callToActionData = {
  title: "Ready to start going online?",
  subtitle: "Finest choice for your business",
  btnText: "Contact Us",
};

const CalltoActionFive = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h2 className="title">{callToActionData.title}</h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <h6 className="subtitle">{callToActionData.subtitle}</h6>
                </ScrollAnimation>

                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                >
                  <div className="call-to-btn text-center">
                    <Link
                      to="/contact"
                      className="btn-default"
                      onClick={() =>
                        localStorage.setItem(
                          "subject",
                          "Re: Starting your business."
                        )
                      }
                    >
                      Inquire Now {callToActionData.btnText}{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionFive;
