import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    image: "/images/service/serviice-02.jpg",
    title: "Software Development",
    description:
      "Custom software development is a way to get a competitive advantage in the market due to the superior functionality a custom solution provides.",
  },
  {
    image: "/images/service/serviice-03.jpg",
    title: "Design & Creative",
    description:
      "Presenting design to clients will be strictly based on solid research and be justified from the client's perspective will be mutually and professionally undertaken.",
  },
  {
    image: "/images/service/serviice-04.jpg",
    title: "App Development",
    description:
      "Mobile web apps are a necessity in both technical and commercial fields. We aim to provide strategic analysis when building a mobile application.",
  },
  {
    image: "/images/service/icon-01.png",
    title: "Cloud and DevOps",
    description:
      "They improve our application availability, scalability, and performance. We believe in presenting a significantly broader perspective in delivering software solutions.",
  },
  ,
  {
    image: "/images/service/icon-02.png",
    title: "Product Design",
    description:
      "We assume that good design attracts consumers to a product, communicates to them, and adds product value by increasing the quality of the user experiences associated with it.",
  },
  {
    image: "/images/service/icon-03.png",
    title: "Machine Learning",
    description:
      "Our key offering is in the spaces of NLP, Text Engineering, Machine Learning, Deep Learning, Big Data Storage and Processing systems.",
  },
];
const ServiceTwo = ({ textAlign, cardStyle }) => {
  return (
    <div className="row row--15 service-wrapper">
      {ServiceList.map((val, i) => (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
          >
            <div className={`card-box ${cardStyle} ${textAlign}`}>
              <div className="inner">
                <div className="image">
                  <Link to="">
                    <img src={`${val.image}`} alt="card Images" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title mb--20">
                    <Link
                      to=""
                      dangerouslySetInnerHTML={{ __html: val.title }}
                    ></Link>
                  </h4>
                  <p
                    className="description b1 color-gray mb--0"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                  {/* <Link className="btn-default btn-small btn-border" to="#service">Read More</Link> */}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};
export default ServiceTwo;
