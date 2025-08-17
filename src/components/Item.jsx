import AddBtn from "./AddBtn";

export default function Item({ item }) {
  return (
    <div>
      <span>{item.name}</span>
      <AddBtn itemId={item.id} />
    </div>
  );
}
