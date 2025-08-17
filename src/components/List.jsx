import React from "react";
import Item from "./Item";

export default function List() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];
  return (
    <>
      <h3>list</h3>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}
