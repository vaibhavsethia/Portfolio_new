import React, { Component } from "react";
import {
  CodeOutlined,
  BarsOutlined,
  UserOutlined,
  FormOutlined,
  PhoneOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Img from "../../Images/Profile/Image_1.jpeg";

import "./SideMenu.css";

export class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsCollapsed: false,
    };
  }

  ScrollToProjects() {
    window.location.href = "/Portfolio_new";
    document.getElementById("projects-section").scrollIntoView();
  }

  ScrollToTimeline() {
    window.location.href = "/Portfolio_new";
    document.getElementById("timeline-section").scrollIntoView();
  }

  render() {
    var wide, nameClass, tagClass;
    if (this.props.collapsed) {
      wide = 70;
      nameClass = "disp-none";
      tagClass = "disp-none";
    } else {
      wide = 250;
      nameClass = "name";
      tagClass = "tag pb2";
    }

    return (
      <div className="tc">
        <Image
          className="pt3 pb3 br-100 image"
          alt="Profile Image"
          height
          width={wide}
          src={Img}
        />
        <div className={nameClass}>Vaibhav Sethia</div>
        <div className={tagClass}>Full Stack Developer</div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined className="side-icon" />}>
            <Fade left cascade>
              <span className="menu-list">ABOUT</span>
            </Fade>
            <Link to="/Portfolio_new/" />
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<BarsOutlined />}>
            <Fade left cascade>
              <span className="menu-list">PROJECTS</span>
            </Fade>
            <Link to="/Portfolio_new/" />
          </Menu.Item>
          <Menu.Item key="3" icon={<CodeOutlined />}>
            <Fade left cascade>
              <span className="menu-list">TIMELINE</span>
            </Fade>
            <Link to="/Portfolio_new/" />
          </Menu.Item> */}
          <Menu.Item key="4" icon={<FormOutlined />}>
            <Fade left cascade>
              <span className="menu-list">BLOG</span>
            </Fade>
            <Link to="/Portfolio_new/blog" />
          </Menu.Item>
          <Menu.Item key="5" icon={<PhoneOutlined />}>
            <Fade left cascade>
              <span className="menu-list">CONTACT</span>
            </Fade>
            <Link to="/Portfolio_new/contact" />
          </Menu.Item>
          <Menu.Item key="6" icon={<DownloadOutlined />}>
            <Fade left cascade>
              <a
                href="https://drive.google.com/file/d/1hFvwZyQ3TnA85LYx3V5QdMWVQmUcvFX-/view?usp=sharing"
                className="menu-list"
                target="_blank"
              >
                RESUME
              </a>
            </Fade>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
