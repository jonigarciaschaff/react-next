import Header from "@/components/Header/Header";
import Link from "next/link";

export default function concepts() {
  return (
    <>
      <Header>Conceptos generales</Header>
      <div>
        <p className="mb-4">
          <b>React:</b>React is a declarative, component-based library. and
          unidirectional, the data flow goes from parent to child. Besides, uses
          a virtual dom, a copy of the dom stored in memory that used to compare
          which node should be updated and not have to render the entire web.
        </p>
        <p className="mb-4">
          <b>Declarative:</b>
          <code style={{ color: "green" }}>
            {"<span>This is declarative</span>"}
          </code>
        </p>
        <p className="mb-4">
          <b>Imperative:</b>
          <code style={{ color: "green" }}>
            {"React.createElement('h1', {id: '1'}, 'Hello world')"}
          </code>
        </p>
      </div>
    </>
  );
}
