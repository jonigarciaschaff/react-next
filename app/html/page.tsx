"use client";

import Image from "next/image";
import Header from "@/components/Header/Header";

export default function Html() {
  return (
    <>
      <Header>HTML</Header>
      <code>{"<!doctype html >"}</code>
      <br />
      <article>
        The element{" "}
        <b>
          <code>{"<article>"}</code>
        </b>{" "}
        in HTML it is used to represent a standalone piece of content in a
        document, such as an article, blog post, comment, or any content that
        may be considered and distributed separately. helps search engines and
        assistive technologies understand the structure of the document and
        identify specific areas of content.
      </article>
      <br />
      <section>
        The element{" "}
        <b>
          <code>{"<section>"}</code>
        </b>{" "}
        in HTML it is used to divide a document into sections or group
        thematically content. Unlike the {"<article>"} element, which is used
        for independent, self-contained content, {"<section>"} is used to group
        related content but not necessarily independent.
      </section>
      <br />

      <header>
        The element{" "}
        <b>
          <code>{"<header>"}</code>
        </b>{" "}
        in HTML it is used to represent the header of a section or the entire
        The document. Generally placed at the beginning of an element container,
        such as {"<body>"} or {"<article>"}, and usually contains headers,
        logos, navigation menus or other elements related to the introduction of
        the section.
      </header>
      <br />
      <main>
        The element{" "}
        <b>
          <code>{"<main>"}</code>
        </b>{" "}
        in HTML it is used to encapsulate the main content of a document.
        Specifically, it is used to surround the core content of the document,
        excluding headers, footers, sidebars and other elements that do not
        contain information relevant to the main content. One is used per page
        or document.
      </main>
      <br />
      <nav>
        The element{" "}
        <b>
          <code>{"<nav>"}</code>
        </b>{" "}
        in HTML it is used to define a navigation section in a document.
        Generally, it is used to group navigation links, such as menus,
        navigation bars, link lists and other elements related to navigation
        within the website.
      </nav>
      <br />
      <aside>
        The element{" "}
        <b>
          <code>{"<aside>"}</code>
        </b>{" "}
        in HTML it is used to represent content that is tangentially related to
        the surrounding content, but which could be considered independent and
        separate from the main flow of the document. Commonly, it is used to
        contain related information, such as sidebars, advertisements, margin
        notes or links to content related.
      </aside>
      <br />
      <footer>
        The element{" "}
        <b>
          <code>{"<footer>"}</code>
        </b>{" "}
        in HTML it is used to represent the footer section of a document or the
        footer section of a section within a document. Generally, it contains
        information such as copyright, links to related pages, contact
        information, among others elements that are common at the bottom of a
        page.
      </footer>
      <br />
      <p>
        Paragraph:{" "}
        <b>
          <code>{"<p>"}</code>
        </b>
      </p>
      <h1>
        Main header:{" "}
        <b>
          <code>{"<h1>"}</code>
        </b>
      </h1>
      <h2>
        Secondary header:{" "}
        <b>
          <code>{"<h2>"}</code>
        </b>
      </h2>
      <p>
        <b>Images:</b>
        <Image src="/html.jpeg" alt="html" width="600" height="600" />
      </p>
      <div>
        <b>Order List:</b>
        <ol>
          <li>First</li>
          <li>Second</li>
        </ol>
      </div>
      <div>
        <b>Unorder List:</b>
        <ul>
          <li>Dog</li>
          <li>Cat</li>
        </ul>
      </div>
      <div>
        <b>Pre formatted text:</b>
        <pre>testing s</pre>
      </div>
      <div>
        <b>Horizontal rule</b>
        <hr />
      </div>
      <p>
        <b>Emphasis</b> <br />
        <em>You need to study</em>
      </p>
      <p>
        <b>Strong</b> <br />
        <strong>You need to study</strong>
      </p>
      <br />
      <b>Table</b>
      <table>
        <caption>Table title</caption>

        <colgroup>
          <col span={2} style={{ background: "red" }} />
        </colgroup>
        <thead>
          <tr>
            {/* the proper scope is to improve the accessibility*/}
            {/* colSpan is to take 2 columns*/}
            <th scope="col">Category</th>
            <th scope="col">Budget</th>
            <th scope="col">Spending</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* rowSpan is to take 2 columns*/}
            <th scope="row">Food</th>
            <td>$200</td>
            <td>$100</td>
          </tr>
          <tr>
            <th scope="row">Entertainment</th>
            <td>$200</td>
            <td>$100</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Total</th>
            <td>$450</td>
            <td>$400</td>
          </tr>
        </tfoot>
      </table>
      <br />
      <b>Form:</b>
      <form action="" method="get">
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <input type="submit" value="Subscribe!" />
        </div>
      </form>
      <br />
      <div>
        <b>Accessibility:</b>
        <div>
          <u>Document structural information</u>
          <div role="banner">
            <h1>
              <b>role="banner"</b>This is a banner
            </h1>
          </div>
          <section role="list">
            <b>role="list"</b>
            <div role="listitem">
              <b>role="listitem"</b>First item
            </div>
            <div role="listitem">
              <b>role="listitem"</b>Second item
            </div>
          </section>
        </div>
        <div>
          <u>Document structural information</u>
          <div role="button">
            <b>role="button"</b>This is a button
          </div>
        </div>

        <br />

        <u>Dialog, alerts:</u>
        <div
          role="dialog"
          aria-labelledby="title"
          style={{ border: "1px red solid" }}
        >
          <h2 id="title">Successfully saved changes</h2>
          <button>Dismiss</button>
        </div>

        <br />

        <u>Dinamic content changes:</u>
        <ol role="log">
          <b>role="log"</b>
          <li>Chat message 1</li>
          <li>Chat message 2</li>
        </ol>

        <br />

        <u>Dinamic content and importance:</u>
        <div aria-live="off">
          <b>aria-live="off":</b> Don't announce changes
        </div>
        <div aria-live="polite">
          <b>aria-live="polite":</b>Announce changes when idle
        </div>
        <div aria-live="assertive">
          <b>aria-live="assertive":</b>Announce changes ASAP
        </div>

        <br />

        <u>Aria Properties:</u>
        <div aria-label="This is label">
          <b>aria-label:</b> Label not visible on UI
        </div>
        <div aria-labelledby="subtitle">
          <b id="subtitle">aria-aria-labelledby:</b>Another element as a label,
          passed by ID
        </div>
        <div aria-description="This is a aria description">
          <b>aria-description:</b>More detail than labels
        </div>
        <div aria-describedby="description">
          <b id="description">aria-describedby:</b>Another element as a
          description, passed by ID
        </div>

        <br />

        <u>Aria States:</u>
        <div aria-checked="true">
          <b>aria-checked:</b> Checkbox state
        </div>
        <div aria-disabled="false">
          <b>aria-disabled:</b>Element is disabled
        </div>
        <div aria-expanded="true">
          <b>aria-expanded:</b>Expanded or collapsed element
        </div>
        <div aria-hidden="false">
          <b>aria-hidden:</b>Not visible on the page
        </div>
        <div aria-pressed="false">
          <b>aria-pressed:</b>Toggle currently "pressed"
        </div>
        <div aria-selected="false">
          <b>aria-selected:</b>Element is selected
        </div>
      </div>
      <br />
      <div>
        <b>Meta Tags</b>
        <br />
        <p>
          <b>
            <code>{"<meta charset='utf-8' />"}</code>:
          </b>{" "}
          Character encoding
        </p>
        <p>
          <b>
            <code>
              {"<meta name='viewport' content='width=device-width' />"}
            </code>
            :
          </b>{" "}
          Indicate the web size Character encoding
        </p>
        <p>
          <b>
            <code>
              {
                "<meta name='viewport' content='width=device-width, initial-scale=1' />"
              }
            </code>
            :
          </b>{" "}
          width indicate the web size and initial-scale is to don't try to zoom
          in.
        </p>
        <p>
          <b>
            <code>{"<meta name='author' content='Jonatan' />"}</code>:
          </b>{" "}
          This indicate the author
        </p>
        <p>
          <b>
            <code>
              {"<meta name='description' content='This is a capacitation' />"}
            </code>
            :
          </b>{" "}
          Web description
        </p>

        <p>
          <b>
            <code>{"<link rel='icon' href='icon.png' />"}</code>:
          </b>{" "}
          It is used to specify the icon for a web page
        </p>
        <p>
          <b>
            <code>{"<base href='https://jonatangarciaschaff.com'/>"}</code>:
          </b>{" "}
          This tag will be used as a prefix for all those relative URLs for
          example:
          <br />
          <code>{"<a href='/content'/>"}</code> will redirect to{" "}
          <u>https://jonatangarciaschaff.com/content</u>
        </p>
      </div>
    </>
  );
}
