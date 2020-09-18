import React, { Component } from "react";
import { Col, Progress } from "antd";
import Rotate from "react-reveal/Rotate";

import "./About.css";

export class SkillCard extends Component {
  render() {
    var TopVal = false,
      BottomVal = false,
      LeftVal = false,
      RightVal = false;
    if (this.props.Align == "TopLeft") {
      TopVal = true;
      LeftVal = true;
    } else if (this.props.Align == "TopRight") {
      TopVal = true;
      RightVal = true;
    } else if (this.props.Align == "BottomLeft") {
      BottomVal = true;
      LeftVal = true;
    } else if (this.props.Align == "BottomRight") {
      BottomVal = true;
      RightVal = true;
    }

    return (
      <Col className="mb2 mt2" xl={4} lg={6} md={8} sm={12} xs={12}>
        <Rotate top={TopVal} bottom={BottomVal} left={LeftVal} right={RightVal}>
          <Progress
            strokeColor={this.props.Color}
            type="circle"
            percent={this.props.Percent}
            strokeWidth="4"
            format={(percent) => `${this.props.Skill}`}
          />
        </Rotate>
      </Col>
    );
  }
}

export default SkillCard;
