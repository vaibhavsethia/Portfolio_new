import React, { Component } from "react";
import { Carousel, Tooltip } from "antd";
import ReactAudioPlayer from "react-audio-player";
import Flip from "react-reveal/Flip";

import "../Components/Blog/Blog.css";
import { YoutubeOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

export class SongCard extends Component {
  state = {
    dotPosition: "top",
  };
  render() {
    return (
      <Flip top>
        <div className="w5">
          <Carousel className="shadow-2" effect="fade" dotPosition="top">
            <div>
              <div className="song-card pr2">
                <Tooltip
                  className="info-icon"
                  title="Wait for the player to reload"
                >
                  <ExclamationCircleOutlined />
                </Tooltip>
                <span className="small-text-card">Album :</span>
                <span className="big-text-card">{this.props.Album}</span>
                <br />
                <span className="small-text-card">Song :</span>
                <span className="big-text-card">{this.props.Song}</span>
                <br />
                <span className="small-text-card">Singer :</span>
                <span className="big-text-card">{this.props.Singer}</span>
                <br />
                <a href={this.props.YT}>
                  <YoutubeOutlined className="yt-icon" />
                </a>
              </div>
              <ReactAudioPlayer
                src={this.props.SongFile}
                autoPlay={true}
                controls
              />
            </div>
          </Carousel>
        </div>
      </Flip>
    );
  }
}

export default SongCard;
