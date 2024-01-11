"use client";

import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function Child(props, ref) {
  const [value, setValue] = useState("initial value");

  useImperativeHandle(ref, () => {
    return {
      reset: () => setValue("initial value"),
    };
  });

  const handleClick = () => {
    setValue("new value");
  };
  return <button onClick={handleClick}>Hello {value}</button>;
});
