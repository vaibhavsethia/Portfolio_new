import { Row } from "antd";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import STL_1 from "../../Images/Projects/STL_1.jpg";
import PVP_1 from "../../Images/Projects/PVP_1.jpg";
import ADV_1 from "../../Images/Projects/ADV_1.jpg";
import STL_2 from "../../Images/Projects/STL_2.png";
import PVP_2 from "../../Images/Projects/PVP_2.png";
import ADV_2 from "../../Images/Projects/ADV_2.png";

const Image_Python = [STL_1, ADV_1, PVP_1];
const ModalImage_Python = [STL_2, ADV_2, PVP_2];
const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";

export class ProjectPython extends Component {
  render() {
    return (
      <Row justify="center">
        <ProjectCard
          Name={"Smart Traffic Lights"}
          Desc={Desc}
          Image={Image_Python[0]}
          ModalImage={ModalImage_Python[0]}
          DisabledButton={false}
          Github={"https://github.com/vaibhavsethia/Smart-Traffic-Light"}
        />
        <ProjectCard
          Name={"Automated Document Verifier"}
          Desc={Desc}
          Image={Image_Python[1]}
          ModalImage={ModalImage_Python[1]}
          DisabledButton={true}
          Github={this.props.Github}
        />
        <ProjectCard
          Name={"PVP Battle"}
          Desc={Desc}
          Image={Image_Python[2]}
          ModalImage={ModalImage_Python[2]}
          DisabledButton={false}
          Github={"https://github.com/vaibhavsethia/PvP_Battle"}
        />
      </Row>
    );
  }
}

export default ProjectPython;