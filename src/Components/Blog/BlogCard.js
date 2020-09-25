import React, { Component } from "react";
import { Button, Card, Col } from "antd";
import { MediumOutlined } from "@ant-design/icons";
import Fade from "react-reveal/Fade";

import "./Blog.css";

export class BlogCard extends Component {
  render() {
    return (
      <Col className="tc pa3 ml2 mr2" xl={11} lg={11} md={11} sm={24}>
        <Fade top>
          <Card
            className="card"
            hoverable
            cover={
              <img
                className="tc"
                style={{ width: "100%" }}
                alt="example"
                src={this.props.Image}
              />
            }
          >
            <div className="blog-title pa3 tr">{this.props.Title}</div>
            <div className="tr blog-text pr3 pl3">{this.props.Desc}</div>
            <Button className="mb3">
              <MediumOutlined className="blog-icon" />
              Read More
            </Button>
          </Card>
        </Fade>
      </Col>
    );
  }
}

export default BlogCard;
