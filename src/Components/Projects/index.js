import React, { Component } from 'react'
import PageHeader from '../../Utils/PageHeader'
import { Tabs } from 'antd';

import './Projects.css'

const { TabPane } = Tabs;

export class Projects extends Component {
  render() {
    return (
      <div>
        <PageHeader 
          Title={<span>Projects</span>}
        />
        <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All" key="1">
            Content of Tab Pane 3
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
