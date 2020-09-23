import React, { Component } from 'react'
import PageHeader from '../../Utils/PageHeader'
import ReactPlayer from 'react-player'

export class Blog extends Component {
  render() {
    return (
      <div>
        <PageHeader Title={<span>Blog</span>} />
        <ReactPlayer url="https://www.youtube.com/watch?v=olGSAVOkkTI" />
      </div>
    )
  }
}

export default Blog
