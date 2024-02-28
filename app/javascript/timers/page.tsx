"use client";

import Header from "@/components/Header/Header";

//Intervals
export let intervalId;

export const startInterval = () => {
  intervalId = setInterval(() => {
    console.log("running interval");
  }, 1000);
};

export const stopInterval = () => {
  clearInterval(intervalId);
};

//Timeouts
export let timeoutId;

export const startTimeout = () => {
  timeoutId = setTimeout(() => {
    console.log("running timeout");
  }, 1000);
};

export const stopTimeout = () => {
  clearTimeout(timeoutId);
};

//AnimationFrame
// Callback function is executed before every screen refresh.
// Being synchronized with the screen refresh,
// requestAnimationFrame can help save power by not running animations when the tab is not visible.

let animationFrameId;

export const startAnimationFrame = (timestamp) => {
  console.log("running animation frame", timestamp);
  animationFrameId = requestAnimationFrame(startAnimationFrame);
};

export const stopAnimationFrame = () => {
  cancelAnimationFrame(animationFrameId);
};

// performance.now()
export const getPerformanceTime = () => {
  // The time (milliseconds) returned by performance.now() is relative to the start of the page navigation session.
  // That is, the initial value when the page is first loaded is considered time zero (0 ms),
  // and all values returned by performance.now() are relative to this time zero.
  const time = performance.now();
  console.log(time);
};

export const getDate = () => {
  // now
  const date1 = new Date(); // Wed Feb 28 2024 20:43:21 GMT-0300
  console.log(date1);

  const date2 = new Date(2024, 2, 3, 15, 33, 30); // Sun Mar 03 2024 15:33:30 GMT-0300
  console.log(date2.getHours()); // 15
  console.log(date2.getMonth()); // 2
  date2.setSeconds(33);
  console.log(date2.getSeconds()); // 33
};

export default function Fetch() {
  return (
    <>
      <Header>Timers</Header>
      <ul>
        <li>
          <b>{"setInterval()"}</b>
        </li>
        <li>
          <b>{"setTimeout()"}</b>
        </li>
        <li>
          <b>{"requestAnimationFrame()"}</b>
        </li>
        <li>
          <b>{"performance.now()"}</b>
        </li>
        <li>
          <b>{"new Date()"}</b>
        </li>
      </ul>
    </>
  );
}
