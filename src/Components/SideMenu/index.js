import React, { Component } from "react";
import {
  CodeOutlined,
  BarsOutlined,
  UserOutlined,
  FormOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Fade from "react-reveal/Fade";

import Img from "../../Images/Profile/Image_1.jpeg";

import "./SideMenu.css";

const { SubMenu } = Menu;

export class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsCollapsed: false,
    };
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
          </Menu.Item>
          <Menu.Item key="2" icon={<BarsOutlined />}>
            <Fade left cascade>
              <span className="menu-list">TIMELINE</span>
            </Fade>
          </Menu.Item>
          <Menu.Item key="3" icon={<CodeOutlined />}>
            <Fade left cascade>
              <span className="menu-list">PROJECTS</span>
            </Fade>
          </Menu.Item>
          <Menu.Item key="4" icon={<FormOutlined />}>
            <Fade left cascade>
              <span className="menu-list">BLOG</span>
            </Fade>
          </Menu.Item>
          <Menu.Item key="5" icon={<PhoneOutlined />}>
            <Fade left cascade>
              <span className="menu-list">CONTACT</span>
            </Fade>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
