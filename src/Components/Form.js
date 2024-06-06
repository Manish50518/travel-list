import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDeiscription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [id, setId] = useState(0);

  const handelInput = (e) => {
    setDeiscription(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    //(description==='')

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // setId(id + 1);

    setDeiscription("");
    setQuantity(1);

    handleAddItems(newItem);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for Trip?</h3>

      <select onChange={handleQuantity} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        onChange={handelInput}
        value={description}
      />

      <button>add</button>
    </form>
  );
}
