"use client";

import { useRef, useState } from "react";

import Header from "@/components/Header/Header";
import Child from "./Child";

export default function UseRef() {
  const inputRef = useRef<any>();
  const componentRef = useRef<any>(null);
  const handleClick = () => {
    inputRef.current.value = "new value";
  };

  const handleReset = () => {
    componentRef.current.reset();
  };

  return (
    <>
      <Header>useRef</Header>
      <button onClick={handleClick}>set value to the input</button>
      <div>
        <input ref={inputRef} name="input" />
      </div>
      <div>
        <Child ref={componentRef} />
        <p>
          <button onClick={handleReset}>Reset Child component</button>
        </p>
      </div>
    </>
  );
}
