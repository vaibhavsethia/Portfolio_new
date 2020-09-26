import React, { Component } from "react";
import { Alert } from "antd";

export class Timeline extends Component {
  render() {
    return (
      <div>
        Timeline
        <Alert
          classname="pa4"
          message="Section still in Building phase"
          type="warning"
        />
      </div>
    );
  }
}

export default Timeline;
