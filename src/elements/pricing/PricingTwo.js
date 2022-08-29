import React from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const PricingTwo = () => {
  return (
    <div className="row row--15">
      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-2">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">Inventory Management System</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="currency">Rs</span>
                  <span className="price">20,000</span>
                </div>
                <span className="subtitle">Starting from</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> Billing System
                </li>
                <li>
                  <FiCheck /> Product Management
                </li>
                <li>
                  <FiCheck /> Accounting System
                </li>
                <li>
                  <FiCheck /> Integrated SMS
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a
                href="/contact"
                className="btn-default"
                onClick={() =>
                  localStorage.setItem("subject", "Inventory Management System")
                }
              >
                Inquire Now{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-2 active">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">School Management System</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="currency">Rs</span>
                  <span className="price">100</span>
                </div>
                <span className="subtitle">Per Student</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> Website
                </li>
                <li>
                  <FiCheck /> Student Management
                </li>
                <li>
                  <FiCheck /> Accounting System
                </li>
                <li>
                  <FiCheck /> Grade Sheets
                </li>
                <li>
                  <FiCheck />
                  Integrated SMS
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a
                href="/contact"
                className="btn-default"
                onClick={() =>
                  localStorage.setItem("subject", "School Management System")
                }
              >
                Inquire Now{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-2">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">Fleet Management</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="currency">Rs</span>
                  <span className="price">5,000</span>
                </div>
                <span className="subtitle">Per Vehicle</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck />
                  RealTime Vehicle Tracking
                </li>
                <li>
                  <FiCheck /> Fuel Monitoring
                </li>
                <li>
                  <FiCheck /> Engine On/Off
                </li>
                <li>
                  <FiCheck /> Alarm System
                </li>
                <li>
                  <FiCheck /> Door Triggers
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <Link to="/contact"
                className="btn-default"
                onClick={() =>
                  localStorage.setItem("subject", "Fleet Management")
                }
              >
                Inquire Now{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}
    </div>
  );
};
export default PricingTwo;
