"use client";

import Header from "@/components/Header/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Testing() {
  const a = (string) => {};

  const word = "";

  useEffect(() => {
    const result = a(word);
  }, []);

  return (
    <>
      <Header>Testing</Header>
    </>
  );
}
