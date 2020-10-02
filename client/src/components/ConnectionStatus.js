import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { endCall } from './../actions/actions'

import PropTypes from "prop-types";
import { connect } from "react-redux";

class ConnectionStatus extends Component {
  constructor(props){
      super(props);
  }

  handleClick = () => {
    this.props.endCall()
  }
  
  render() {
    let status = this.props.connected;
    return (
      <div className="callIcon">
        {status ? (
          <FontAwesomeIcon
            icon={faPhone}
            className="call"
            onClick={this.handleClick}
          />
        ) : (
          <FontAwesomeIcon icon={faPhoneSlash} className="callSlash" />
        )}
      </div>
    );
  }
}


// specify types for type-check
ConnectionStatus.propTypes = {
  endCall: PropTypes.func.isRequired,
};

// map state from store to props of the component
const mapStateToProps = (state) => ({
  roomDetails: state.roomDetails
})

export default connect(mapStateToProps, {
  endCall
})(ConnectionStatus);
