"use client";

import Header from "@/components/Header/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const a = (string) => {
    const half = Math.floor(string.length / 2);

    for (let i = 0; i < half; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false;
      }
      return true;
    }
  };

  const word = "neuquen";
  // 0 -> length - 1
  // 1 -> length - 2
  // 2 -> length - 3

  useEffect(() => {
    const result = a(word);
    console.log("log result", result);
  }, []);

  return (
    <>
      <Header>React Next</Header>
      <ul>
        <li>
          <Link href="/concepts" className="text-blue-500">
            * General concepts
          </Link>
        </li>
        <li>
          <Link href="/html" className="text-blue-500">
            * HTML
          </Link>
        </li>
        <li>
          <Link href="/css" className="text-blue-500">
            * CSS
          </Link>
        </li>
        <li>
          <Link href="/use-state" className="text-blue-500">
            * useState
          </Link>
        </li>
        <li>
          <Link href="/use-ref" className="text-blue-500">
            * useRef, forwardRef, useImperativeHandle
          </Link>
        </li>
        <li>
          <Link href="/component-class" className="text-blue-500">
            * Class-based components.
          </Link>
        </li>
        <li>
          <Link href="/fragment" className="text-blue-500">
            * React.Fragment
          </Link>
        </li>
        <li>
          <Link href="/use-reducer" className="text-blue-500">
            * UseReducer
          </Link>
        </li>
        <li>
          <Link href="/use-effect" className="text-blue-500">
            * UseEffect & useLayoutEffect
          </Link>
        </li>
        <li>
          <Link href="/use-context" className="text-blue-500">
            * UseContext
          </Link>
        </li>
      </ul>
    </>
  );
}
