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
      error: null
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
      () => this.props.setRoomName(this.state.name)
    );
    this.setState({
      input: ''
    })
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.getRoomDetails(this.props.name.name);
  };

  render() {
    const { name } = this.props.name;
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
          <button className='createSession'>Create Session</button>
        </form>

      { name ?         
        <button onClick={this.handleClick}>
          <Link to={`/room/${this.state.name}`} style={{color: '#fff', textDecoration: 'none'}}>
            Connect 
          </Link>
        </button> :
        ''
        }
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
