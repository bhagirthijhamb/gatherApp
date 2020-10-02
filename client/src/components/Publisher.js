import React, { Component } from "react";

import { OTPublisher } from "opentok-react";
// import RadioButtons from "./RadioButtons";
import { onError, togglePublisherAudio, togglePublisherVideo } from './../actions/actions'
import CheckBox from "./CheckBox";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import RadioButtons from "./RadioButtons";

class Publisher extends Component {

  constructor(props){
    super(props)
    this.state = {
      videoSource: "camera"
    };
  }

  setAudio = () => {
    this.props.togglePublisherAudio();
  };

  setVideo = () => {
    this.props.togglePublisherVideo();
  };

  onError = (err) => {
    this.props.onError(err.message);
  };

  setVideoSource = (videoSource) => {
    this.setState({ videoSource });
  }

  render() {
    const { error, audio, video } = this.props.publisher;
    return (
      <div>
        {error ? <div>{error}</div> : null}
        <div className="radioButtons">
          <RadioButtons
            buttons={[
              {
                label: "Camera",
                value: "camera",
              },
              {
                label: "Screen",
                value: "screen",
              },
            ]}
            initialChecked={this.state.videoSource}
            onChange={this.setVideoSource}
          />
        </div>
        <div className="publisherContainer">
          <OTPublisher
            properties={{
              publishAudio: audio,
              publishVideo: video,
              width: "100%",
              height: "100%",
              videoSource:
                this.state.videoSource === "screen" ? "screen" : undefined,
            }}
            onError={this.onError}
          />
        </div>

        <div className="controls">
          <div className="audio-controls">
            {audio ? (
              <FontAwesomeIcon icon={faMicrophone} className="audio" />
            ) : (
              <FontAwesomeIcon icon={faMicrophoneSlash} className="audio" />
            )}
            <CheckBox
              label="Publish Audio"
              initialChecked={audio}
              onChange={this.setAudio}
            />
          </div>

          <div className="video-controls">
            {video ? (
              <FontAwesomeIcon icon={faVideo} className="video" />
            ) : (
              <FontAwesomeIcon icon={faVideoSlash} className="video" />
            )}
            <CheckBox
              label="Publish Video"
              initialChecked={video}
              onChange={this.setVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

// specify types for type-check
Publisher.propTypes = {
  publisher: PropTypes.object.isRequired
};

// map state from store to props of the component
const mapStateToProps = (state) => ({
  publisher: state.publisher
})

export default connect(mapStateToProps, {
  onError,
  togglePublisherAudio,
  togglePublisherVideo,
 })(Publisher);
