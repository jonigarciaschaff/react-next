"use client";

import Header from "@/components/Header/Header";

export const looseEquality = () => {
  // this only validates value,
  console.log(5 == 5); // true
  //5 == '5' // true
  //NaN == NaN // false
  //null == undefined // true
  //{} == {} // false
  //[] == [] // false
};

export const strictEquality = () => {
  // this only validates value,
  console.log(5 === 5); // true
  //5 === '5' // false
  //NaN === NaN // false
  //null === undefined // false
  //{} === {} // false
  //[] === [] // false
};

export const checkNullOrUndefined = () => {
  const x = 5;
  if (x == null) {
    console.log("it is the same");
  }

  if (x === null || x === undefined) {
    console.log("it is the same");
  }
};

export default function Home() {
  return (
    <>
      <Header>Equality</Header>
      <ul>
        <li>
          <b>looseEquality:</b> <span>it only verifies value</span>
        </li>
        <li>
          <b>strictEquality:</b> <span>it verifies value and type</span>
        </li>
        <li>
          <b>null or undefined:</b>{" "}
          <span>
            null indicates the intentional absence of value and undefined
            indicates the absence of value assignment
          </span>
        </li>
        <li>
          <b>Object equality:</b>{" "}
          <span>
            JavaScript compares objects by reference, not value. //{" "}
            {"{} == {} --> false"}
          </span>
        </li>
      </ul>
    </>
  );
}
