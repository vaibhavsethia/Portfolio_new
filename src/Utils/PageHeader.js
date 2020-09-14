import React, { Component } from 'react'
import Rotate from 'react-reveal/Rotate';

import './Utils.css'

export class PageHeader extends Component {
  render() {
    return (
      <div className="tc pa3 mb2 header">
        <Rotate top left cascade>{this.props.Title}</Rotate>
      </div>
    )
  }
}

export default PageHeader
