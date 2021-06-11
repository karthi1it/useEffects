import React, { useContext } from "react";

import NumberContext from "./Context";

export default function Display() {
  const value = useContext(NumberContext);
  return <div>{value ? `The answer is ${value}` : "No Value"}</div>;
}
