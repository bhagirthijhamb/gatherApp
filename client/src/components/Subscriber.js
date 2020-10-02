import React, { Component } from "react";

import { OTSubscriber } from "opentok-react";
import CheckBox from "./CheckBox";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  onError,
  toggleSubscriberAudio,
  toggleSubscriberVideo,
} from "./../actions/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faVideoSlash,
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

class Subscriber extends Component {

  setAudio = () => {
    this.props.toggleSubscriberAudio();
  };

  setVideo = () => {
    this.props.toggleSubscriberVideo();
  };

  onError = (err) => {
    // this.setState({ error: `Failed to subscribe: ${err.message}` });
    this.props.onError(err.message)
  };

  render() {
     const { error, audio, video } = this.props.subscriber;
    return (
      <div>
        {error ? <div>{error}</div> : null}
        <div className="subscriberContainer">
          <OTSubscriber
            properties={{
              subscribeToAudio: audio,
              subscribeToVideo: video,
              width: "100%",
              height: "100%",
            }}
            onError={this.onError}
            retry={true}
            maxRetryAttempts={3}
            retryAttemptTimeout={2000}
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
              label="Subscribe to Audio"
              initialChecked={audio}
              onChange={this.setAudio}
            />
          </div>
          <div className="audio-controls">
            {video ? (
              <FontAwesomeIcon icon={faVideo} className="video" />
            ) : (
              <FontAwesomeIcon icon={faVideoSlash} className="video" />
            )}
            <CheckBox
              label="Subscribe to Video"
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
Subscriber.propTypes = {
  subscriber: PropTypes.object.isRequired
};

// map state from store to props of the component
const mapStateToProps = (state) => ({
  subscriber: state.subscriber
})

export default connect(mapStateToProps, {
  onError,
  toggleSubscriberAudio,
  toggleSubscriberVideo,
 })(Subscriber);
