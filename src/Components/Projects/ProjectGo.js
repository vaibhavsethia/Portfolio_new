import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import VWO_1 from "../../Images/Projects/VWO_1.jpg";
import VWO_3 from "../../Images/Projects/VWO_3.jpg";
import VWO_4 from "../../Images/Projects/VWO_4.png";
import VWO_5 from "../../Images/Projects/VWO_5.png";
import { Row } from "antd";
import Flip from "react-reveal/Flip";

const ModalImage_Go = [VWO_1, VWO_5];
const Image_Go = [VWO_3, VWO_4];
const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";

export class ProjectGo extends Component {
  render() {
    return (
      <Row justify="center">
        <Flip left>
          <ProjectCard
            Name={"Visual Website Optimization"}
            Desc={Desc}
            Image={Image_Go[0]}
            ModalImage={ModalImage_Go[0]}
            DisabledButton={false}
            Github={"https://github.com/decabits/vwo-golang-sdk"}
          />
        </Flip>
        <Flip right>
          <ProjectCard
            Name={"Visual Website Optimization Example App"}
            Desc={Desc}
            Image={Image_Go[1]}
            ModalImage={ModalImage_Go[1]}
            DisabledButton={false}
            Github={"https://github.com/decabits/vwo-golang-example-app"}
          />
        </Flip>
      </Row>
    );
  }
}

export default ProjectGo;
