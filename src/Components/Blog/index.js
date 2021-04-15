import { Row, Pagination } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import SongCard from "../../Utils/SongCard";
import SongOfTheMonth from "./SongOfTheMonth.mp3";
import AlbumCover from "./September.jpg";
import BlogCard from "./BlogCard";
import {Blogs} from "../../Utils/Constants";
import './Blog.css'


export class Blog extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      NumEachPage: 2,
      MinValue: 0,
      MaxValue: 2
    }
  }
  
  HandleChange = value => {
    this.setState({
      MinValue: (value - 1) * this.state.NumEachPage,
      MaxValue: value * this.state.NumEachPage
    });
  };

  render() {
    return (
      <div>
        <PageHeader Title={<span>Blog</span>} />
        <Row justify="center">
          {
            Blogs.slice(this.state.MinValue, this.state.MaxValue).map((blog, index) => {
              return(
                <BlogCard
                  key={index}
                  Image={blog.Image}
                  Link={blog.Link}
                  Title={blog.Title}
                  Para1={blog.Para1}
                  Para2={blog.Para2}
                />
              )
            })
          }
        </Row>
        <Pagination className="pagination tr" defaultCurrent={1} defaultPageSize={this.state.NumEachPage} total={Blogs.length} onChange={this.HandleChange} showSizeChanger={false}  />
      </div>
    );
  }
}

export default Blog;
