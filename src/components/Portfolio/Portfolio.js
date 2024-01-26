import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { portfolioData } from "../../data/portfolioData";

export default class Portfolio extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container fluid={true} className="Portfolio">
          <Row>
            <Col lg={12}>
              <div className="CommonTitle text-center">
                <p>Work I Have Done</p>
                <h6>My Portfolio</h6>
              </div>
            </Col>
          </Row>
          <Container>
            <Slider {...settings}>
              {portfolioData?.map((item) => (
                <div key={item?.id}>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={item?.img} />
                        <div className="Overlay">
                          <h6>{item?.title}</h6>
                          <a href={item?.websiteLink} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </Slider>
          </Container>
          <div className="BannerClipSvg5">
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
              <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
            </svg>
          </div>
        </Container>
      </Fragment>
    );
  }
}
