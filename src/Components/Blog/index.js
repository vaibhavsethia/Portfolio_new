import { Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import SongCard from "../../Utils/SongCard";
import SongOfTheMonth from "./SongOfTheMonth.mp3";
import AlbumCover from "./September.jpg";
import BlogCard from "./BlogCard";
import Blog_1 from "../../Images/Blog/Blog_1.jpg";

export class Blog extends Component {
  render() {
    return (
      <div>
        <PageHeader Title={<span>Blog</span>} />
        <Row justify="center">
          <BlogCard
            Image={Blog_1}
            Link="https://medium.com/@vaibhavsethia1998/data-visualization-in-react-using-victory-part-1-54542960f538"
            Title="Data Visualization in React using Victory (Part 1)"
            Desc={
              <div>
                <p>
                  React is one of the trendiest frameworks for building
                  single-page UI-first applications. Its popularity is
                  increasing for the second year in a row and there are reasons
                  for that.
                </p>
                <p>
                  Victory is a ReactJs Library. It is a collection of composable
                  and reusable components for building interactive data
                  visualizations.
                </p>
              </div>
            }
          />
          <BlogCard
            Image={Blog_1}
            Link="https://medium.com/@vaibhavsethia1998/data-visualization-in-react-using-victory-part-2-a006f4c6b659"
            Title="Data Visualization in React using Victory (Part 2)"
            Desc={
              <div>
                <p>
                  In the last article we discussed about the basic properties
                  needed to implement a Bar Graph using Victory. This article
                  will be all about customizing the Bar graph and adding
                  animations to it.
                </p>
                <p>
                  Victory charts come with a default ‘grayscale’ theme so that
                  all components look clean and consistent. Let’s switch it up
                  with the Victory provided ‘material’ theme.
                </p>
              </div>
            }
          />
        </Row>
        <PageHeader Title={<span>Song of the Month</span>} />
        <Row justify="center" className="pb2 mb2">
          <SongCard
            Album="Fine Line"
            Song="Falling"
            Image={AlbumCover}
            SongFile={SongOfTheMonth}
            YT="https://www.youtube.com/watch?v=olGSAVOkkTI"
            Singer="Harry Styles"
          />
        </Row>
      </div>
    );
  }
}

export default Blog;
