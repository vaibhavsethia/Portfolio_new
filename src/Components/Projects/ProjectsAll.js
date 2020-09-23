import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import ADV_1 from "../../Images/Projects/ADV_1.jpg";
import ADV_2 from "../../Images/Projects/ADV_2.png";
import BKRD_1 from "../../Images/Projects/BKRD_1.jpg";
import DASH_1 from "../../Images/Projects/DASH_1.png";
import DV_1 from "../../Images/Projects/DV_1.png";
import JPW_1 from "../../Images/Projects/JPW_1.png";
import JW_1 from "../../Images/Projects/JW_1.png";
import PORT_1 from "../../Images/Projects/PORT_1.png";
import BKRD_2 from "../../Images/Projects/BKRD_2.png";
import DASH_2 from "../../Images/Projects/DASH_2.png";
import DV_2 from "../../Images/Projects/DV_2.png";
import JPW_2 from "../../Images/Projects/JPW_2.png";
import JW_2 from "../../Images/Projects/JW_2.png";
import PORT_2 from "../../Images/Projects/PORT_2.png";
import STL_1 from "../../Images/Projects/STL_1.jpg";
import PVP_1 from "../../Images/Projects/PVP_1.jpg";
import STL_2 from "../../Images/Projects/STL_2.png";
import PVP_2 from "../../Images/Projects/PVP_2.png";
import VWO_1 from "../../Images/Projects/VWO_1.jpg";
import VWO_3 from "../../Images/Projects/VWO_3.jpg";
import VWO_4 from "../../Images/Projects/VWO_4.png";
import VWO_5 from "../../Images/Projects/VWO_5.png";
import { Row } from "antd";
import Flip from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";

const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";
const Image_All = [
  VWO_3,
  STL_1,
  ADV_1,
  JPW_1,
  JW_1,
  VWO_4,
  DASH_1,
  DV_1,
  PORT_1,
  PVP_1,
  BKRD_1,
];
const ModalImage_All = [
  VWO_1,
  STL_2,
  ADV_2,
  JPW_2,
  JW_2,
  VWO_5,
  DASH_2,
  DV_2,
  PORT_2,
  PVP_2,
  BKRD_2,
];

export class ProjectsAll extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"Visual Website Optimization"}
              Desc={Desc}
              Image={Image_All[0]}
              ModalImage={ModalImage_All[0]}
              DisabledButton={false}
              Github={"https://github.com/decabits/vwo-golang-sdk"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Smart Traffic Lights"}
              Desc={Desc}
              Image={Image_All[1]}
              ModalImage={ModalImage_All[1]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Smart-Traffic-Light"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Automated Document Verifier"}
              Desc={Desc}
              Image={Image_All[2]}
              ModalImage={ModalImage_All[2]}
              DisabledButton={true}
              Github={this.props.Github}
            />
          </Flip>
          <Flip right>
            {" "}
            <ProjectCard
              Name={"JWilliamson Company Site"}
              Desc={Desc}
              Image={Image_All[3]}
              ModalImage={ModalImage_All[3]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/JW_Web_antD"}
            />
          </Flip>
        </Row>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"Template Portfolio Site"}
              Desc={Desc}
              Image={Image_All[4]}
              ModalImage={ModalImage_All[4]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/JP_Website"}
            />
          </Flip>
          <Pulse>
            <ProjectCard
              Name={"Visual Website Optimization Example App"}
              Desc={Desc}
              Image={Image_All[5]}
              ModalImage={ModalImage_All[5]}
              DisabledButton={false}
              Github={"https://github.com/decabits/vwo-golang-example-app"}
            />
          </Pulse>
          <Pulse>
            <ProjectCard
              Name={"Virtual Dashboard"}
              Desc={Desc}
              Image={Image_All[6]}
              ModalImage={ModalImage_All[6]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Visual-Dashboard"}
            />
          </Pulse>
          <Flip right>
            <ProjectCard
              Name={"Data Visualizer"}
              Desc={Desc}
              Image={Image_All[7]}
              ModalImage={ModalImage_All[7]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Data-Visualizer"}
            />
          </Flip>
        </Row>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"My Portfolio - Implementation One"}
              Desc={Desc}
              Image={Image_All[8]}
              ModalImage={ModalImage_All[8]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Myportfolio"}
            />
          </Flip>
          <Flip bottom>
            <ProjectCard
              Name={"PVP Battle"}
              Desc={Desc}
              Image={Image_All[9]}
              ModalImage={ModalImage_All[9]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/PvP_Battle"}
            />
          </Flip>
          <Flip right>
            <ProjectCard
              Name={"Background Generator"}
              Desc={Desc}
              Image={Image_All[10]}
              ModalImage={ModalImage_All[10]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/BackGround-Generator"}
            />
          </Flip>
        </Row>
      </div>
    );
  }
}

export default ProjectsAll;
