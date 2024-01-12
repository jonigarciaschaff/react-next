"use client";

import Header from "@/components/Header/Header";
import { Component } from "react";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("The component was mounted");
    // Ideal for performing operations after the component has been inserted into the DOM
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("The component was updated");
    // Called after the component has been updated, both for state changes and property changes    console.log("prev state:", prevState);
    console.log("current state:", this.state);
  }

  componentWillUnmount() {
    console.log("The component will be unmounted");
    // Called just before the component is removed from the DOM
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("It will check if the component needs to be updated");
    // Returns true if the component should be updated, and false if not
    return nextState.count !== this.state.count;
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <Header>Class-based component</Header>
        <h1>This is a class based component.</h1>
        <div>
          <p>Counter: {this.state.count}</p>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
      </>
    );
  }
}

export default HelloWorld;
