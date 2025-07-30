import { useContext } from "react";
import { cartContext } from "./Pages";
import React from "react";

export default function Cart() {
  const { count } = useContext(cartContext);
  return (
    <>
      <span>card items amount :{count}</span>
    </>
  );
}
