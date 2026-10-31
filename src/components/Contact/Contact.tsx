import React, { Fragment, FormEvent, useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

type FormStatus = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  
  const { ref, inView } = useInView({
    threshold : 0.2
  });

  const footerAnimation = useAnimation();
  const footerAnimation2 = useAnimation();
  const footerAnimation3 = useAnimation();
  const footerAnimation4 = useAnimation();

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
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inView]);

  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  // Netlify Forms receives this POST and emails the submission (see the static form in public/index.html)
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormStatus("sending");

    try {
      const response = await fetch("/", { method: "POST", body: new FormData(form) });

      if (response.ok) {
        form.reset();
        setFormStatus("sent");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

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
                    <p>House - 117, Boslia 40 Feet, Dhaka</p>
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
                  <h6 className="ContactTitle">Contact Form</h6>
                </Col>
                <Col lg={12}>
                  <motion.div className="ContactForm"
                    animate={footerAnimation4}
                  >
                    <Form onSubmit={handleSubmit}>
                      <input type="hidden" name="form-name" value="contact" />
                      <Row>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control type="text" name="name" placeholder="Your Name *" required />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group>
                            <Form.Control type="email" name="email" placeholder="Email *" required />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group>
                        <Form.Control type="text" name="subject" placeholder="Your Subject..." />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="message" rows={3} placeholder="Your Message..." />
                      </Form.Group>
                      <div className="FormBtn text-center">
                        <Button variant="primary" type="submit" disabled={formStatus === "sending"}>
                          {formStatus === "sending" ? "Sending..." : "Send"}
                        </Button>
                        {formStatus === "sent" && (
                          <p className="text-success mt-3 mb-0">Thanks! Your message has been sent.</p>
                        )}
                        {formStatus === "error" && (
                          <p className="text-danger mt-3 mb-0">Sorry, something went wrong. Please email me directly.</p>
                        )}
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