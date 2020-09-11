import React, { Component } from 'react'
import { Layout } from 'antd';
import { Switch, Route } from "react-router-dom";

import SideMenu from './Components/SideMenu'

import './App.css';
import Hero from './Components/Hero';

const { Header, Content, Footer, Sider } = Layout;

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isCollapsed: false,
    }
  }

  onCollapse = isCollapsed => {
    this.setState({ isCollapsed });
  };
  
  BringInView = () => {
    window.scrollBy({
      top: 1200,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div>
        <Hero View={this.BringInView}></Hero>
        <Layout  style={{ minHeight: '100vh' }}>
          <Sider width={300} collapsible collapsed={this.state.isCollapsed} onCollapse={this.onCollapse}>
          <SideMenu collapsed={this.state.isCollapsed} />
          </Sider>
        </Layout>
      </div>
    )
  }
}

export default App;
