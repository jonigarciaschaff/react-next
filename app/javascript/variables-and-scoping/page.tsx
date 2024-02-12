"use client";

import Header from "@/components/Header/Header";

export const hoisting = () => {
  // console.log(varNum) --> undefined
  // console.log(letNum) --> reference Error
  // var varNum = 5
  // var letNum = 5
  // console.log(varNum) --> 5
  // console.log(letNum) --> 5
};

export default function Home() {
  return (
    <>
      <Header>Variables and scoping</Header>
      <ul>
        <li>
          <b>let:</b>{" "}
          <span>
            The let declaration declares re-assignable, block-scoped local
            variables, optionally initializing each to a value.
          </span>
        </li>{" "}
        <li>
          <b>var:</b>{" "}
          <span>
            The var statement declares function-scoped or globally-scoped
            variables, optionally initializing each to a value.
          </span>
        </li>
        <li>
          <b>const:</b>{" "}
          <span>
            The const declaration declares block-scoped local variables. The
            value of a constant can't be changed
          </span>
        </li>
        <li>
          <b>Block scope</b>{" "}
          <span>
            The behavior of a variable that is only accessible inside of the
            block it was defined. Most of the time, the block will simply be the
            nearest pair of curly braces to the declaration.
          </span>
        </li>
        <li>
          <b>Function Scope</b>{" "}
          <span>
            The behavior of a variable that is accessible anywhere inside of the
            function it was defined.
          </span>
        </li>
        <li>
          <b>Hoisting</b>{" "}
          <span>
            The behavior of a variable/function that is accessible anywhere
            inside of the function it was defined.
          </span>
        </li>
      </ul>
    </>
  );
}
