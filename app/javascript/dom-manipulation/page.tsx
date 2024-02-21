"use client";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header>Dom Manipulation</Header>
      <u>
        <b>Getting Elements</b>
      </u>
      <ul className="mb-5">
        <li>
          <b>document.getElementById(id)</b>: Gets a single element based on its{" "}
          <span>id</span> attribute.
        </li>
        <li>
          <b>document.querySelector(cssSelector)</b>: Gets a single element
          based on a CSS <b>selector</b>. If multiple elements match the
          selector, returns the first one.
        </li>
        <li>
          <b>document.querySelectorAll(cssSelector)</b>: Gets all elements
          matching a CSS <b>selector</b>
          as a <b>NodeList</b>.
        </li>
        <li>
          <b>document.getElementsByTagName(tagName)</b>: Gets all elements with
          a specific HTML <b>tag</b>
          as an <b>HTMLCollection</b>.
        </li>
        <li>
          <b>document.getElementsByClassName(className)</b>: Gets all elements
          with a specific <b>class</b>
          as an <b>HTMLCollection</b>.
        </li>
      </ul>
      <u>
        <b>Setting Attributes</b>
      </u>
      <ul className="mb-5">
        <li>
          <b>element.style.property</b>: Sets a CSS property using inline
          styles, although CSS classes should usually be preferred. The{" "}
          <b>style</b> object will only contain inline styles, not those set
          with CSS.
        </li>
        <li>
          <b>element.setAttribute('attribute', 'value')</b>: Sets an HTML{" "}
          <b>attribute</b> to a specific value.
        </li>
        <li>
          <b>element.textContent</b>: The text content of an element, including
          that of any children. Note: this is slightly different from{" "}
          <b>element.innerText</b>, which only gets text that is actually
          rendered and <b>element.innerHTML</b> which gets the entire HTML code
          as a string.
        </li>
        <li>
          <b>element.attribute</b>: An alternative to the <b>setAttribute</b>{" "}
          function, attributes can be directly edited via their property name.
          For example, <span>element.value</span> would get the value attribute
          of the element.
        </li>
        <li>
          <b>element.classList</b>: An object for updating CSS <b>classes</b>.
          Specifically, this contains 3 primary functions: <b>add(className)</b>
          , <b>remove(className)</b> and <b>toggle(className)</b>.
        </li>
      </ul>
      <u>
        <b>Adding And Removing Elements</b>
      </u>
      <ul className="mb-5">
        <li>
          <b>document.createElement(tagName)</b>: Creates a new HTML{" "}
          <b>element</b>.
        </li>
        <li>
          <b>document.createTextNode(text)</b>: Creates a text node as an
          alternative to setting <b>textContent</b>.
        </li>
        <li>
          <b>document.createDocumentFragment()</b>: Creates a document fragment,
          which is useful for appending multiple elements at once after a loop.
        </li>
        <li>
          <b>element.appendChild(element)</b>: Appends an element to the end of
          the contents of another element.
        </li>
        <li>
          <b>element.append(node1, node2, ...)</b>: Appends 1 or more nodes
          (elements or text) to the end of the contents of another element.
        </li>
        <li>
          <b>element.prepend(node1, node2, ...)</b>: Prepends 1 or more nodes
          (elements or text) to the beginning of the contents of another
          element.
        </li>
        <li>
          <b>element.remove()</b>: Removes the element from the DOM.
        </li>
      </ul>
      <u>
        <b>Sizes and Scrolling</b>
      </u>
      <ul>
        <li>
          <b>window.innerWidth</b>: The width of the browser window.
        </li>
        <li>
          <b>window.innerHeight</b>: The height of the browser window.
        </li>
        <li>
          <b>window.getComputedStyle(element)</b>: Gets styles as they are
          currently rendered on the page, converted to pixels.
        </li>
        <li>
          <b>element.clientHeight</b>: The height of visible content and
          padding.
        </li>
        <li>
          <b>element.offsetHeight</b>: The height of visible content, padding,
          borders and scrollbars.
        </li>
        <li>
          <b>element.scrollHeight</b>: The height of all content and padding,
          including content scrolled out of view.
        </li>
        <li>
          <b>element.offsetTop</b>: The distance from the outer top border of
          the element to the inner top border of the nearest positioned parent.
        </li>
        <li>
          <b>element.scrollIntoView()</b>: Scrolls the container so the element
          is in view.
        </li>
        <li>
          <b>element.scrollTo(optionsObj)</b>: Scrolls the element to a
          specified <b>top</b> value in the options object. Additionally,{" "}
          <span>behavior: 'smooth'</span> will create a smooth transition.
        </li>
      </ul>
    </>
  );
}
