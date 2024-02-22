"use client";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header>Event driven</Header>
      <ul>
        <li>
          <b>element.addEventListener(eventName, callback, useCapture)</b>
        </li>
        <li>
          <b>element.removeEventListener(eventName, callback, useCapture)</b>
        </li>
        <li>
          <b>Event Delegation:</b>{" "}
          <span>
            The process of using a single event listener on a parent element to
            manually delegate events to children, rather than using event
            listeners on each child.
          </span>
        </li>
        <li className="mt-5">
          <b>useCapture: it could be a boolean or an object</b>
          <ul className="ml-5">
            <li>
              <b>capture</b>: The same as the boolean argument option;{" "}
              <span>true</span> for <b>capturing</b>, <span>false</span> for{" "}
              <b>bubbling</b>.
            </li>
            <li>
              <b>once</b>: If <span>true</span>, automatically removes the event
              listener after the event fires once.
            </li>
            <li>
              <b>passive</b>: If <span>true</span>, indicates to the browser
              that <span>event.preventDefault()</span>
              will not be called. This is useful for the browser to optimize
              performance, particularly with mobile scrolling events such as{" "}
              <span>touchstart</span> and <span>touchmove</span> to indicate to
              the browser that scrolling will not be cancelled.
            </li>
            <li>
              <b>signal</b>: An <span>AbortSignal</span>, usually coming from an{" "}
              <span>AbortController</span>. If the signal's <span>abort()</span>{" "}
              method is called, the event listener will be removed.
            </li>
          </ul>
        </li>

        <li className="mt-5">
          <b>Event Propagation:</b>
          <ol className="ml-5">
            <li>
              <b>Capturing</b>: The event travels down from the root of the
              document to the event target.
            </li>
            <li>
              <b>Target</b>: The event fires on the event target.
            </li>
            <li>
              <b>Bubbling</b>: The event travels up from the event target to the
              root of the document.
            </li>
          </ol>
        </li>
      </ul>
    </>
  );
}
