import React, { Fragment , useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faLinkedinIn,faGithub,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'react-bootstrap/Image';
import AboutImage from '../../asset/images/About.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const About = () => {



  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if(inView){
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5, delay: .2
        }
      });
    }
    if(!inView){
      animation.start({
        opacity: 0
      });
    }
  },[inView]);



    return (
      <Fragment>
        <Container fluid={true} className="About">
          <Row>
            <Container>
              <Row className="justify-content-lg-center" ref={ref}>
                <Col lg={10}>
                <motion.div className="AboutContent"
                  animate={animation}
                >
                 <Row>
                  <Col lg={8} md={7}>
                      <h2>About Me</h2>
                      <p>I'm a hard working and dedicated professional front-end developer/user interface with a keen eye for detail and a determination to deliver the very highest quality. I take great pride in my work, and always try to better myself with every project I work on.</p>
                      <div className="SocialIcon">
                        <a href="https://www.facebook.com/sajibmahmud.utshaw/"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://www.linkedin.com/in/md-sajib-mahmud-utshaw-68b2241a4"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/utshaweu?fbclid=IwAR1xHagaAgpEBzjdJ-BKnasGU_AvuvXn-P-0iDO25JN7I0yK4LfqD0yqN58"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/utshaw_eu/?fbclid=IwAR3Qo4Ajh1Sq0pcXyjSCpbkVGQt4Eoviy2CoiqnCBEziV4BC8SIAUuHstgA"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="tel:+8801674070166"><FontAwesomeIcon icon={faWhatsapp} /></a>
                      </div>
                    </Col>
                    <Col lg={4} md={5}>
                      <div className="AboutImg">
                        <div className="Border">
                        <Image src={AboutImage} className="w-100"/>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              </Col>
              </Row>
            </Container>
          </Row>
          <div className="BannerClipSvg2">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
          </div>
        </Container>
      </Fragment>
    )
}

export default About