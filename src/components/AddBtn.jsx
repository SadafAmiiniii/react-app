import { useContext } from "react";
import { cartContext } from "./Pages";
import React from "react";

export default function AddBtn() {
  const { setCount } = useContext(cartContext);
  console.log("🚀 ~ setCount:", setCount);

  return (
    <>
      <span>
        <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      </span>
    </>
  );
}
