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
      connected: false
    };

    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      }
    };    
  }

  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    const { roomDetails } = this.props.roomDetails;
    console.log(this.props.roomDetails.roomDetails);
    console.log(this.props.roomDetails.roomDetails["apiKey"]);
    // if (Object.keys(this.props.roomDetails.roomDetails).length != 0) {
    if (this.props.roomDetails.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else if (this.props.roomDetails.roomDetails["apiKey"]) {
      return (
        <div>
          <OTSession
            apiKey={roomDetails.apiKey}
            sessionId={roomDetails.sessionId}
            token={roomDetails.token}
            eventHandlers={this.sessionEvents}
            onError={this.onError}
          >
            {this.state.error ? <div>{this.state.error}</div> : null}
            <ConnectionStatus connected={this.state.connected} />
            <Publisher />
            <OTStreams>
              <Subscriber />
            </OTStreams>
          </OTSession>
        </div>
      );
    } else {
      return (
        <div>
          <p>Still loading...</p>
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
