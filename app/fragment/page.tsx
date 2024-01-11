import Header from "@/components/Header/Header";
import React from "react";

export default function Fragment() {
  return (
    <>
      <Header>React.Fragment</Header>
      <div>
        <React.Fragment key={1}>
          Esto es lo mismo que usar <code>{"<></>"}</code> pero se le puede
          poner una key
        </React.Fragment>
      </div>
    </>
  );
}
