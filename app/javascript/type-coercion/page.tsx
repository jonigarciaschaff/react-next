"use client";

import Header from "@/components/Header/Header";

export const concatenation = () => {
  var x = 5;
  var y = "10";
  var z = x + y; // "510"
  return z;
};

export const arithmeticOperations = () => {
  var a: any = "5";
  var b: any = "10";
  var c = a * b; // 50
  return c;
};

export const logicalOperations = () => {
  var value = "hello";
  if (value) {
    console.log("Value is truthy");
  }
};

export const booleanOperations = () => {
  var boolValue: any = true;
  var numValue: any = 10;
  var result = boolValue + numValue; // 11
  return result;
};

export const booleanConcatenations = () => {
  var boolValue = true;
  var str = "The value is: " + boolValue; // "The value is: true"
  return str;
};

export const logicalOperatorsNonBoolean = () => {
  var result = "hello" && "world"; // "world"
  return result;
};

export default function Home() {
  return (
    <>
      <Header>Type Coertion</Header>
      <ul>
        <li>
          <b>Concatenation (+ operator):</b>{" "}
          <p>
            {" "}
            The result of an operation between a number and a string is a string
          </p>
          <p>
            The result of an operation between a number and a boolean is a
            number
          </p>
          <p>
            The result of an operation between a string and a boolean is a
            string
          </p>
        </li>
        <li>
          <b>Arithmetic Operations (*/ operators):</b>{" "}
          <span>
            {" "}
            JavaScript attempts to coerce them to numeric values if possible.
          </span>
        </li>
        <li>
          <b>Logical Operations:</b>{" "}
          <span>
            {" "}
            In JavaScript, the value of an expression is evaluated as truthy or
            falsy in conditional contexts (like an if statement). A truthy value
            is interpreted as "true" and a falsy value is interpreted as
            "false".
          </span>
          <p>
            Here are some values that are considered falsy in JavaScript: false
            0 "" (empty string) null undefined NaN (Not a Number)
          </p>
        </li>
      </ul>
    </>
  );
}
