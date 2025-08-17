import { useContext } from "react";
import { cartContext } from "./Pages";
import React from "react";

export default function Cart() {
  const { count } = useContext(cartContext);
  const totalItems = Object.values(count).reduce((a, b) => a + b, 0);

  return (
    <div>
      🛒 Cart: {totalItems} items
      <div>
        {Object.entries(count).map(([itemId, itemCount]) => (
          <div key={itemId}>
            Item {itemId}: {itemCount}
          </div>
        ))}
      </div>
    </div>
  );
}
