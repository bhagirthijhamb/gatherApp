import React, { Component } from "react";

import { OTPublisher } from "opentok-react";
// import RadioButtons from "./RadioButtons";
import { onError, togglePublisherAudio, togglePublisherVideo } from './../actions/actions'
import CheckBox from "./CheckBox";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

class Publisher extends Component {

  setAudio = () => {
    this.props.togglePublisherAudio();
  };

  setVideo = () => {
    this.props.togglePublisherVideo();
  };

  onError = (err) => {
    this.props.onError(err.message);
  };

  render() {
    console.log(this.props.publisher);
    const { error, audio, video } = this.props.publisher;
    console.log(audio, video);
    return (
      <div>
        {error ? <div>{error}</div> : null}
        <div className="publisherContainer">
          <OTPublisher
            properties={{
              publishAudio: audio,
              publishVideo: video,
              width: "100%",
              height: "100%",
            }}
            onError={this.onError}
          />
        </div>
        <div className="controls">
          <div className="audio-controls">
            <FontAwesomeIcon icon={faMicrophone} className="audio" />
            <CheckBox
              // label="Publish Audio"
              initialChecked={audio}
              onChange={this.setAudio}
            />
          </div>

          <div className="video-controls">
            <FontAwesomeIcon icon={faVideo} className="video" />
            <CheckBox
              // label="Publish Video"
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
