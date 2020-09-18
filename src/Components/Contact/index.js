import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import { GooglePlusOutlined, MailOutlined } from "@ant-design/icons";
import { Divider, Row, Col, Input, Form, Button } from "antd";

import "./Contact.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  // eslint-disable-next-line
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line
    email: "${label} is not validate email!",
    // eslint-disable-next-line
    number: "${label} is not a validate number!",
  },
  number: {
    // eslint-disable-next-line
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
          <Row>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}></Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Divider orientation="center" plain>
                <span className="f2">
                  <GooglePlusOutlined />
                </span>
              </Divider>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}></Col>
          </Row>
          <span className="mail-id-contact">vaibhavsethia1998@gmail.com</span>
          <Row className="pt3">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}></Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <Divider orientation="center" plain>
                <span className="f2">
                  <MailOutlined />
                </span>
              </Divider>
            </Col>
            <Col xl={8} lg={8} md={8} sm={8} xs={8}></Col>
          </Row>
          <Row className="pt3">
            <Col xl={7} lg={7} md={6} sm={0} xs={0}></Col>
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
                  rules={[{ type: "email", required: true }]}
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
            <Col xl={7} lg={7} md={6} sm={0} xs={0}></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
