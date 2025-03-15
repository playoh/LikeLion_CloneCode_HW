import React, { Component } from "react";
import style from "../components/styles/fter.css";
// import PropTypes from "prop-types";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="Footer_Container">
          <h4>FOOTER</h4>
          <p>Powered by
            <a href="https://www.w3schools.com/w3css/default.asp">
            w3.css
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;