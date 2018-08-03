import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-secondary m-2 text-right"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={id => this.props.onDelete(id)}
            onIncrement={id => this.props.onIncrement(id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
