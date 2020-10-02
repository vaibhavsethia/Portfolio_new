import React, { Component } from "react";
import { Button, Card, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import "./Projects.css";
import Modal from "antd/lib/modal/Modal";

export class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
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
          <div className="card-text tc" style={{ width: "250px" }}>
            <div className="card-title pa2 tc">{this.props.Name}</div>
            <Button className="know-more" onClick={this.showModal}>
              Know More
            </Button>
            <Modal
              onCancel={this.handleCancel}
              title={
                <span>
                  <img src={this.props.ModalImage}></img>
                </span>
              }
              footer={null}
              visible={this.state.visible}
            >
              <div className="tr modal-content-title pt2 pb3 mr3">
                {this.props.Name}
              </div>
              <p className="pa2 pr5 pl3 modal-content-desc">
                {this.props.Desc}
              </p>
              <div className="tr mr3 pb2">
                <Button
                  className="github-button"
                  disabled={this.props.DisabledButton}
                  href={this.props.Github}
                  target="_blank"
                >
                  <GithubOutlined />
                  View on Github
                </Button>
              </div>
            </Modal>
          </div>
        </Col>
      </div>
    );
  }
}

export default ProjectCard;
