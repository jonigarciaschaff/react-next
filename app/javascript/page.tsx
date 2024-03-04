"use client";

import Header from "@/components/Header/Header";
import Link from "next/link";

// First-Class Functions
//Assigning a function to a variable
export const greet = function (name) {
  return `Hello, ${name}!`;
};

//Passing a function as an argument
export function applyOperation(x, y, operation) {
  return operation(x, y);
}
export function add(a, b) {
  return a + b;
}
//applyOperation(5, 3, add)

//Higher-Order Functions
//Returning a function
export function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

export const double = createMultiplier(2);
//double(4) // Output: 8

//Objects
export const object = () => {
  const myMap = new Map();
  myMap.set("key1", "value1");
  myMap.get("key1");

  const mySet = new Set();
  mySet.add("value1");
  mySet.has("value1");
};

export default function Home() {
  return (
    <>
      <Header>Javascript</Header>
      <div>
        <ul>
          <li>
            <u>
              Javascript is a general purpose multi-paradigm programming
              language with dynamic typing.
            </u>
          </li>
          <li>
            <b>Paradigm</b>
            <ul className="pl-5">
              <li>
                <b className="mr-1">Event-driven:</b>
                <span>
                  Functions can be made to respond to events, such as when a
                  user clicks on an element or scrolls down the page
                </span>
              </li>
              <li>
                <b className="mr-1">Functional:</b>
                <span>
                  Functions can be written as "pure functions", meaning
                  functions that always have the same output for a given set of
                  arguments and never produce side effects.
                </span>
              </li>{" "}
              <li>
                <b className="mr-1">Object-oriented:</b>
                <span>
                  Objects can be created as custom data stores and they can be
                  made to inherit from each other.
                </span>
              </li>
              <li>
                <b className="mr-1">Imperative:</b>
                <span>
                  Programs can be written by explicitly describing the control
                  flow, such as with loops and conditionals.
                </span>
              </li>
              <li>
                <b className="mr-1">Declarative:</b>
                <span>
                  Programs can be written by describing the desired output with
                  implicit control flow. Oftentimes this is associated with
                  functional programming (e.g. using the forEach function to
                  loop over an array instead of a for loop).
                </span>
              </li>
            </ul>
          </li>
          <li className="mt-5">
            <b className="mr-1">First-class functions: </b>
            <span>
              They are those that can be treated like any other variable and
              passing a function as an argument
            </span>
          </li>
          <li>
            <b className="mr-1">Higher-order functions: </b>
            <span>
              They are those that can take other functions as arguments or
              return them as results
            </span>
          </li>
          <li>
            <b className="mr-1">Arrow functions: </b>
            <span>
              Do not create their own <code>this</code>, <code>arguments</code>,
              or <code>super</code> bindings.
            </span>{" "}
            <span>
              Use the <code>this</code> keyword from the surrounding context.
            </span>
          </li>
          <li>
            <b className="mr-1">Traditional functions:</b>
            <span>
              Can be used to create objects with <code>new</code>.
            </span>{" "}
            <span>
              Have their own <code>this</code>, <code>arguments</code>, and
              <code>super</code> bindings.
            </span>
          </li>
          <li>
            <Link
              href="/javascript/variables-and-scoping"
              className="text-blue-500"
            >
              * Variables and scoping
            </Link>
          </li>
          <li>
            <Link href="/javascript/arrays" className="text-blue-500">
              * Arrays
            </Link>
          </li>
          <li>
            <Link href="/javascript/objects" className="text-blue-500">
              * Objects
            </Link>
          </li>
          <li>
            <Link href="/javascript/equality" className="text-blue-500">
              * Equality
            </Link>
          </li>
          <li>
            <Link href="/javascript/type-coercion" className="text-blue-500">
              * Type coercion
            </Link>
          </li>
          <li>
            <Link
              href="/javascript/modern-javascript"
              className="text-blue-500"
            >
              * Modern Javascript
            </Link>
          </li>
          <li>
            <Link href="/javascript/script-tag" className="text-blue-500">
              * Script Tag
            </Link>
          </li>
          <li>
            <Link href="/javascript/dom-manipulation" className="text-blue-500">
              * Dom Manipulation
            </Link>
          </li>
          <li>
            <Link href="/javascript/event-driven" className="text-blue-500">
              * Event Driven
            </Link>
          </li>
          <li>
            <Link href="/javascript/promises" className="text-blue-500">
              * Promises
            </Link>
          </li>
          <li>
            <Link href="/javascript/fetch" className="text-blue-500">
              * Fetch
            </Link>
          </li>
          <li>
            <Link href="/javascript/timers" className="text-blue-500">
              * Timers
            </Link>
          </li>
          <li>
            <Link href="/javascript/closures" className="text-blue-500">
              * Closures
            </Link>
          </li>
          <li>
            <Link href="/javascript/this" className="text-blue-500">
              * This
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
