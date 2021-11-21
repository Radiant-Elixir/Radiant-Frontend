import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const Data = [
  {
    countNum: 100,
    countTitle: "Happy Clients.",
    description: "Well established and satisfied customers all over Nepal",
  },
  {
    countNum: 20,
    countTitle: "Employees",
    description: "Well experienced and happy emloyees there to deliver you.",
  },
  {
    countNum: 5,
    countTitle: "Softwares",
    description:
      "Ready to go Accounting, Billing, Inventory, Fleet Management and School Management Softwares",
  },
];
const CounterUpTwo = ({ textALign, counterStyle, column }) => {
  return (
    <div className="row">
      {Data.map((data, index) => (
        <div className={`${column}`} key={index}>
          <div className={`count-box ${counterStyle} ${textALign}`}>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div className="count-number">
                    {isVisible ? <CountUp end={data.countNum} /> : 0}
                  </div>
                )
              }
            </TrackVisibility>
            <h5 className="title">{data.countTitle}</h5>
            <p className="description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CounterUpTwo;
