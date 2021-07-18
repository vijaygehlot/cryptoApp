import React, { Component } from "react";
import loderIcon from "../assests/images/finalx.gif";
import "../styles/loader.scss";
export default class Loader extends Component {
  render() {
    return (
      <div class="loader-section">
        <img src={loderIcon} alt="loader icon" />
      </div>
    );
  }
}
