"use client";

import Header from "@/components/Header/Header";

export const promise1 = new Promise<number>((resolve, reject) => {
  const value = true;
  if (value) {
    resolve(333);
  } else {
    reject("Error");
  }
});

export const promise2 = (id: number) => {
  return new Promise((resolve, reject) => {
    if (id) {
      resolve(id);
    } else {
      reject("Error");
    }
  });
};

export const promise3 = new Promise<number>((resolve) => {
  resolve(1);
});

export const testingPromises1 = () => {
  promise3
    .then((value) => value + 1)
    .then((value) => value / 0)
    .catch((value) => {
      console.log("Error", value);
      return 2;
    })
    .then((value) => value + 3)
    .finally(() => console.log("done"));
};

export const testingPromises2 = () => {
  promise1.then(promise2).catch(() => console.log("Error"));
};

export const promiseAll = () => {
  // Promise.all takes an array of promises and returns a new promise
  // that resolves when all promises in the array have resolved, or
  // rejects if any one of the promises rejects. Useful for handling
  // multiple asynchronous tasks concurrently.
  Promise.all([promise1, promise2(2), promise3])
    .then(console.log)
    .catch((error) => console.log("error", error));
};

export const promiseRace = () => {
  // Promise.race takes an array of promises and returns a new promise
  // that resolves or rejects as soon as one of the promises in the
  // array resolves or rejects. Useful for handling situations where
  // you want to respond as soon as the first promise settles.
  Promise.race([promise1, promise2(2), promise3])
    .then(console.log)
    .catch((error) => console.log("error", error));
};

export const promiseAny = () => {
  // Promise.any takes an array of promises and returns a new promise
  // that resolves as soon as one of the promises in the array resolves.
  // Only rejects if all promises in the iterable are rejected, it returns a rejection with an AggregateError.
  // Useful when you only need the first promise to resolve among several.
  Promise.any([promise1, promise2(2), promise3])
    .then(console.log)
    .catch((error) => console.log("error", error));
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const asyncFunction = async () => {
  await delay(5000);
  console.log("Waited 5s");
};

export default function Promises() {
  return (
    <>
      <Header>Promises</Header>
      <ul>
        <li>
          <b>{"new Promise"}</b>
        </li>
        <li>
          <b>{"Promise.all"}</b>
        </li>
        <li>
          <b>{"Promise.race"}</b>
        </li>
        <li>
          <b>{"Promise.any"}</b>
        </li>
        <li>
          <b>{"async - await"}</b>
        </li>
      </ul>
    </>
  );
}
