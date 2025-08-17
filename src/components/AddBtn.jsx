import { useContext } from "react";
import { cartContext } from "./Pages";

export default function AddBtn({ itemId }) {
  const { setCount } = useContext(cartContext);

  return (
    <>
      <span>
        <button
          onClick={() =>
            setCount((prev) => ({
              ...prev,
              [itemId]: (prev[itemId] || 0) + 1,
            }))
          }
        >
          add
        </button>
      </span>
    </>
  );
}
