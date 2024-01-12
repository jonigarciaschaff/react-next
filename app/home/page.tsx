import Header from "@/components/Header/Header";
import Link from "next/link";

export default function Home() {
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
