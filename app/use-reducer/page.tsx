"use client";

import Header from "@/components/Header/Header";
import { useReducer } from "react";
import { reducer } from "./reducer";

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <Header>useReducer</Header>
      <p>counter: {state.count} </p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>{" "}
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
    </>
  );
}
