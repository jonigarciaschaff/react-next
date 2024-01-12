"use client";

import Button from "@/components/Button/Button";
import Header from "@/components/Header/Header";
import { useEffect, useLayoutEffect } from "react";

export default function UseEffect() {
  useEffect(() => {
    console.log("using useEffect async");
  }, []);

  useLayoutEffect(() => {
    console.log("using useLayoutEffect sync");
  }, []);

  return (
    <>
      <Header>useEffect</Header>
      <div>
        <p>
          <b>useEffect: </b> Runs after rendering has finished completed and
          does not block the painting on the screen. It is suitable for
          operations that do not need to be executed immediately and can occur
          asynchronously.
        </p>
        <p>
          <b>useLayoutEffect: </b>
          It runs synchronously after all DOM mutations. It is useful when you
          need to perform operations that will affect the design before the
          browser repaints. You can block the interface user, so you should use
          it with caution and only when necessary. necessary.
        </p>
      </div>
    </>
  );
}
