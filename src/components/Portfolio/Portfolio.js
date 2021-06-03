import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Gym from '../../asset/images/gym-website.png';
import DomainHosting from '../../asset/images/domain-hosting-website.png';
import Admin from '../../asset/images/admin-dashboard.png';
import Business from '../../asset/images/business-website.png';
import Business2 from '../../asset/images/business-website-two.png';
import Corona from '../../asset/images/corona-website.png';
import ExportImport from '../../asset/images/export-import-website.png';
import JobRecruting from '../../asset/images/job-recruting-and-posting-website.png';
import Portfolio2 from '../../asset/images/personal-portfolio.png';
import Portfolio3 from '../../asset/images/personal-portfolio-two.png';
import PrintingPress from '../../asset/images/printing-press-website.png';
import ScientificJournal from '../../asset/images/scientific-journal.png';
import Serpwizz from '../../asset/images/serpwizz-website.png';
import WomanEmpwerment from '../../asset/images/woman-empowerment-website.png';
import Business3 from '../../asset/images/patricia-website.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Gym}/>
                        <div className="Overlay">
                          <h6>Gym Website</h6>
                          <a href="https://utshaweu.github.io/Refuel_Fitness_and_Gym_Theme/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={DomainHosting}/>
                        <div className="Overlay">
                          <h6>Domain Hosting Website</h6>
                          <a href="https://utshaweu.github.io/task/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Business}/>
                        <div className="Overlay">
                          <h6>Business Website</h6>
                          <a href="https://utshaweu.github.io/Diiso_African_Website/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Business2}/>
                        <div className="Overlay">
                          <h6>Business Website</h6>
                          <a href="https://utshaweu.github.io/Tessomo_Technologies_Website/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Corona}/>
                        <div className="Overlay">
                          <h6>Corona Website</h6>
                          <a href="https://utshaweu.github.io/Corona_Html_Web_Template/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={ExportImport}/>
                        <div className="Overlay">
                          <h6>Enterprise Website</h6>
                          <a href="https://shebaenterprisesllc.netlify.app/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={JobRecruting}/>
                        <div className="Overlay">
                          <h6>Job Recruting Website</h6>
                          <a href="https://utshaweu.github.io/Job_Recruiting_And_Posting_Site/index.html" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Portfolio2}/>
                        <div className="Overlay">
                          <h6>Personal Portfolio Website</h6>
                          <a href="https://utshaweu.github.io/Overfolio/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Portfolio3}/>
                        <div className="Overlay">
                          <h6>Personal Portfolio Website</h6>
                          <a href="https://utshaweu.github.io/On-Call-Medico-Assessment-Task/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={PrintingPress}/>
                        <div className="Overlay">
                          <h6>Printing and Press Website</h6>
                          <a href="https://nkprintingandpress.netlify.app/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={ScientificJournal}/>
                        <div className="Overlay">
                          <h6>Scientific Journal Website</h6>
                          <a href="https://wjbb.netlify.app/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Serpwizz}/>
                        <div className="Overlay">
                          <h6>Business Website</h6>
                          <a href="https://serpwizz.netlify.app/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={WomanEmpwerment}/>
                        <div className="Overlay">
                          <h6>Woman Empowerment Website</h6>
                          <a href="https://utshaweu.github.io/Women_Empowerment_Site/#" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Admin}/>
                        <div className="Overlay">
                          <h6>Admin Dashboard</h6>
                          <a href="https://utshaweu.github.io/Admin_Dashboard/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg={12}>
                      <div className="PortfolioItem">
                        <Image src={Business3}/>
                        <div className="Overlay">
                          <h6>Business Website</h6>
                          <a href="https://utshaweu.github.io/Patricia_Webber_Website/" target="_blank">
                            <FontAwesomeIcon icon={faLink} />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>


              </Slider>
            </Container>
            <div className="BannerClipSvg5">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
          </div>
        </Container>
      </Fragment>
    )
  }
}
