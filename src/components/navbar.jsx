import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav nav-tabs">
        <span className="nav-item active m-2">
          Cart
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalItemCount}
          </span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
