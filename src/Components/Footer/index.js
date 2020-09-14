import React, { Component } from "react";
import {
  GithubOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  UpOutlined
} from "@ant-design/icons";
import { BackTop } from "antd";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer-section tc">
        <BackTop>
          <div className="back-top-footer">
            <UpOutlined />
          </div>
        </BackTop>
        <br />
        <a
          href="https://github.com/vaibhavsethia"
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.facebook.com/coolvaibhavsethia"
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
        >
          <FacebookOutlined />
        </a>
        <a
          href="https://www.instagram.com/vaibhav_9_8/"
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/vaibhav-sethia-4711b8145/"
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://medium.com/@vaibhavsethia1998"
          className="icons-footer pa2 f3 fw1 pt2 pb1"
          style={{ color: "white" }}
        >
          <MediumOutlined />
        </a>
        <br />
        <span className="cpright">Vaibhav Sethia © 2020</span>
      </div>
    );
  }
}

export default Footer;
