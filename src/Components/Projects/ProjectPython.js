import { Row } from "antd";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import STL_1 from "../../Images/Projects/STL_1.jpg";
import PVP_1 from "../../Images/Projects/PVP_1.jpg";
import ADV_1 from "../../Images/Projects/ADV_1.jpg";
import STL_2 from "../../Images/Projects/STL_2.png";
import PVP_2 from "../../Images/Projects/PVP_2.png";
import ADV_2 from "../../Images/Projects/ADV_2.png";
import Flip from "react-reveal/Flip";

const Image_Python = [STL_1, ADV_1, PVP_1];
const ModalImage_Python = [STL_2, ADV_2, PVP_2];
const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";

export class ProjectPython extends Component {
  render() {
    return (
      <Row justify="center">
        <Flip left>
          <ProjectCard
            Name={"Smart Traffic Lights"}
            Desc={"Python based software to implement dynamic traffic lights which will are proposed to have timers set according to the number of vehicles present on different sidfes of a 4-way intersection. It used technologies like OpenCv library, ImageAI, Python, Pycharm, PyQt and Turtle for complete implementation. Some of the significant features are Variance-Based Algorithm, Max Waiting time, Handled Few car case and Single sided case."}
            Image={Image_Python[0]}
            ModalImage={ModalImage_Python[0]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/Smart-Traffic-Light"}
          />
        </Flip>
        <Flip top>
          <ProjectCard
            Name={"Automated Document Verifier"}
            Desc={"React based Web-App to present Python backend for automating the task of document verification using Image Processing and Layout matching using OpenCV. Some of the documents successfully verified were PAN Card, 10th Marksheet, 12th Marksheet with checks to validate the data from database also. It used technologies like React, Tachyons, Python, Express, OpenCv, etc. "}
            Image={Image_Python[1]}
            ModalImage={ModalImage_Python[1]}
            DisabledButton={true}
            Github={this.props.Github}
          />
        </Flip>
        <Flip right>
          <ProjectCard
            Name={"PVP Battle"}
            Desc={"A simple Python based textual game with 2 game modes, Single player and Multi Player. The Main motto of the player is to defeat the enemy using basic attacks , Magic or items in inventory. With different items having different Damage points and uses Magic points that can be revived using Potions "}
            Image={Image_Python[2]}
            ModalImage={ModalImage_Python[2]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/PvP_Battle"}
          />
        </Flip>
      </Row>
    );
  }
}

export default ProjectPython;
