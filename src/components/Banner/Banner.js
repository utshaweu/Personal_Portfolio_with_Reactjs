import React, {Fragment} from 'react';
import '../../asset/css/style.css';
import '../../asset/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import { motion } from "framer-motion";
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Banner = () => {

  const ThemeSwitcher = useThemeSwitcher();

    return (
      <Fragment>
        {ThemeSwitcher}
        <Container fluid={true} className="Banner">
          <Row className="BannerBg text-center">
            <Col lg={12}>
              <motion.div className="BannerContent"
                initial={{y: '-100vw'}}
                animate={{y: 0}}
                transition={{type: "tween", ease: 'backOut', duration: 2.5}}
              >
                <h1>Hi! I'm <span>Sajib</span> Web Designer</h1>
                <p>Based In Bangladesh.</p>
              </motion.div>
            </Col>
          </Row>
          <div className="BannerClipSvg">
                <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
                  <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
                </svg>
          </div>
        </Container>
      </Fragment>
    )
}

export default Banner;
