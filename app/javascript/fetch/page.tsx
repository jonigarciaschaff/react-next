"use client";

import Header from "@/components/Header/Header";

const API = "http://localhost:8080/api";

export const fetchApi = async () => {
  const url = new URL(API);
  // url.searchParams.set("firstName", "Jonatan");
  // url.searchParams.set("lastName", "Garcia");
  const body = {
    firstName: "Jonatan",
    lastName: "Garcia",
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");

  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), 2000);

  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers,
    signal: abortController.signal,
  };

  try {
    const response = await fetch(url, options);
    const status = response.status;
    const ok = response.ok;
    const text = response.text();
    const json = response.json();
    console.log(status);
    console.log(ok);
    console.log(text);
    console.log(json);
  } catch (e) {
    console.log("error", e);
  }
};

export default function Fetch() {
  return (
    <>
      <Header>Fetch</Header>
      <ul>
        <li>
          <b>{"fetch()"}</b>
        </li>
        <li>
          <b>{"new URL()"}</b>
        </li>
        <li>
          <b>{"new Headers()"}</b>
        </li>
        <li>
          <b>{"new AbortController()"}</b>
        </li>
        <li>
          <b>{"response.text()"}</b>
        </li>
        <li>
          <b>{"response.status"}</b>
        </li>
        <li>
          <b>{"response.ok"}</b>
        </li>
      </ul>
    </>
  );
}
