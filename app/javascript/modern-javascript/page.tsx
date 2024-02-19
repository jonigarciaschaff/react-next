"use client";

import Header from "@/components/Header/Header";

export const anonymousFunction = () => {
  const arr = [1, 2, 3, 4];
  // const double = (num) => {
  //   return num * 2
  // }
  // const doubled = arr.map(double);
  const doubled = arr.map((item) => item * 2);
  console.log(doubled);
};

export const destructuringArray = () => {
  const arr = [1, 2, 3, 4];
  const [first, second] = arr;
  console.log(first, second);
};

export const restSyntax = () => {
  const arr = [1, 2, 3, 4];
  const [first, second, ...rest] = arr;
  console.log(first, second);
  console.log(rest); // [3, 4]
};

export const destructuringObject = () => {
  const person: any = {
    name: "Jonatan",
    lastName: "Garcia",
    age: 31,
  };

  const { name, lastName, company = "Aurora", ...rest } = person;
  console.log(name); // Jonatan
  console.log(lastName); // Garcia
  console.log(company); // Aurora
  console.log(rest); // {age: 31}

  const printName = ({ name }) => {
    console.log(name); // Jonatan
  };

  printName(person);
};

export const spreadSyntax = () => {
  // case 1
  const arr = [1, 2] as const;
  const add = (x: number, y: number) => {
    console.log(x + y);
  };
  add(...arr);

  // case 2
  const logParams = (x, ...rest) => {
    console.log(x); // 1
    console.log(rest); // [ 2, 3, 4 ]
  };
  logParams(1, 2, 3, 4);

  //combine arrays
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];
  const combined = [0, ...arr1, 4.5, ...arr2];
  console.log(combined); // [0, 1, 2, 3, 4, 4.5, 5, 6, 7, 8]
};

export const templateLiterals = (name: string) => {
  const text = `Hello ${name}. ${1 + 2}`;
  console.log(text);
};

export const nullCoalescing = () => {
  console.log(null ?? 1234); // 1234
  console.log(undefined ?? 1234); // 1234
  console.log(5678 ?? 1234); // 5678
  console.log("" ?? 1234); // ""
};

export const optionalChaining = () => {
  const person: any = {
    name: "Jonatan",
    company: {
      name: "Aurora",
    },
  };
  console.log(person.name); // Jonatan
  console.log(person.company.name); // Aurora
  console.log(person?.company?.address); // undefined
};

export const shortCircuitEvaluation = () => {
  const shouldRunCode = true;

  const helloWorld = () => {
    console.log("Hello World");
  };

  shouldRunCode && helloWorld();
};

export default function Home() {
  return (
    <>
      <Header>Moder Javascript</Header>
      <ul>
        <li>
          <b>Anonymous Functions</b>
        </li>
        <li>
          <b>Destructuring Arrays</b>
        </li>
        <li>
          <b>Rest Syntax</b>
        </li>
        <li>
          <b>Destructuring Objects</b>
        </li>
        <li>
          <b>Spread Syntax</b>
        </li>
        <li>
          <b>Template Literals</b>
        </li>
        <li>
          <b>Null Coalescing</b>
        </li>
        <li>
          <b>Optional Chaining</b>
        </li>
        <li>
          <b>Short Circuit Evaluation</b>
        </li>
      </ul>
    </>
  );
}
