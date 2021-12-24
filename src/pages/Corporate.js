import React from "react";
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import HeaderTopBar from "../common/header/HeaderTopBar";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import ServiceTwo from "../elements/service/ServiceTwo";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import AboutTwo from "../elements/about/AboutTwo";
import CounterUpTwo from "../elements/counterup/CounterUpTwo";

import Separator from "../elements/separator/Separator";
import TeamFour from "../elements/team/TeamFour";
import PricingTwo from "../elements/pricing/PricingTwo";
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import bg from "../assets/images/bg.png";
import TeamOne from "../elements/team/TeamOne";
import TimelineTwo from "../elements/timeline/TimelineTwo";
const Corporate = () => {
  return (
    <>
      <SEO title="Radiant Elixir Softtech" />
      <main className="page-wrapper">
        <div className="header-transparent-with-topbar">
          <HeaderTopBar />
          <HeaderOne
            btnStyle="btn-small btn-icon"
            HeaderSTyle="header-not-transparent"
          />
        </div>

        {/* Start Slider area  */}
        <div
          className="slider-area slider-style-2 height-950 bg_image"
          data-black-overlay="2"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-left">
                  <h4 className="subtitle">
                    <span className="theme-gradient">YOU GOT AN IDEA?</span>
                  </h4>
                  <h2 className="title display-one">
                    Allow us to streamline your IT needs.
                  </h2>
                  <ul className="list-icon">
                    <li>
                      <span className="icon">
                        <FiCheck />
                      </span>{" "}
                      We plan; pursue creative and innovative technological
                      strategies.
                    </li>
                  </ul>
                  {/* <div className="button-group mt--40 mt_sm--20">
                    <button
                      className="btn-default btn-icon"
                      target="_blank"
                      href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                    >
                      Purchase Now{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider area  */}

        {/* Start Service Area  */}
        <div className="rn-service-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="What we can do for you"
                  title="Services provide for you."
                  description=""
                />
              </div>
            </div>
            <ServiceTwo cardStyle="card-style-1" textAlign="text-left" />
          </div>
        </div>
        {/* End Service Area  */}

        <Separator />

        <AboutTwo />

        <Separator />
        <div className="rwt-timeline-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Timeline"
                  title="Working Process."
                  description="We help our clients succeed by creating brand identities and digital experiences."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 mt--50">
                <TimelineTwo classVar="dark-line" />
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-counterup-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Company's Summary"
                  title="Global Clients Around the World."
                  description=""
                />
              </div>
            </div>
            <CounterUpTwo
              column="col-lg-4 col-md-6 col-sm-6 col-12"
              counterStyle="counter-style-2"
              textALign="text-center"
            />
          </div>
        </div>
        {/* End Elements Area  */}

        {/* Start Elements Area  
        <Separator />
        <div className="rwt-team-area rn-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Our Experts."
                  title="Our Expert Team."
                  description=""
                />
              </div>
            </div>
            <TeamOne
              column="col-lg-4 col-md-6 col-12 mt--30"
              teamStyle="team-style-default"
            />
          </div>
        </div> */}
        {/* End Elements Area  */}

        <Separator />
        {/* Start Elements Area  */}
        <div className="rwt-pricing-area rn-section-gap">
          <div className="container">
            <div className="row mb--35">
              <div className="col-lg-12">
                <SectionTitle
                  textAlign="text-center"
                  radiusRounded=""
                  subtitle="Pricing"
                  title="Software Package Pricing"
                  description=""
                />
              </div>
            </div>
            <PricingTwo />
          </div>
        </div>
        {/* End Elements Area  */}

        {/* Start Call To Action Area  */}
        <div className="rwt-callto-action-area rn-section-gapBottom">
          <div className="wrapper">
            <CalltoActionFive />
          </div>
        </div>
        {/* End Call To Action Area  */}

        <FooterOne />
        <Copyright />
      </main>
    </>
  );
};

export default Corporate;
