"use client";

import Header from "@/components/Header/Header";
import Link from "next/link";
import { useEffect } from "react";

function quicksort(arr: number[]) {
  // O(nlogn)
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const smaller: number[] = [];
  const bigger: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      smaller.push(arr[i]);
    } else {
      bigger.push(arr[i]);
    }
  }
  return [...quicksort(smaller), pivot, ...quicksort(bigger)];
}

function bubbleSort(arr) {
  //O(n2)
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export default function Testing() {
  const array = [3, 5, 1, 9, 33, 109, 7, 54, 22];

  useEffect(() => {
    const result = quicksort(array);
    console.log("log1", result);
  }, []);

  return (
    <>
      <Header>Testing</Header>
    </>
  );
}
