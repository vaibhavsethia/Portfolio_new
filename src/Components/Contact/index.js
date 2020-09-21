import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import {
  GooglePlusOutlined,
  MailOutlined,
  BugOutlined,
  GithubOutlined,
  BranchesOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Divider, Row, Col, Input, Form, Button, InputNumber } from "antd";

import "./Contact.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export class Contact extends Component {
  onFinish = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="tc">
        <PageHeader Title={<span>Contact</span>} />
        <div>
          <Row justify="center">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Divider orientation="center" plain>
                <span className="f2">
                  <GooglePlusOutlined />
                </span>
              </Divider>
            </Col>
          </Row>
          <div className="mail-id-contact">vaibhavsethia1998@gmail.com</div>
          <Row justify="center">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Divider orientation="center" plain>
                <span className="f2">
                  <BugOutlined />
                </span>
              </Divider>
            </Col>
          </Row>
          <div className="bug-report-contact">
            {" "}
            <span>Found a Bug ?? Fork, Debug and Make a PR</span>
            <BranchesOutlined />
            <br />
            <a
              style={{ color: "#242526" }}
              href="https://github.com/vaibhavsethia/Portfolio_new"
            >
              Here{" "}
              <ArrowRightOutlined className="f3" style={{ color: "black" }} />{" "}
              <GithubOutlined className="grow f2" />
            </a>
          </div>
          <Row justify="center" className="pt3">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Divider orientation="center" plain>
                <span className="f2">
                  <MailOutlined />
                </span>
              </Divider>
            </Col>
          </Row>
          <Row justify="center" className="pt3">
            <Col xl={10} lg={10} md={12} sm={24} xs={24}>
              <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish}
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Introduction">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
