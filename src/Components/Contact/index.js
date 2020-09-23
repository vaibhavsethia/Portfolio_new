import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import {
  GooglePlusOutlined,
  MailOutlined,
  BugOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Divider, Row, Col, Input, Form, Button, InputNumber } from "antd";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

export class Contact extends Component {
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_t1jtskk",
        e.target,
        "user_F050N6xmveojNw94brXxp"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Could not send message!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  }

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
            <span>Found a Bug ?? </span>
            <br />
            Fork, Debug and Make a PR
            <br />
            <a
              style={{ color: "#242526" }}
              href="https://github.com/vaibhavsethia/Portfolio_new"
            >
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
          <Row justify="center" className="pt1 mb3 pb2">
            <Col className="tc" xl={12} lg={12} md={12} sm={24} xs={24}>
              <form className="contact-form" onSubmit={this.sendEmail}>
                <div className="form-label pa2 mb3 tl">
                  Name :{" "}
                  <Input
                    className="name-box"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-label pa2 mb3 tl">
                  Email :{" "}
                  <Input
                    className="mail-box"
                    type="email"
                    name="user_email"
                    placeholder="Enter your mailing address"
                    required
                  />{" "}
                </div>
                <div className="form-label pa2 mb3 tl">
                  Message :{" "}
                  <Input
                    className="message-box"
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <input
                  className="submit-button"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </Col>
          </Row>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
        </div>
      </div>
    );
  }
}

export default Contact;
