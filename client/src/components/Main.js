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
    e.preventDefault();
    this.setState(
      (state) => ({
        name: state.input,
      }),
      this.props.getRoomDetails(this.props.name.name)
    );
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.setRoomName(this.state.name);
  };

  handleClick2 = (e) => {
    e.preventDefault();
    this.props.getRoomDetails(this.props.name.name);
  };

  render() {
    // console.log("hello", this.state.name, this.props.name.name);
    return (
      <div>
        <h2>Type a room name of your choice</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button>Submit</button>
        </form>

        <button onClick={this.handleClick}>Submit2</button>

        <button onClick={this.handleClick2}>
          <Link
            //   key={"link" + this.state.name}
            to={`/room/${this.state.name}`}
          >
            GO
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
