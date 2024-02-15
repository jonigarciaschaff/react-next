"use client";

import Header from "@/components/Header/Header";

const anotherKey = "key1";

const lastName = "Garcia Schaff";

export const object1 = {
  name: "Jonatan",
  lastName,
  age: 30,
  rating: 5,
  skills: ["React", "Next"],
  isAwesome: true,
  "key with space": 0,
  [anotherKey]: "value",
  sayHello: () => console.log("Hello"),
  sayBye() {
    console.log("Bye");
  },
  get getAge() {
    return this.age * 2;
  },
  set setAge(value) {
    this.age = value * 2;
  },
};

export const objectMethods = () => {
  console.log(object1.getAge);
  object1.setAge = 15;
};

export const object2 = new Object();

export const getValue = () => {
  console.log(object1.name);
  console.log(object1["rating"]);
};

export const updateValue = () => {
  object1.rating = 6;
};

function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

export const jonatan = new Person("Jonatan", "Garcia Schaff", 30);

// {} === {} //this is false, javascript compares objects by reference, not value

const id1 = Symbol("id");
const id2 = Symbol("id2");
const id3 = Symbol.for("id3");
const id4 = Symbol.for("id3");
// id1 === id2 --> false
// id3 === id4 --> true

export const object3 = {
  [id1]: 1,
  [id2]: 2,
  [id3]: 3,
  [id4]: 4,
};

export const object4 = {
  //inherited from object3
  __proto__: object3,
};

export const object5 = {
  id: 1,
  foo: "bar",
};

export const iterateObject = () => {
  console.log(Object.keys(object5)); // ['id', 'foo']
  console.log(Object.values(object5)); // [1, 'bar']
  console.log(Object.entries(object5)); // [['id', 1], ['foo', 'bar']]
  for (const key in object5) {
    console.log(key);
  }
};

export const verifyKey = () => {
  console.log("toString" in object1); // true: inherited from object
  console.log(object1.hasOwnProperty("name")); // true
  console.log(object1.name !== undefined); // true, it could be false if the value is undefined
};

export const cloneObject = () => {
  //target, source
  Object.assign(object5, object1);
};

export const freezeObject = () => {
  Object.freeze(object5);
  console.log(Object.isFrozen(object5)); // true

  //this doesn't work
  object5.id = 2;
};

const object6: { id: number; value?: string } = {
  id: 2,
};

export const sealObject = () => {
  Object.seal(object6);
  console.log(Object.isSealed(object6)); // true

  //this doesn't work
  object6.value = "a";
};

export default function Home() {
  return (
    <>
      <Header>Objects</Header>
      <ul>
        <li>
          <b>{"new Object()"}</b>
        </li>
        <li>
          <b>{"Symbol('id')"}</b>
        </li>
        <li>
          <b>{"Object.keys(object)"}</b>
        </li>
        <li>
          <b>{"Object.values(object)"}</b>
        </li>
        <li>
          <b>{"Object.entries(object)"}</b>
        </li>
        <li>
          <b>{"object.hasOwnProperty('name')"}</b>
        </li>
        <li>
          <b>{"Object.assign(object5, object1)"}</b>
        </li>
        <li>
          <b>{"Object.freeze(object5)"}</b>
        </li>
        <li>
          <b>{"Object.seal(object5)"}</b>
        </li>
      </ul>
    </>
  );
}
