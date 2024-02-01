"use client";

import Header from "@/components/Header/Header";
import "./style.css";

export default function Css() {
  return (
    <>
      <Header>CSS</Header>
      <div className="mb-4">
        <b>
          <code>{"<link rel='stylesheet' href='style.css' />"}</code>:
        </b>
      </div>
      <div className="mb-4">
        <b>Cascading:</b>
        <ol>
          <li>
            <u>1 -User agent stylesheets:</u> Containg browser defaults for
            style.
          </li>
          <li>
            <u>2 -User stylesheets:</u> Containg user preferences saved in the
            broser(extensions, etc.)
          </li>
          <li>
            <u>3 -Author stylesheets:</u> Containg CSS code we write.
          </li>
        </ol>
      </div>
      <div>
        <h2 className="title">basic concepts</h2>
        <h3>By element {"<h3>"}</h3>
        <h4>By element {"<h4>"}</h4>
        <div className="class-1">By class</div>
        <div id="element-1">By ID</div>
        <div>
          <a href="https://jonatangarcia.com/content">
            by attribute href^: Jonatan Garcia {"-->"} content
          </a>
        </div>
        <div>
          <a href="https://jonatangarciaschaff.com">
            {" "}
            by attribute href: Jonatan Garcia Schaff
          </a>
        </div>
        <div>
          <a href="https://google.com ">Google</a>
        </div>
        <p className="paragraph">This is a paragraph</p>
      </div>
      <footer>
        <p>
          This is a paragraph in the footer <code>footer p</code>
        </p>
        <div>
          This is a div in the footer
          <p>Another paragraph in the footer</p>
        </div>
        <span>
          This is a span in the footer: <code>{"footer > span"}</code>
        </span>
        <div>
          <span>Another span in the footer</span>
        </div>
        <br />
        <div>
          <div className="cat">Cat 1</div>
          <div className="dog">
            Dog 1 <code>.cat ~ .dog</code>
          </div>
          <div className="dog">
            Dog 2 <code>.cat ~ .dog</code>
          </div>
        </div>
        <br />
        <div>
          <div className="horse">Horse 1</div>
          <div className="bird">Bird 1</div>
          <div className="horse">
            Horse 2 <code>.bird + .horse</code>
          </div>
          <div className="horse">Horse 3</div>
        </div>
        <br />
        <div>
          <div style={{ display: "inline" }}>inline </div>
          <div style={{ display: "inline" }}>inline </div>
          <div style={{ display: "inline" }}>inline </div>
          <div style={{ display: "inline" }}>inline </div>
          <div style={{ display: "block" }}>block </div>
          <div style={{ display: "block" }}>block </div>
          <div style={{ display: "block" }}>block </div>
        </div>
      </footer>
      <br />
      <div style={{ boxSizing: "content-box" }}>
        <b>
          <code>{"box-sizing: content-box"}</code> <i>(default)</i>
        </b>
      </div>
      <div style={{ boxSizing: "border-box" }}>
        <b>
          <code>{"box-sizing: border-box"}</code>
        </b>
      </div>
      <br />
      <div>
        <div className="floatLeft">floatLeft</div>
        <div className="floatRight">floatRight</div>
        <div className="clear">clear</div>
      </div>
      <div>
        <h2 className="title">Pseudo Classes</h2>
        <a className="anchor" href="https://google.com">
          Google
        </a>
        <div>
          <input name="input" minLength={4} />
        </div>
        <div>
          <span className="span-1">First</span>
          <span className="span-1">Second</span>
          <span className="span-1">Third</span>
          <div>
            <span className="span-1">First</span>
            <span className="span-1">Second</span>
            <span className="span-1">Third</span>
          </div>
        </div>
        <br />
        <div>
          <span className="span-2">First</span>
          <span className="span-2">Second</span>
          <span className="span-2">Third</span>
        </div>
        <br />
        <div>
          <span className="span-3">First</span>
          <span className="span-3">Second</span>
          <span className="span-3">Third</span>
        </div>
        <br />
        <div>
          <span>First</span>
          <p className="div-1">Second</p>
          <b>Third</b>
        </div>
      </div>
      <div>
        <h2 className="title">Pseudo Elements</h2>
        <div>
          <div className="div-2">first</div>
          <div className="div-3">second</div>
          <div className="div-4">Third</div>
          <div className="div-5">fourth</div>
        </div>
      </div>
      <div>
        <h2 className="title">Selector Specificity</h2>
        <ul>
          <li>
            <b>- Inline style</b>: apply css direrctly into the HTML
          </li>
          <li>
            <b>- IDs:</b> <code>{"#inputId {color: red}"}</code>
          </li>
          <li>
            <b>- Classes:</b> <code>{".inputClass {color: red}"}</code>
          </li>
          <li>
            <b>- Pseudo classes:</b>{" "}
            <code>{"a:first-of-type {color: red}"}</code>
          </li>
          <li>
            <b>- Attributes:</b>{" "}
            <code>{"a[href='google.com'] {color: red}"}</code>
          </li>
          <li>
            <b>- Elements:</b> <code>{"a {color: red}"}</code>
          </li>
          <li>
            <b>- Pseudo elements:</b>{" "}
            <code>{"a::first-letter {color: red}"}</code>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="title">Lengths</h2>
        <ul>
          <li>
            <b>- px</b>: pixels, absolute length
          </li>
          <li>
            <b>- em:</b> Relative to font size
          </li>
          <li>
            <b>- rem:</b> Relative to the root element font size
          </li>
          <li>
            <b>- vw:</b> % of viewport width (screen)
          </li>
          <li>
            <b>- vh:</b> % of viewport height (screen)
          </li>
          <li>
            <b>- ch:</b> Width of a character (0)
          </li>
          <li>
            <b>- %:</b> Percentage, usually relative to the parent value
          </li>
        </ul>
      </div>
      <div>
        <h2 className="title">Position</h2>
        <div className="absolute">position absolute</div>
        <div className="fixed">position fixed</div>
        <div className="sticky">position sticky</div>
      </div>
      <div>
        <h2 className="title">Flexbox</h2>
        <div>
          <b>More info:</b>{" "}
          <a href="https://flexbox.help/">https://flexbox.help/</a>
        </div>
        <div className="flexbox-1">
          <div className="red"></div>
          <div className="blue"></div>
          <div className="green"></div>
        </div>
        <div className="flexbox-2">
          <div className="red"></div>
          <div className="blue"></div>
          <div className="green"></div>
        </div>
        <div className="flexbox-3">
          <div className="red"></div>
          <div className="blue"></div>
          <div className="green"></div>
        </div>
        <div className="flexbox-4 ">
          <div className="red order-1" />
          <div className="blue order--1 basis-100" />
          <div className="green shrink-1" />
          <div className="red order-1 grow-2" />
          <div className="blue order--1" />
          <div className="green grow-1" />
          <div className="blue flex-child" />
        </div>
      </div>
      <div>
        <h2 className="title">Grid</h2>
        <div className="grid-container">
          <div className="grid-header">
            <h2>HEADER</h2>
          </div>
          <div className="grid-main">MAIN</div>
          <div className="grid-aside">ASIDE</div>
          <div className="grid-footer">FOOTER</div>
        </div>
      </div>
      <div>
        <h2 className="title">Inheritance</h2>
        <div className="inheritance">
          <h2>Title</h2>
          <button className="inheritance-button">Click me</button>
        </div>
      </div>
      <div>
        <h2 className="title">Responsive design</h2>
        <div className="responsive-1" />
        <div className="responsive-2" />
        <div className="responsive-3" />
      </div>
      <div>
        <h2 className="title">Animation</h2>
        <div className="transition">Transition</div>
        <div className="keyframes">Keyframes</div>
      </div>
      <div>
        <h2 className="title">Variables</h2>
        <div className="box-1" />
        <div className="box-2">
          <div className="box-3" />
        </div>
        <div className="box-4" />
      </div>
    </>
  );
}
