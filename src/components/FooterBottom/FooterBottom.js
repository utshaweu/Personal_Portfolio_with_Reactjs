import React, { Component,Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class FooterBottom extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="FooterBottom">
          <Row>
            <Col lg={12}>
              <h6>© Sajib 2021 | All Right Reserved</h6>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
