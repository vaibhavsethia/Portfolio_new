import React, { Component } from 'react'
import PageHeader from '../../Utils/PageHeader'
import { Tabs, Carousel } from 'antd';

import './Projects.css'

const { TabPane } = Tabs;
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  margin: '10px 120px',
  background: '#364d79',
};

export class Projects extends Component {
  render() {
    return (
      <div id="Projs" className="project-section">
        <PageHeader 
          Title={<span>Projects</span>}
        />
        <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All" key="1">
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
          </TabPane>
          <TabPane tab="Golang" key="2">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="React-Js" key="3">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Python" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Projects
