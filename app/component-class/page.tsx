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
    console.log("Se montó el componente");
    // Ideal para realizar operaciones después de que el componente ha sido insertado en el DOM
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("El componente se actualizó");
    // Se llama después de que el componente se haya actualizado, tanto por cambios de estado como por cambios de propiedades
    console.log("Estado previo:", prevState);
    console.log("Estado actual:", this.state);
  }

  componentWillUnmount() {
    console.log("Se desmontará el componente");
    // Se llama justo antes de que el componente sea eliminado del DOM
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Se verificará si el componente debe actualizarse");
    // Retorna true si el componente debe actualizarse, y false si no
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
        <Header>Componente basado en class</Header>
        <h1>Este es un componente basado en clases</h1>
        <div>
          <p>Contador: {this.state.count}</p>
          <button onClick={this.handleIncrement}>Incrementar</button>
        </div>
      </>
    );
  }
}

export default HelloWorld;
