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
        <h3>This is a {"<h3>"}</h3>
        <h4>This is a {"<h4>"}</h4>
        <div className="class-1">class-1</div>
        <div id="element-1">element-1</div>
        <div>
          <a href="https://jonatangarcia.com/content">
            Jonatan Garcia {"-->"} content
          </a>
        </div>
        <div>
          <a href="https://jonatangarciaschaff.com">Jonatan Garcia Schaff</a>
        </div>
        <div>
          <a href="https://google.com ">Google</a>
        </div>
        <p className="paragraph">This is a paragraph</p>
      </div>
      <footer>
        <p>This is a paragraph in the footer</p>
        <div>
          This is a div in the footer
          <p>Another paragraph in the footer</p>
        </div>
        <span>This is a span in the footer</span>
        <div>
          <span>Another span in the footer</span>
        </div>
        <br />
        <div>
          <div className="cat">Cat 1</div>
          <div className="dog">Dog 1</div>
          <div className="dog">Dog 2</div>
        </div>
        <br />
        <div>
          <div className="horse">Horse 1</div>
          <div className="bird">Bird 1</div>
          <div className="horse">Horse 2</div>
          <div className="horse">Horse 3</div>
        </div>
      </footer>
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
    </>
  );
}
