import React, { Component } from 'react'
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Image, Menu } from 'antd'

import Img from '../../Images/Image_1.jpeg'

import './SideMenu.css'

const { SubMenu } = Menu;

export class SideMenu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       IsCollapsed: false,
    }
  }
  
  render() {
    var wide, nameClass, tagClass;
    if(this.props.collapsed){
      wide = 70;
      nameClass = "disp-none"
      tagClass = "disp-none"
    } else{
      wide = 250;
      nameClass = "name"
      tagClass = "tag"
    }

    return (
      <div className="tc">
        <Image
          className="pt3 pb3 br-100 image"
          alt="Profile Image"
          height
          width={wide}
          src={Img}
        />
        <div className={nameClass}>
          Vaibhav Sethia
        </div>
        <div className={tagClass}>
          Full Stack Developer
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
      </div>
    )
  }
}

export default SideMenu
