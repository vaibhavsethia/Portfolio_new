import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import { Tabs, Row } from "antd";

import "./Projects.css";

import ProjectGo from "./ProjectGo";
import ProjectPython from "./ProjectPython";
import ProjectReact from "./ProjectReact";
import ProjectsAll from "./ProjectsAll";

const { TabPane } = Tabs;

export class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="project-section">
        <PageHeader Title={<span>Projects</span>} />
        <Tabs defaultActiveKey="1" centered>
          <TabPane className="pb5" tab="All" key="1">
            <ProjectsAll />
          </TabPane>
          <TabPane className="pb5" tab="Golang" key="2">
            <ProjectGo />
          </TabPane>
          <TabPane className="pb5" tab="React-Js" key="3">
            <ProjectReact />
          </TabPane>
          <TabPane className="pb5" tab="Python" key="4">
            <ProjectPython />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
