import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItems) => {
    setItems((previous) => [...previous, newItems]);
  };

  const checked = (id) => {
    // const itemData = [...items];
    // const index = itemData.findIndex((data) => data.id === id);
    // itemData[index].packed = !itemData[index].packed;
    // setItems(itemData);

    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handelDelete = (id) => {
    // const tripList = [...items];
    // const removedTrip = tripList.filter((data) => data.id !== id);
    setItems((items) => items.filter((data) => data.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        checked={checked}
        handelDelete={handelDelete}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
