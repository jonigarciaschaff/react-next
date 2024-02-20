"use client";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header>Script Tag</Header>
      <ul>
        <li>
          <b>Basic Syntax:</b> <code>{"<script src='script.js'>"}</code>
        </li>
        <li>
          <b>Defer:</b> <code>{"<script src='script.js' defer>"}</code>
          <p>
            When you use the defer attribute in a {"<script>"} tag, it tells the
            browser to download the script file in the background while the HTML
            content is parsed. However, the script execution is deferred until
            the HTML parsing is complete. Multiple scripts with the defer
            attribute will be executed in the order they appear in the HTML
            document, after the document parsing is finished, but before the
            DOMContentLoaded event fires.
          </p>
        </li>
        <li>
          <b>Async:</b> <code>{"<script src='script.js' async>"}</code>
          <p>
            When you use the async attribute, the script file is downloaded
            asynchronously, meaning it doesn't block HTML parsing. The script
            will execute as soon as it's downloaded, regardless of whether the
            HTML parsing is complete or not. Multiple scripts with the async
            attribute may execute out of order and as soon as they are
            downloaded, which could potentially lead to dependencies issues.
          </p>
        </li>
      </ul>
    </>
  );
}
