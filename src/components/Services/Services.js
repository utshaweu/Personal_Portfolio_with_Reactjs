import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { servicesData } from "../../data/servicesData";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const serviceAnimationLeft = useAnimation();

  const serviceAnimationRight = useAnimation();

  const serviceAnimationMiddle = useAnimation();

  useEffect(() => {
    if (inView) {
      serviceAnimationLeft.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      });
      serviceAnimationRight.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.7,
        },
      });
      serviceAnimationMiddle.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

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
              {servicesData?.map((item) => (
                <Col lg={4} md={6} key={item?.id}>
                  <motion.div
                    className="ServicesItem text-center"
                    animate={item?.animateDirection === "Left" ? serviceAnimationLeft : item?.animateDirection === "Right" ? serviceAnimationRight : serviceAnimationMiddle}
                  >
                    <Image src={item?.img} />
                    <h6>{item?.title}</h6>
                    <p>{item?.description}</p>
                  </motion.div>
                </Col>
              ))}
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
  );
};

export default Services;
