import React, { Fragment, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  
  const { ref, inView } = useInView({
    threshold : 0.2
  });

  const footerAnimation = useAnimation();
  const footerAnimation2 = useAnimation();
  const footerAnimation3 = useAnimation();

  const footerAnimation4 = useAnimation();
  const footerAnimation5 = useAnimation();

  useEffect (() => {
    if(inView){
      footerAnimation.start({
        opacity: 1,
        transition: {
          duration: .7, delay: .3,
        }
      });
      footerAnimation2.start({
        opacity: 1,
        transition: {
          duration: .7, delay: .4,
        }
      });
      footerAnimation3.start({
        opacity: 1,
        transition: {
          duration: .7, delay: .5,
        }
      });
      footerAnimation4.start({
        opacity: 1,
        transition: {
          duration: .7, delay: .6,
        }
      });
      footerAnimation5.start({
        opacity: 1,
        transition: {
          duration: .7, delay: .8,
        }
      });
    }
    if(!inView){
      footerAnimation.start({
        opacity: 0,
      });
      footerAnimation2.start({
        opacity: 0,
      });
      footerAnimation3.start({
        opacity: 0,
      });
      footerAnimation4.start({
        opacity: 0,
      });
      footerAnimation5.start({
        opacity: 0,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inView]);

    return (
      <Fragment>
        <Container fluid={true} className="Contact">
          <Row>
            <Col lg={12}>
              <div className="CommonTitle text-center">
                <p>Say Hello</p>
                <h6>Contact</h6>
              </div>
            </Col>
            <Container>
              <Row ref={ref}>
                <Col lg={12}>
                  <h6 className="ContactTitle">Get in Touch</h6>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ContactItem"
                    animate={footerAnimation}
                  >
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="Icon"/>
                    <h5>Address</h5>
                    <p>Sekhertek - 11, House - 29, Dhaka</p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ContactItem"
                    animate={footerAnimation2}
                  >
                    <FontAwesomeIcon icon={faMobileAlt} className="Icon"/>
                    <h5>Phone</h5>
                    <p><a href="tel:8801674070166">+880 167 4070166</a></p>
                  </motion.div>
                </Col>
                <Col lg={4} md={6}>
                  <motion.div className="ContactItem"
                    animate={footerAnimation3}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="Icon"/>
                    <h5>Email</h5>
                    <p><a href="mailto:utshaw.cse.1614.eu.bd@gmail.com">utshaw.cse.1614.eu.bd@gmail.com</a></p>
                  </motion.div>
                </Col>
                <Col lg={12}>
                  <h6 className="ContactTitle">My Location</h6>
                </Col>
                <Col lg={12}>
                  <motion.div className="Map"
                    animate={footerAnimation4}
                  >
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.464235764701!2d90.35547317513183!3d23.766477588159365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a1af311d05%3A0xcc3cccc9c65b0522!2s11%20Shakhertek%20Main%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706300382965!5m2!1sen!2sbd"></iframe>
                  </motion.div>
                </Col>
                <Col lg={12}>
                  <h6 className="ContactTitle">Contact Form</h6>
                </Col>
                <Col lg={12}>
                  <motion.div className="ContactForm"
                    animate={footerAnimation5}
                  >
                    <Form>
                      <Row>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control type="text" placeholder="Your Name *" />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control type="email" placeholder="Email *" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Control type="text" placeholder="Your Subject..." />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Your Message..." />
                      </Form.Group>
                      <div className="FormBtn text-center">
                        <Button variant="primary" type="submit">
                          Send
                        </Button>
                      </div>
                    </Form>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Fragment>
    )
}

export default Contact