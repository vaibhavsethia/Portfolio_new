import { Col, Divider, Progress, Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import Avatar from "../../Images/Avatar.png";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

import Timeline from '../Timeline'
import Projects from '../Projects'

import "./About.css";

export class About extends Component {
  render() {
    return (
      <div className="tc section-1">
        {/* <PageHeader Title={<span>ABOUT</span>} /> */}
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
        
        <PageHeader Title={<span>SKILLS</span>} />
        
        <Row className="pl4 pr4 mt2 mb4 pb2">
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top left>
              <Progress
                strokeColor="#3f918d"
                type="circle"
                percent="90"
                strokeWidth="4"
                format={(percent) => `C++`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top left>
              <Progress
                strokeColor="#3E9B97"
                type="circle"
                percent="90"
                strokeWidth="4"
                format={(percent) => `ReactJs`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top left>
              <Progress
                strokeColor="#3BA39E"
                type="circle"
                percent="75"
                strokeWidth="4"
                format={(percent) => `Go`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top right>
              <Progress
                strokeColor="#38AEA8"
                type="circle"
                percent="75"
                strokeWidth="4"
                format={(percent) => `UI Design`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top right>
              <Progress
                strokeColor="#34B4AE"
                type="circle"
                percent="70"
                strokeWidth="4"
                format={(percent) => `Javascript`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate top right>
              <Progress
                strokeColor="#2DBFB8"
                type="circle"
                percent="60"
                strokeWidth="4"
                format={(percent) => `Python`}
              />
            </Rotate>
          </Col>
        </Row>
        <Row className="pl4 pr4 mt2 mb4">
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom left>
              <Progress
                strokeColor="#27C2BB"
                type="circle"
                percent="60"
                strokeWidth="4"
                format={(percent) => `Apollo`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom left>
              <Progress
                strokeColor="#25CEC6"
                type="circle"
                percent="60"
                strokeWidth="4"
                format={(percent) => `Shell`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom left>
              <Progress
                strokeColor="#21D8CF"
                type="circle"
                percent="60"
                strokeWidth="4"
                format={(percent) => `NodeJs`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom right>
              <Progress
                strokeColor="#1BDFD6"
                type="circle"
                percent="50"
                strokeWidth="4"
                format={(percent) => `Java`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom right>
              <Progress
                strokeColor="#17E7DD"
                type="circle"
                percent="50"
                strokeWidth="4"
                format={(percent) => `ExpressJs`}
              />
            </Rotate>
          </Col>
          <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
            <Rotate bottom right>
              <Progress
                strokeColor="#0EEAE0"
                type="circle"
                percent="50"
                strokeWidth="4"
                format={(percent) => `GraphQl`}
              />
            </Rotate>
          </Col>
        </Row>
        <Projects />
        <Timeline />
      </div>
    );
  }
}

export default About;
{
  /*I am often amazed by the progress we as a human species have mad in Interstellar space (except declaring Pluto a Dwarf!!)  and look for freelancing and industrial exposure oppurtunities to polish my skills and help me exploit my weaknesses and know my strengths */
}
