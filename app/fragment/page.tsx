import Header from "@/components/Header/Header";
import React from "react";

export default function Fragment() {
  return (
    <>
      <Header>React.Fragment</Header>
      <div>
        <React.Fragment key={1}>
          This is the same as using <code>{"<></>"}</code> but you can put a key
        </React.Fragment>
      </div>
    </>
  );
}
