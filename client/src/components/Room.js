import React, { Component } from "react";
import { OTSession, OTStreams } from "opentok-react";
import ConnectionStatus from "./ConnectionStatus";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Publisher from "./Publisher";
import Subscriber from "./Subscriber";



class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      connected: false,
    };

    this.otSessionRef = React.createRef();

    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      },
      streamCreated: (event) => {
        console.log("Stream created!", event);
      },
      streamDestroyed: (event) => {
        console.log("Stream destroyed!", event);
      },
    };
  }

  sendSignal = () => {

    const { connected } = this.state;
    if (connected) {
      this.otSessionRef.current.signal({
        apiKey:"",
        sessionId:"",
        token:""
      });
    }
  };

  handleDisconnect = () => {
    console.log("disconnecting...");
    this.sendSignal();
  };

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    const { roomDetails } = this.props.roomDetails;

    if (this.props.roomDetails.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else if (this.props.roomDetails.roomDetails["apiKey"]) {
      return (
        <div>
          <OTSession
            apiKey={roomDetails.apiKey}
            sessionId={roomDetails.sessionId}
            token={roomDetails.token}
            eventHandlers={this.sessionEvents}
            onError={this.onError}
            ref={this.otSessionRef}
          >
            {this.state.error ? <div>{this.state.error}</div> : null}
            <ConnectionStatus
              connected={this.state.connected}
              handleDisconnect={this.handleDisconnect}
              className="call-button"
            />
            <div className="chatWindows">
              <Publisher />
              <OTStreams>
                <Subscriber />
              </OTStreams>
            </div>
          </OTSession>
        </div>
      );
    } else {
      return (
        <div>
          <p>Call ended</p>
        </div>
      );
    }
  }
}

// specify types for type-check
Room.propTypes = {
  roomDetails: PropTypes.object.isRequired
};

// map state from store to props of the component
const mapStateToProps = (state) => ({
  roomDetails: state.roomDetails
})

export default connect(mapStateToProps, {})(Room);
