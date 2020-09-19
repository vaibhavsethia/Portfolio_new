import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import { Tabs, Row } from "antd";

import "./Projects.css";
import ProjectCard from "./ProjectCard";
import {
  Projects_All,
  Projects_Python,
  Projects_Go,
  Projects_React,
} from "../../Utils/Constants";
import STL_1 from "../../Images/Projects/STL_1.jpg";
import PVP_1 from "../../Images/Projects/PVP_1.jpg";
import ADV_1 from "../../Images/Projects/ADV_1.jpg";
import STL_2 from "../../Images/Projects/STL_2.png";
import PVP_2 from "../../Images/Projects/PVP_2.png";
import ADV_2 from "../../Images/Projects/ADV_2.png";

const { TabPane } = Tabs;
const Image_All = [STL_1, ADV_1, PVP_1];
const ModalImage_All = [STL_2, ADV_2, PVP_2];
const Image_React = [];
const ModalImage_React = [];
const Image_Go = [];
const ModalImage_Go = [];
const Image_Python = [STL_1, ADV_1, PVP_1];
const ModalImage_Python = [STL_2, ADV_2, PVP_2];
export class Projects extends Component {
  render() {
    return (
      <div id="Projects" className="project-section">
        <PageHeader Title={<span>Projects</span>} />
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="All" key="1">
            <Row justify="center">
              {Projects_All.map((project, index) => (
                <ProjectCard
                  Name={project.Name}
                  Desc={project.Desc}
                  Image={Image_All[index]}
                  ModalImage={ModalImage_All[index]}
                  DisabledButton={this.props.DisabledButton}
                  Github={this.props.Github}
                />
              ))}
            </Row>
          </TabPane>
          <TabPane tab="Golang" key="2">
            <Row justify="center">
            {Projects_Go.map((project, index) => (
                <ProjectCard
                  Name={project.Name}
                  Desc={project.Desc}
                  Image={Image_Go[index]}
                  ModalImage={ModalImage_Go[index]}
                  DisabledButton={this.props.DisabledButton}
                  Github={this.props.Github}
                />
              ))}
            </Row>
          </TabPane>
          <TabPane tab="React-Js" key="3">
            <Row justify="center">
            {Projects_React.map((project, index) => (
                <ProjectCard
                  Name={project.Name}
                  Desc={project.Desc}
                  Image={Image_React[index]}
                  ModalImage={ModalImage_React[index]}
                  DisabledButton={this.props.DisabledButton}
                  Github={this.props.Github}
                />
              ))}
            </Row>
          </TabPane>
          <TabPane tab="Python" key="4">
            <Row justify="center">
            {Projects_Python.map((project, index) => (
                <ProjectCard
                  Name={project.Name}
                  Desc={project.Desc}
                  Image={Image_Python[index]}
                  ModalImage={ModalImage_Python[index]}
                  DisabledButton={this.props.DisabledButton}
                  Github={this.props.Github}
                />
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Projects;
