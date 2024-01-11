"use client";

import { useContext } from "react";
import { UserContext } from "./userContext";

export default function Child() {
  const user: any = useContext(UserContext);
  const changeUser = () => user.setName("Jhon");
  return <p onClick={changeUser}>Hello {user.name}</p>;
}
