import React, { Component } from "react";
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
              <FontAwesomeIcon icon={faHome} />
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
