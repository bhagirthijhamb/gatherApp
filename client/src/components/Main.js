import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setRoomName, getRoomDetails } from './../actions/actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      name: "",
      error: null,
      connected: false,
    };    
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.input)
    e.preventDefault();
    this.setState(
      (state) => ({
        name: state.input,
      }),
      () => this.props.setRoomName(this.state.name)
    );
  };

  handleClick = (e) => {
    console.log("hello", this.state.name, this.props.name.name);
    e.preventDefault();
    this.props.getRoomDetails(this.props.name.name);
  };

  render() {
    return (
      <div className="main">
        <h2>Create a meeting</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter session id"
            value={this.state.input}
          />
          <button>Create Session</button>
        </form>

        <button onClick={this.handleClick}>
          <Link
            //   key={"link" + this.state.name}
            to={`/room/${this.state.name}`}
          >
            Connect 
          </Link>
        </button>
      </div>
    );
  }
}

// specify types for type-check
Main.propTypes = {
  name: PropTypes.string.isRequired,
  setRoomName: PropTypes.func.isRequired,
  getRoomDetails: PropTypes.func.isRequired,
};

// map state from store to props of the component
const mapStateToProps = (state) => ({
  name: state.name
});

export default connect(mapStateToProps, { setRoomName, getRoomDetails })(Main);

// export default Main;
