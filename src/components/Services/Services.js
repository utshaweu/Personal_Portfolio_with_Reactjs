import React, { Fragment, useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import WebDesign from '../../asset/images/computer.png';
import ResponsiveDesign from '../../asset/images/responsive-design.png';
import CreativeDesign from '../../asset/images/design-thinking.png';
import Psd from '../../asset/images/psd.png';
import Fast from '../../asset/images/rocket.png';
import Pixel from '../../asset/images/resolution.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Services = () => {

  const { ref, inView } = useInView({
    threshold : 0.2
  });

  const serviceAnimationLeft = useAnimation();

  const serviceAnimationRight = useAnimation();

  const serviceAnimationMiddle = useAnimation();

  useEffect(()=>{
    if(inView){
      serviceAnimationLeft.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .2
        }
      });
      serviceAnimationRight.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .7
        }
      });
      serviceAnimationMiddle.start({
        opacity: 1,
        transition: {
          duration: 0.5, delay: .5
        }
      });
    }
    if(!inView){
      serviceAnimationLeft.start({
        opacity: 0,
      });
      serviceAnimationRight.start({
        opacity: 0,
      });
      serviceAnimationMiddle.start({
        opacity: 0,
      });
    }
  },[inView]);



    return (
      <Fragment>
        <Container fluid={true} className="Services">
          <Row>
            <Col lg={12}>
            <div className="CommonTitle text-center">
              <p>What I am Expert In</p>
              <h6>My Services</h6>
            </div>
            </Col>
            <Container ref={ref}>
              <Row>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationLeft}
                  >
                    <Image src={WebDesign} />
                    <h6>Web Design</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationMiddle}
                  >
                    <Image src={ResponsiveDesign} />
                    <h6>Responsive Design</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationRight}
                  >
                    <Image src={CreativeDesign} />
                    <h6>Creative Design</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationLeft}
                  >
                    <Image src={Psd} />
                    <h6>PSD/XD to Html</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationMiddle}
                  >
                    <Image src={Fast} />
                    <h6>Fast & Optimized</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ServicesItem text-center"
                    animate={serviceAnimationRight}
                  >
                    <Image src={Pixel} />
                    <h6>Pixel Precision</h6>
                    <p>Modern and mobile-ready website that will help of your marketing.</p>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Row>
          <div className="BannerClipSvg3">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
          </div>
        </Container>
      </Fragment>
    )
}

export default Services