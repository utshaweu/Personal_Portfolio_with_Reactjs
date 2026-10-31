import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificatesData } from "../../data/certificatesData";

const Certificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <Fragment>
      <Container fluid={true} className="Certificates">
        <Row>
          <Col lg={12}>
            <div className="CommonTitle text-center">
              <p>Achievements & Courses</p>
              <h6>Certificates</h6>
            </div>
          </Col>
          <Container ref={ref}>
            <Row>
              {certificatesData?.map((item, index) => (
                <Col lg={4} md={6} key={item?.id}>
                  <motion.div
                    className="CertificateItem"
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <a href={item?.img} target="_blank" rel="noreferrer" className="CertificateImg">
                      <Image src={item?.img} alt={`${item?.title} certificate`} />
                      <div className="Overlay">
                        <FontAwesomeIcon icon={faExpand} />
                      </div>
                    </a>
                    <h6>{item?.title}</h6>
                    <p>{item?.issuer}</p>
                    <span>{item?.date}</span>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Certificates;
