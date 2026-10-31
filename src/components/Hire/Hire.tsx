import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Hire = () => {

  const { ref, inView } = useInView({
    threshold : 0.2
  });

  const buttonAnimation = useAnimation();

  useEffect(() => {
    if(inView){
      buttonAnimation.start({
        x: -20,
        transition:{
          type: 'tween', ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 1, duration: 2,
        }
      });
    }
    if(!inView){
      buttonAnimation.start({
        x: 20
      });
    }
  },[inView]);

    return (
      <Fragment>
        <Container fluid={true} className="Hire">
          <Row>
            <Container ref={ref}>
              <Row>
                <Col lg={12}>
                <div className="HireContent text-center">
                  <h6>Let's Work Together!</h6><br/>
                  <motion.div
                    animate={buttonAnimation}
                  >
                    <a href="#">Hire Me!</a>
                  </motion.div>
                </div>
              </Col>
              </Row>
            </Container>
          </Row>
          <div className="BannerClipSvg6">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
          </div>
        </Container>
      </Fragment>
    )
}

export default Hire
