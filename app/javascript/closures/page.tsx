"use client";

import Header from "@/components/Header/Header";
import { useEffect } from "react";

export function outerFunction() {
  // A closure gives you access to an outer function's scope from an inner function.

  let outerVariable = "I am outer!";

  function innerFunction() {
    let innerVariable = "I am inner!";
    console.log(innerVariable); // Output: I am inner!
    console.log(outerVariable); // Output: I am outer!
  }

  innerFunction();
}

export const example = () => {
  const num = 5;
  // First look to see if it is created in the function and if not, if it exists in the parent.
  const logNum = (num) => {
    console.log(num); // 10
  };

  logNum(10);
  console.log(num); // 5
};

export const example2 = () => {
  let outerVariable = 0;

  function sum() {
    outerVariable++;
  }

  function log() {
    console.log(outerVariable);
  }

  return { sum, log };
};

const { sum, log } = example2();
const { sum: sum2, log: log2 } = example2();

// this means functions have access to all of the variables in scope at the time of definition,
// even if the parent function has returned
sum();
log(); // 1

sum2();
sum2();
sum2();
log2(); // 3

export const example3 = () => {
  for (let index = 0; index < 3; index++) {
    setTimeout(() => {
      console.log(i); // 0, 1, 2
    }, 500);
  }

  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // 3, 3, 3
    }, 500);
  }

  console.log(i); // 3
  //console.log(index) // ReferenceError: index is not defined
};

export const example4 = () => {
  const y = 3;
  if (y > 0) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x); // 1

  if (y > 0) {
    const z = 1;
  } else {
    const z = 2;
  }
  //console.log(z); // ReferenceError: z is not defined
};

export default function Closures() {
  useEffect(() => {});
  return (
    <>
      <Header>Closures</Header>
      <ul>
        <li>
          <b>Lexical Scoping:</b>{" "}
          <span>
            This refers to how variables declared in an outer scope are
            accessible in an inner scope
          </span>
        </li>
        <li>
          <b>Lexical Environment:</b>{" "}
          <span>
            Each time a function is called, a lexical environment is created,
            which consists of the variables that were in scope at the time the
            function was defined.
          </span>
        </li>
        <li>
          <b>Closure:</b>{" "}
          <span>
            When an inner function has access to variables from an outer
            function, even after the outer function has finished executing, it
            forms a closure.
          </span>
        </li>
      </ul>
    </>
  );
}
