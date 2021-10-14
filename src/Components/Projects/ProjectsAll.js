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
import Megamine_1 from "../../Images/Projects/Megamine_1.png";
import Megamine_2 from "../../Images/Projects/Megamine_2.png";
import { Row } from "antd";
import Flip from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";

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
  Megamine_2
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
  Megamine_1
];

export class ProjectsAll extends Component {
  render() {
    return (
      <div>
        <Row justify="center">
          <Flip left>
            <ProjectCard
              Name={"Visual Website Optimization"}
              Desc={"Implemented an open source library that allows you to A/B Test your Website at server-side with features like Feature testing, Tracking revenue conversion user wise and logger. SDK was implemented in Go language using third party packages like murmur hashing, google uuid, etc with a test coverage of upto 95%."}
              Image={Image_All[0]}
              ModalImage={ModalImage_All[0]}
              DisabledButton={false}
              Github={"https://github.com/decabits/vwo-golang-sdk"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Smart Traffic Lights"}
              Desc={"Python based software to implement dynamic traffic lights which will are proposed to have timers set according to the number of vehicles present on different sidfes of a 4-way intersection. It used technologies like OpenCv library, ImageAI, Python, Pycharm, PyQt and Turtle for complete implementation. Some of the significant features are Variance-Based Algorithm, Max Waiting time, Handled Few car case and Single sided case."}
              Image={Image_All[1]}
              ModalImage={ModalImage_All[1]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Smart-Traffic-Light"}
            />
          </Flip>
          <Flip top>
            <ProjectCard
              Name={"Automated Document Verifier"}
              Desc={"React based Web-App to present Python backend for automating the task of document verification using Image Processing and Layout matching using OpenCV. Some of the documents successfully verified were PAN Card, 10th Marksheet, 12th Marksheet with checks to validate the data from database also. It used technologies like React, Tachyons, Python, Express, OpenCv, etc. "}
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
              Desc={"A Multi-page ReactJs based website made using Ant Design with bug free transitions even on small screen devices like smartphones. Fully responsive and reactive with animations and smooth scrolling. It used Technologies like ReactJs, Ant Design, Tachyons, NodeJs, Figma, React-Reveal, NPM and many other packages for small tasks."}
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
              Desc={"A Multi-page React based website template made using HTML, CSS and Js for frontend implementation and Figma for design preparation. It has a bug free  transitions even on small screen devices like smartphones and is completely responsive and reactive with fast animations for immersive UI."}
              Image={Image_All[4]}
              ModalImage={ModalImage_All[4]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/JP_Website"}
            />
          </Flip>
          <Pulse>
            <ProjectCard
              Name={"Visual Website Optimization Example App"}
              Desc={"Implemented a website that provides a basic demo of how server-side works with VWO GO SDK with features to view A/B, Track, Feature Rollout and Feature Enabled testing with an option to view and verify the settings file from server."}
              Image={Image_All[5]}
              ModalImage={ModalImage_All[5]}
              DisabledButton={false}
              Github={"https://github.com/decabits/vwo-golang-example-app"}
            />
          </Pulse>
          <Pulse>
            <ProjectCard
              Name={"Virtual Dashboard"}
              Desc={"A React based Virtual Dashboard to demonstrate data for Airport Authority of India in order to provide a visual tool to keep a record of the footfall among various amneties and shops around the top 7 airports of India. Made with an idea of improving layout of future airports made in India to utilize space more efficiently. ( Project is Incomplete )"}
              Image={Image_All[6]}
              ModalImage={ModalImage_All[6]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Visual-Dashboard"}
            />
          </Pulse>
          <Flip right>
            <ProjectCard
              Name={"Data Visualizer"}
              Desc={"A React based data analysis tool to visualize data into multiple types of graphs. Graphs used are based on Victory API for data visualization. Respective Website has Upto 10 types of graphs like Bar graphs, Stcaked graphs, Pie charts, Radial graphs, Line graphs, Area graphs, etc."}
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
              Desc={"A Single-page React based implementation of my first ever portfolio made by using styles from colorlib library. With sections like projects, skills and education to provide complete information about me to the viewer. What you are currently viewing is the Second implementation of my portfolio to make it better looking, Reactive and Responsive."}
              Image={Image_All[8]}
              ModalImage={ModalImage_All[8]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/Myportfolio"}
            />
          </Flip>
          <Flip bottom>
            <ProjectCard
              Name={"PVP Battle"}
              Desc={"A simple Python based textual game with 2 game modes, Single player and Multi Player. The Main motto of the player is to defeat the enemy using basic attacks , Magic or items in inventory. With different items having different Damage points and uses Magic points that can be revived using Potions "}
              Image={Image_All[9]}
              ModalImage={ModalImage_All[9]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/PvP_Battle"}
            />
          </Flip>
          <Flip bottom>
            <ProjectCard
              Name={"Background Generator"}
              Desc={"A React based data analysis tool to visualize data into multiple types of graphs. Graphs used are based on Victory API for data visualization. Respective Website has Upto 10 types of graphs like Bar graphs, Stcaked graphs, Pie charts, Radial graphs, Line graphs, Area graphs, etc."}
              Image={Image_All[10]}
              ModalImage={ModalImage_All[10]}
              DisabledButton={false}
              Github={"https://github.com/vaibhavsethia/BackGround-Generator"}
            />
          </Flip>
          <Flip right>
            <ProjectCard
              Name={"Megamine"}
              Desc={"A Multi-page ReactJs based website made using Ant Design for frontend and AWS, Twitch API, Google API, Stripe API, etc for backend services. It used Technologies like ReactJs, Ant Design, Tachyons, NodeJs, Figma, React-Reveal, AWS, Postman, REST API, GraphQl, NPM and many other packages for small tasks."}
              Image={Image_All[11]}
              ModalImage={ModalImage_All[11]}
              DisabledButton={false}
              Github={"https://www.megamine.net/"}
            />
          </Flip>
        </Row>
      </div>
    );
  }
}

export default ProjectsAll;
