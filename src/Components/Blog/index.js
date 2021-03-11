import { Row } from "antd";
import React, { Component } from "react";
import PageHeader from "../../Utils/PageHeader";
import SongCard from "../../Utils/SongCard";
import SongOfTheMonth from "./SongOfTheMonth.mp3";
import AlbumCover from "./September.jpg";
import BlogCard from "./BlogCard";
import Blog_1 from "../../Images/Blog/Blog_1.jpg";
import Blog_2 from "../../Images/Blog/Blog_2.jpg";
import Blog_3 from "../../Images/Blog/Blog_3.png";


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
        <Row justify="center">
          <BlogCard
            Image={Blog_2}
            Link="https://vaibhavsethia1998.medium.com/creating-a-custom-authenticator-using-aws-amplify-cognito-and-react-js-60f24d1c84aa"
            Title="Creating a Custom Authenticator using AWS Amplify, Cognito and React.js"
            Desc={
              <div>
              <p>
                AWS Amplify includes a wide variety of open-source libraries and drag-and-drop UI 
                components developers can use as building blocks for their apps. It also has a built-in 
                CLI you can use to build your backend. One of the pre-built components in Amplify is 
                Authenticator which we are gonna use for making the Authentication system.
              </p>
              <p>
                This is the simplest and most efficient way to use AWS Authenticator and 
                Cognito for a fully customizable authentication system. For the sake of keeping the 
                code clean and the article small, a simple CSS has been used although it can be 
                integrated with any UI or CSS framework.
              </p>
            </div>
            }
          />
          <BlogCard
            Image={Blog_3}
            Link=""
            Title="How to use Twitch API endpoints with React"
            Desc={
              <div>
              <p>
                The Twitch API provides tools for developing integrations with Twitch. 
                With this you can get access to Twitch's user and viewer data along with API 
                endpoints dedicated to accurate fetch results.
              </p>
              <p>
              Some of the endpoints we are going to use are: 
              <br />
              1. Get Games<br />
              2. Get Top Streams<br />
              3. Get User<br />
              4. Create User Follow<br />
              </p>
            </div>
            }
          />
        </Row>
      </div>
    );
  }
}

export default Blog;
