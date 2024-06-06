import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  checked,
  handelDelete,
  setItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  const clearAllList = () => {
    if (items === " ") {
      alert("Add some items to delete");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  let sortedItems; //changing the variable name from item === sortedItems

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice() //because when we call sort it mutate the array so by slice we can avoid it
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            checked={checked}
            handelDelete={handelDelete}
            key={item.id}
          />
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by Packed</option>
      </select>

      <button onClick={clearAllList}>Clear List</button>
    </div>
  );
}
