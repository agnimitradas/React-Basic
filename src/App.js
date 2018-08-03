import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(
      counterElm => counterElm.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  handleIncrement = counterId => {
    console.log(counterId);
    const primaryCounters = this.state.counters.map(counterElm => {
      if (counterElm.id === counterId) counterElm.value += 1;
      return counterElm;
    });
    this.setState({ counters: primaryCounters });
  };

  handleReset = () => {
    const primaryCounters = this.state.counters.map(counterElm => {
      counterElm.value = 0;
      return counterElm;
    });
    this.setState({ counters: primaryCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalItemCount={
            this.state.counters.filter(elm => elm.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onDelete={counterId => this.handleDelete(counterId)}
            onIncrement={counterId => this.handleIncrement(counterId)}
            counters={this.state.counters}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
