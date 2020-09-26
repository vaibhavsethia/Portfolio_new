import React, { Component } from 'react'
import PageHeader from "../../Utils/PageHeader";
import TimeLineElements from './TimeLineElements'
export class Timeline extends Component {
  render() {
    return (
      <div className="pb4">
        <PageHeader Title={<span>Timeline</span>} />
        <TimeLineElements />
      </div>
    )
  }
}

export default Timeline
