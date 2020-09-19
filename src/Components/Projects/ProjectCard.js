import React, { Component } from "react";
import { Button, Card, Col } from "antd";

import STL_1 from "../../Images/Projects/STL_1.jpg";
import "./Projects.css";
import Modal from "antd/lib/modal/Modal";

const { Meta } = Card;

export class ProjectCard extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div id="card-element">
        <Col lg={6} md={2} sm={1}>
          <Card
            hoverable
            className="project card-cover"
            style={{ height: 300, width: 250 }}
            cover={<img alt="project_template_image" src={this.props.Image} />}
          ></Card>
          <div className="card-text">
            <Button className="know-more" onClick={this.showModal}>
              Know More
            </Button>
            <Modal
              footer={null}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            ></Modal>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProjectCard;
