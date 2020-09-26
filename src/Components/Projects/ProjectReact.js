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
import Flip from "react-reveal/Flip";

const Image_React = [JPW_1, JW_1, ADV_1, PORT_1, DASH_1, DV_1, BKRD_1];
const ModalImage_React = [JPW_2, JW_2, ADV_2, PORT_2, DASH_2, DV_2, BKRD_2];
const Desc =
  "Dolor ex ex ea Lorem officia est deserunt. Ad ea est quis consequat labore velit fugiat qui officia occaecat nulla adipisicing incididunt. Id ex exercitation dolore ipsum. Quis non dolore cillum elit duis. Reprehenderit commodo ullamco aute elit exercitation et qui dolore commodo velit nulla.";

export class ProjectReact extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"JWilliamson Company Site"}
              Desc={"A Multi-page ReactJs based website made using Ant Design with bug free transitions even on small screen devices like smartphones. Fully responsive and reactive with animations and smooth scrolling. It used Technologies like ReactJs, Ant Design, Tachyons, NodeJs, Figma, React-Reveal, NPM and many other packages for small tasks."}
              Image={Image_React[0]}
              ModalImage={ModalImage_React[0]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/JW_Web_antD"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Template Portfolio Site"}
              Desc={"A Multi-page React based website template made using HTML, CSS and Js for frontend implementation and Figma for design preparation. It has a bug free  transitions even on small screen devices like smartphones and is completely responsive and reactive with fast animations for immersive UI."}
              Image={Image_React[1]}
              ModalImage={ModalImage_React[1]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/JP_Website"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Automated Document Verifier"}
              Desc={"React based Web-App to present Python backend for automating the task of document verification using Image Processing and Layout matching using OpenCV. Some of the documents successfully verified were PAN Card, 10th Marksheet, 12th Marksheet with checks to validate the data from database also. It used technologies like React, Tachyons, Python, Express, OpenCv, etc. "}
              Image={Image_React[2]}
              ModalImage={ModalImage_React[2]}
              DisabledButton={true}
              Github={""}
            />
          </Flip>
          <Flip right>
            <ProjectCard
              Name={"My Portfolio - Implementation One"}
              Desc={"A Single-page React based implementation of my first ever portfolio made by using styles from colorlib library. With sections like projects, skills and education to provide complete information about me to the viewer. What you are currently viewing is the Second implementation of my portfolio to make it better looking, Reactive and Responsive."}
              Image={Image_React[3]}
              ModalImage={ModalImage_React[3]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Myportfolio"}
            />
          </Flip>
        </Row>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"Virtual Dashboard"}
              Desc={"A React based Virtual Dashboard to demonstrate data for Airport Authority of India in order to provide a visual tool to keep a record of the footfall among various amneties and shops around the top 7 airports of India. Made with an idea of improving layout of future airports made in India to utilize space more efficiently. ( Project is Incomplete )"}
              Image={Image_React[4]}
              ModalImage={ModalImage_React[4]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Visual-Dashboard"}
            />
          </Flip>
          <Flip bottom>
            <ProjectCard
              Name={"Data Visualizer"}
              Desc={"A React based data analysis tool to visualize data into multiple types of graphs. Graphs used are based on Victory API for data visualization. Respective Website has Upto 10 types of graphs like Bar graphs, Stcaked graphs, Pie charts, Radial graphs, Line graphs, Area graphs, etc."}
              Image={Image_React[5]}
              ModalImage={ModalImage_React[5]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Data-Visualizer"}
            />
          </Flip>
          <Flip right>
            <ProjectCard
              Name={"Background Generator"}
              Desc={"A simple HTML, CSS based project to simplify the search for gradient backgrounds with an optioon to visually select orientation of color sources. Made for the purpose of practising HTML and CSS."}
              Image={Image_React[6]}
              ModalImage={ModalImage_React[6]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/BackGround-Generator"}
            />
          </Flip>
        </Row>
      </div>
    );
  }
}

export default ProjectReact;
