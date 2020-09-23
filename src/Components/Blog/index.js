import { Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import SongCard from "../../Utils/SongCard";
import SongOfTheMonth from "./SongOfTheMonth.mp3";
import AlbumCover from './September.jpg'
export class Blog extends Component {
  render() {
    return (
      <div>
        <PageHeader Title={<span>Blog</span>} />
        <PageHeader Title={<span>Song of the Month</span>} />
        {/* <Row justify="center">
          <SongCard 
          Album="Fine Line"
          Song="Falling"
          Image={AlbumCover}
          SongFile={SongOfTheMonth}
          YT="https://www.youtube.com/watch?v=olGSAVOkkTI"
          Singer="Harry Styles"
          />
        </Row> */}
      </div>
    );
  }
}

export default Blog;
