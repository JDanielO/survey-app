import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="ui menu">
        <div class="header item">Our Company</div>
        <a class="item">About Us</a>
        <a class="item">Jobs</a>
        <a class="item">Locations</a>
      </div>
    );
  }
}

export default Header;
