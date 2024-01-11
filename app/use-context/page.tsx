"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import Child from "./Child";
import { UserContext } from "./userContext";

export default function UseContext() {
  const [name, setName] = useState("Eduardo");
  return (
    <>
      <Header>UseContext</Header>
      <UserContext.Provider
        value={{
          name,
          setName,
        }}
      >
        <Child />
      </UserContext.Provider>
    </>
  );
}
