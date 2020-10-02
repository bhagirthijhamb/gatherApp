import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className="navBar-left">Gather</div>
        <div className="navBar-right">
          <ul>
            <li className="home">
              <Link to={`/`} >
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="language">
              English <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
