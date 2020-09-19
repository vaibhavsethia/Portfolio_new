import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import { Tabs, Carousel, Row } from "antd";

import "./Projects.css";
import ProjectCard from "./ProjectCard";
import STL_1 from "../../Images/Projects/STL_1.jpg";
import PVP_1 from "../../Images/Projects/PVP_1.jpg";
import ADV_1 from "../../Images/Projects/ADV_1.jpg";

const { TabPane } = Tabs;

export class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="project-section">
        <PageHeader Title={<span>Projects</span>} />
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="All" key="1">
            <Row justify="center">
              <ProjectCard Image={STL_1} />
              <ProjectCard Image={PVP_1} />
            </Row>
          </TabPane>
          <TabPane tab="Golang" key="2">
            <Row justify="center"></Row>
          </TabPane>
          <TabPane tab="React-Js" key="3">
            <Row justify="center"></Row>
          </TabPane>
          <TabPane tab="Python" key="4">
            <Row justify="center">
              <ProjectCard Image={STL_1} />
              <ProjectCard Image={ADV_1} />
              <ProjectCard Image={PVP_1} />
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
