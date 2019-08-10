import React from "react";
import { connect } from "react-redux";

import { decrementCounter, incrementCounter, setText } from "./appActions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleOnTextChange = this.handleOnTextChange.bind(this);
    this.handleClearText = this.handleClearText.bind(this);
  }

  handleIncrement() {
    this.props.incrementCounter();
  }

  handleDecrement() {
    this.props.decrementCounter();
  }

  handleOnTextChange(event) {
    this.props.setText(event.target.value);
  }

  handleClearText() {
    this.props.setText("");
  }

  render() {
    return (
      <div>
        <h1>react-redux-simple-example</h1>
        <h2>My Counter = {this.props.myCounter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <h2>My Text = {this.props.myText}</h2>
        <input
          type="text"
          value={this.props.myText}
          onChange={this.handleOnTextChange}
        />
        <button onClick={this.handleClearText}>Clear Text</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myCounter: state.myCounter,
  myText: state.myText
});

const mapDispatchToProps = {
  decrementCounter,
  incrementCounter,
  setText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
