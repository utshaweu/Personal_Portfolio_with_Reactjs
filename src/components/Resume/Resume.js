/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment, useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Resume = () => {

  const { ref, inView } = useInView({
    threshold : 0.2
  });
  
  const resumeAnimation1 = useAnimation();
  const resumeAnimation2 = useAnimation();
  const resumeAnimation3 = useAnimation();
  const resumeAnimation4 = useAnimation();
  const resumeAnimation5 = useAnimation();
  const resumeAnimation6 = useAnimation();

  const progressAnimation1 = useAnimation();
  const progressAnimation2 = useAnimation();

  useEffect(() => {
    if(inView){
      resumeAnimation1.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .2
        }
      });
      resumeAnimation2.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .3
        }
      });
      resumeAnimation3.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .4
        }
      });
      resumeAnimation4.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .5
        }
      });
      resumeAnimation5.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .6
        }
      });
      resumeAnimation6.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .7
        }
      });
      progressAnimation1.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .8
        }
      });
      progressAnimation2.start({
        opacity: 1,
        transition:{
          duration: 0.5, delay: .9
        }
      });
    }
    if(!inView){
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
      progressAnimation1.start({
        opacity: 0,
      });
      progressAnimation2.start({
        opacity: 0,
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inView]);



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
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation1}
                  >
                    <h6>SSC</h6>
                    <span>2005-2013</span>
                    <p><a href="http://www.mghs.edu.bd/index.php" target="_blank">Mohammadpur Govt High School</a></p>
                  </motion.div>
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation2}
                  >
                    <h6>HSC</h6>
                    <span>2013-2015</span>
                    <p><a href="https://www.facebook.com/allGSC/" target="_blank">Govt Science College</a></p>
                  </motion.div>
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation3}
                  >
                    <h6>B.Sc. in CSE</h6>
                    <span>2016-2020</span>
                    <p><a href="https://www.easternuni.edu.bd/" target="_blank">Eastern University</a></p>
                  </motion.div>
                </Col>
                <Col lg={6} md={6}>
                <h5 className="ResumeTitle">My Experience</h5>
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation4}
                  >
                    <h6>Responsive Web Designer</h6>
                    <span>2018-2019</span>
                    <p><a href="https://creativeitinstitute.com/" target="_blank">Creative IT</a></p>
                  </motion.div>
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation5}
                  >
                    <h6>Web Designer</h6>
                    <span>2020-2021</span>
                    <p><a href="https://shebawebtech.com/" target="_blank">SheBa Web Technology LLC</a></p>
                  </motion.div>
                  <motion.div className="ResumeItem"
                    animate={resumeAnimation6}
                  >
                    <h6>Frontend Software Developer (Intern)</h6>
                    <span>2021-Present</span>
                    <p><a href="https://ibos.io/" target="_blank">iBOS Limited</a></p>
                  </motion.div>
                </Col>
              </Row>
              <Row ref={ref}>
                <Col lg={12}>
                  <h5 className="ResumeTitle">Coding Skills</h5>
                </Col>
                <Col lg={6} md={6}>
                  <motion.div className="ResumeItem"
                    animate={progressAnimation1}
                  >
                    <h6>Html</h6>
                    <ProgressBar now={90} />
                    <h6>Css</h6>
                    <ProgressBar now={80} />
                    <h6>Bootstrap</h6>
                    <ProgressBar now={85} />
                    <h6>JavaScript</h6>
                    <ProgressBar now={40} />
                  </motion.div>
                </Col>
                <Col lg={6} md={6}>
                  <motion.div className="ResumeItem"
                    animate={progressAnimation2}
                  >
                    <h6>jQuery</h6>
                    <ProgressBar now={60} />
                    <h6>Reactjs</h6>
                    <ProgressBar now={40} />
                    <h6>Sass</h6>
                    <ProgressBar now={65} />
                    <h6>WordPress</h6>
                    <ProgressBar now={40} />
                  </motion.div>
                </Col>
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
    )
}

export default Resume