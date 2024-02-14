"use client";

import Header from "@/components/Header/Header";

export const arrayFunctions = () => {
  const response: any = {};
  // create an array with 5 empty elements
  const array = new Array(5);
  // create 10 empty elements. try to don't do this, length should be only read
  array.length = 10;
  //fill it with zeros
  array.fill(0);

  // includes return a boolean
  response.includes = array.includes(1);

  // indexOf return the index of an element
  response.indexOf = array.indexOf(1);

  // add an element or several
  array.push(3);
  array.push(4, 5, 6, 7, 8, 9);

  // add elements at the start
  array.unshift(0.123);

  // remove the last element and return the removed element
  array.pop();

  // remove the first element
  array.shift();

  // verify if it is an array
  response.isArray = Array.isArray(array);
  //response.isArray = array instanceof Array

  // removes elements from an array using start and the number of elements to remove.
  array.splice(1, 2);

  // return a new array with the values from the start and end index, this don't modify the original array.
  const newArray = array.slice(1, 3);
  response.slice = newArray;

  // reverses the elements in an array, this modify the original array.
  array.reverse();

  // combines all the elements into a string separated by '-', doesn't modify the original array.
  response.join = array.join("-");

  return response;
};

export const iteratingArrays = () => {
  const response: any = {};
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // traditional
  for (let i = 0; i < array.length; i++) {
    console.log("element", array[i]);
  }

  // for of
  let index = 0;
  for (const element of array) {
    console.log("element", element);
    index++;
  }

  // forEach: executes a function for each element
  array.forEach(
    function (value, index, originalArray) {
      //this is a reference to {limit: 123}
      console.log(value, index, originalArray, this);
    },
    { limit: 123 }
  );

  //map: return a new array with the updated elements
  response.map = array.map(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value * 2;
    },
    { limit: 123 }
  );

  //filter: return a new array with the elements that match with value === this.limit
  response.filter = array.filter(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value === this.limit;
    },
    { limit: 5 }
  );

  //find: return the first element that match with value === this.limit
  response.find = array.find(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value === this.limit;
    },
    { limit: 5 }
  );

  //findIndex: return the index of the first element that match with value === this.limit
  response.findIndex = array.findIndex(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value === this.limit;
    },
    { limit: 5 }
  );

  //every: return true/false if all elements match with value === this.limit
  response.every = array.every(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value === this.limit;
    },
    { limit: 5 }
  );

  //some: return true/false if a element matchs with value === this.limit
  response.some = array.some(
    function (value, index, originalArray) {
      console.log(value, index, originalArray, this);
      return value === this.limit;
    },
    { limit: 5 }
  );

  //this returns the accumulated value
  response.reduce = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    // in this case 0 is the initial value of accumulator
  }, 0);

  //this returns the accumulated value but starting with the last element
  response.reduceRight = array.reduceRight((accumulator, currentValue) => {
    return accumulator - currentValue;
    // in this case 0 is the initial value of accumulator
  }, 0);

  // sort the array, this updetes the original array
  array.sort((a, b) => {
    if (a < b) {
      return -1; // Sort a before b
    } else if (a > b) {
      return 1; // Sort b before a
    } else {
      return 0; // Maintain the order
    }
  });

  return response;
};

export default function Home() {
  return (
    <>
      <Header>Arrays</Header>
      <ul>
        <li>
          <b>{"array.includes(1)"}</b>
        </li>
        <li>
          <b>{"array.indexOf(1))"}</b>
        </li>
        <li>
          <b>{"array.push(3)"}</b>
        </li>
        <li>
          <b>{"array.unshift(1)"}</b>
        </li>
        <li>
          <b>{"array.pop()"}</b>
        </li>
        <li>
          <b>{"array.shift()"}</b>
        </li>
        <li>
          <b>{"array.splice(1, 2)"}</b>
        </li>
        <li>
          <b>{"array.slice(1, 3)"}</b>
        </li>
        <li>
          <b>{"array.reverse()"}</b>
        </li>
        <li>
          <b>{"array.join('-')"}</b>
        </li>
        <li>
          <b>{"array.sort()"}</b>
        </li>
        <li>
          <b>{"array.forEach()"}</b>
        </li>
        <li>
          <b>{"array.map()"}</b>
        </li>
        <li>
          <b>{"array.filter()"}</b>
        </li>
        <li>
          <b>{"array.find()"}</b>
        </li>
        <li>
          <b>{"array.findIndex()"}</b>
        </li>
        <li>
          <b>{"array.every()"}</b>
        </li>
        <li>
          <b>{"array.find()"}</b>
        </li>
        <li>
          <b>{"array.some()"}</b>
        </li>
        <li>
          <b>{"array.reduce()"}</b>
        </li>
        <li>
          <b>{"array.reduceRight()"}</b>
        </li>
      </ul>
    </>
  );
}
