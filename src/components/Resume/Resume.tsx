/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { educationData, experienceData, skillsData } from "../../data/resumeData";

const Resume = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const resumeAnimation1 = useAnimation();
  const resumeAnimation2 = useAnimation();
  const resumeAnimation3 = useAnimation();
  const resumeAnimation4 = useAnimation();
  const resumeAnimation5 = useAnimation();
  const resumeAnimation6 = useAnimation();

  useEffect(() => {
    if (inView) {
      resumeAnimation1.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      });
      resumeAnimation2.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      });
      resumeAnimation3.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.4,
        },
      });
      resumeAnimation4.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.5,
        },
      });
      resumeAnimation5.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.6,
        },
      });
      resumeAnimation6.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.7,
        },
      });
    }
    if (!inView) {
      resumeAnimation1.start({
        opacity: 0,
      });
      resumeAnimation2.start({
        opacity: 0,
      });
      resumeAnimation3.start({
        opacity: 0,
      });
      resumeAnimation4.start({
        opacity: 0,
      });
      resumeAnimation5.start({
        opacity: 0,
      });
      resumeAnimation6.start({
        opacity: 0,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <Fragment>
      <Container fluid={true} className="Resume">
        <Row>
          <Col lg={12}>
            <div className="CommonTitle text-center">
              <p>My Expertises</p>
              <h6>My Resume</h6>
            </div>
          </Col>
          <Container ref={ref}>
            <Row>
              <Col lg={6} md={6}>
                <h5 className="ResumeTitle">My Education</h5>
                {educationData?.map((item) => (
                  <motion.div
                    className="ResumeItem"
                    animate={item?.animateType === 1 ? resumeAnimation1 : item?.animateType === 2 ? resumeAnimation2 : resumeAnimation3}
                    key={item?.id}
                  >
                    <h6>{item?.title}</h6>
                    <span>{item?.yearRange}</span>
                    <p>
                      <a href={item?.websiteLink} target="_blank">
                        {item?.name}
                      </a>
                    </p>
                  </motion.div>
                ))}
              </Col>
              <Col lg={6} md={6}>
                <h5 className="ResumeTitle">My Experience</h5>
                {experienceData?.map((item) => (
                  <motion.div
                    className="ResumeItem"
                    animate={item?.animateType === 4 ? resumeAnimation4 : item?.animateType === 5 ? resumeAnimation5 : resumeAnimation6}
                    key={item?.id}
                  >
                    <h6>{item?.title}</h6>
                    <span>{item?.yearRange}</span>
                    <p>
                      <a href={item?.websiteLink} target="_blank">
                        {item?.name}
                      </a>
                    </p>
                  </motion.div>
                ))}
              </Col>
            </Row>
            <Row ref={ref} className="justify-content-center">
              <Col lg={12}>
                <h5 className="ResumeTitle">Coding Skills</h5>
              </Col>
              {skillsData?.map((item, index) => (
                <Col lg={2} md={3} xs={6} key={item?.id}>
                  <motion.div
                    className="ResumeItem SkillCard"
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  >
                    <img src={item?.icon} alt="" />
                    <h6>{item?.title}</h6>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
        <div className="BannerClipSvg4">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
          </svg>
        </div>
      </Container>
    </Fragment>
  );
};

export default Resume;
