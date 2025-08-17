import { createContext, useState } from "react";
import List from "./List";
import NavBar from "./NavBar";

export const cartContext = createContext(null);

export default function Pages() {
  const [count, setCount] = useState({});

  return (
    <cartContext.Provider value={{ count, setCount }}>
      <h1>Pages</h1>
      <NavBar />
      <List />
    </cartContext.Provider>
  );
}
