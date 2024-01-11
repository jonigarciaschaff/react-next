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
      <p>
        <b>Order List:</b>
        <ol>
          <li>First</li>
          <li>Second</li>
        </ol>
      </p>
      <p>
        <b>Unorder List:</b>
        <ul>
          <li>Dog</li>
          <li>Cat</li>
        </ul>
      </p>
      <p>
        <b>Pre formatted text:</b>
        <pre>testing s</pre>
      </p>
      <p>
        <b>Horizontal rule</b>
        <hr />
      </p>
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
    </>
  );
}
