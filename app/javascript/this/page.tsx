"use client";

import Header from "@/components/Header/Header";
import { useEffect } from "react";

export function logStrict() {
  "use strict";
  console.log(this); //undefined
}

export function traditionalFunction() {
  console.log(this); //window (context where the function is called)
}

export const arrowFunction = () => {
  console.log(this); ////window (context where the function is defined)
};

export function logFunction() {
  console.log(this); //window
}

const obj1 = {
  traditionalFunction,
  arrowFunction,
};

obj1.traditionalFunction(); // console.log(this) --> obj1
obj1.arrowFunction(); // arrow function console.log(this) --> window

export const logElement = () => {
  const newDiv = document.createElement("button");
  newDiv.addEventListener("click", traditionalFunction); // <button />
  newDiv.addEventListener("click", arrowFunction); // window
};

const obj2 = {
  name: "Jonatan",
};
const param1 = "something";
const param2 = "something2";

const boundFunction = traditionalFunction.bind(obj2);
boundFunction(param1, param2); // console.log(this) --> obj2
traditionalFunction.call(obj2, param1, param2); // console.log(this) --> obj2
traditionalFunction.apply(obj2, [param1, param2]); // console.log(this) --> obj2

const obj3 = {
  lastName: "Garcia",
};

[1, 2, 3].forEach(function (item) {
  console.log(item);
  console.log(this); // obj3
}, obj3);

[1, 2, 3].forEach((item) => {
  console.log(item);
  console.log(this); //window (depends on the scope)
}, obj3);

export default function This() {
  useEffect(() => {});
  return (
    <>
      <Header>This</Header>
      <ul>
        <li>
          <b>Traditional Function:</b>{" "}
          <span>this = context where the function is called</span>
        </li>
        <li>
          <b>Arrow Functions:</b>{" "}
          <span>this = context where the function is defined</span>
        </li>
        <li>
          <b>Binding Function:</b>{" "}
          <span>you can set which is the context of THIS</span>
        </li>
      </ul>
    </>
  );
}
