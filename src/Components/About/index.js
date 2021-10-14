import { Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import Timeline from "../Timeline";
import Projects from "../Projects";

import "./About.css";
import SkillCard from "./Skill";
import { Skills_1, Skills_2, Skills_3 } from "../../Utils/Constants";
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
        <Row className="pl4 pr4 mt2 mb4">
          {Skills_3.map((Skill) => (
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