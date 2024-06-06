export default function Item({ item, checked, handelDelete }) {
  return (
    <li>
      <input
        type="checkBox"
        value={item.packed}
        onChange={() => checked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handelDelete(item.id)}>❌</button>
    </li>
  );
}
