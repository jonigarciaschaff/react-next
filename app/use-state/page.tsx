"use client";

import { useState } from "react";

import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";

const calculateInitialValue = () => {
  return 3 - 1;
};

export default function UseState() {
  // se le puede pasar una funcion al useState para calcular el valor inicial, pero no la ejecuta en cada render
  const [counter, setCounter] = useState(calculateInitialValue);
  return (
    <>
      <Header>useState</Header>
      <div>
        Counter: {counter}{" "}
        <Button onClick={() => setCounter((prev) => prev + 1)}>Increase</Button>
      </div>
    </>
  );
}
