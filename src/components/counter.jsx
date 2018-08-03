import React, { Component } from "react";

class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.handelIncrement = this.handelIncrement.bind(this);
  //   }

  handleTagClick = tagObj => {
    alert(tagObj.tag + " Clicked");
  };

  render() {
    return (
      <div>
        <span
          style={{ fontSize: 14, width: 40 }}
          className={this.formatBadgeColor()}
        >
          {this.formatCount()}
        </span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => this.props.onIncrement(this.props.counter.id)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* <ul className="list-group w-25">
          {this.state.tags.map(tag => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center m-2"
              key={tag}
              onClick={() => this.handleTagClick({ tag: tag })}
            >
              <button className="btn btn-info"> + </button>
              {tag}
              <span class="badge badge-primary badge-pill">4</span>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }

  formatBadgeColor() {
    let className = "badge m-3 badge-";
    className += this.props.counter.value === 0 ? "warning" : "info";
    return className;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
