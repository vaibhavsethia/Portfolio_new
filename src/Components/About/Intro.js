import React, { Component } from "react";
import Avatar from "../../Images/Profile/Avatar.png";
import { Col, Row } from "antd";
import Fade from "react-reveal/Fade";

import "./About.css";

export class Intro extends Component {
  render() {
    return (
      <Row className="ma4 pt2 pb4">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Fade left>
            <img src={Avatar} alt="avatar" className="avatar grow ma1"></img>
            <br />
            <span className="big-font-about">
              <strong>W</strong>HO AM I ?
            </span>
          </Fade>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Fade right>
            <div className="small-font-about pa2 ml4 mr4">
              I am an IT Engineering Student at the University School of
              Information Communication and Technology, GGSIPU.
              <br />
              I have a serious passion for development and a never-ending
              curiosity towards new technologies.
              <br />
              Apart from resolving some real-life problems, You can often find
              me solving some programming questions, watching Shark tank, or
              playing some sport.
            </div>
          </Fade>
        </Col>
      </Row>
    );
  }
}

export default Intro;
