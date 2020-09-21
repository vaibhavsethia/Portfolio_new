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
import { Row } from "antd";

const Image_React = [JPW_1, JW_1, ADV_1, PORT_1, DASH_1, DV_1, BKRD_1];
const ModalImage_React = [JPW_2, JW_2, ADV_2, PORT_2, DASH_2, DV_2, BKRD_2];
const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";

export class ProjectReact extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <ProjectCard
            Name={"JWilliamson Company Site"}
            Desc={Desc}
            Image={Image_React[0]}
            ModalImage={ModalImage_React[0]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/JW_Web_antD"}
          />
          <ProjectCard
            Name={"Template Portfolio Site"}
            Desc={Desc}
            Image={Image_React[1]}
            ModalImage={ModalImage_React[1]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/JP_Website"}
          />
          <ProjectCard
            Name={"Automated Document Verifier"}
            Desc={Desc}
            Image={Image_React[2]}
            ModalImage={ModalImage_React[2]}
            DisabledButton={true}
            Github={""}
          />
          <ProjectCard
            Name={"My Portfolio - Implementation One"}
            Desc={Desc}
            Image={Image_React[3]}
            ModalImage={ModalImage_React[3]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/Myportfolio"}
          />
        </Row>
        <Row justify="center">
          <ProjectCard
            Name={"Virtual Dashboard"}
            Desc={Desc}
            Image={Image_React[4]}
            ModalImage={ModalImage_React[4]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/Visual-Dashboard"}
          />
          <ProjectCard
            Name={"Data Visualizer"}
            Desc={Desc}
            Image={Image_React[5]}
            ModalImage={ModalImage_React[5]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/Data-Visualizer"}
          />
          <ProjectCard
            Name={"Background Generator"}
            Desc={Desc}
            Image={Image_React[6]}
            ModalImage={ModalImage_React[6]}
            DisabledButton={false}
            Github={"https://github.com/vaibhavsethia/BackGround-Generator"}
          />
        </Row>
      </div>
    );
  }
}

export default ProjectReact;