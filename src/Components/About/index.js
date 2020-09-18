import { Col, Progress, Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import Avatar from "../../Images/Profile/Avatar.png";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

import Timeline from "../Timeline";
import Projects from "../Projects";

import "./About.css";
import SkillCard from "./Skill";
import { Skills_1, Skills_2 } from "../../Utils/Constants";
import Intro from "./Intro";

export class About extends Component {
  render() {
    return (
      <div className="tc section-1">
        {/* <PageHeader Title={<span>ABOUT</span>} /> */}
        <Intro />
        <PageHeader Title={<span>SKILLS</span>} />
        <Row className="pl4 pr4 mt2 mb4 pb2">
          {Skills_1.map((Skill) => (
            <SkillCard
              Skill={Skill.Name}
              Percent={Skill.Percent}
              Color={Skill.Color}
              Align={Skill.Align}
            />
          ))}
        </Row>
        <Row className="pl4 pr4 mt2 mb4">
          {Skills_2.map((Skill) => (
            <SkillCard
              Skill={Skill.Name}
              Percent={Skill.Percent}
              Color={Skill.Color}
              Align={Skill.Align}
            />
          ))}
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
