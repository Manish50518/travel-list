export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const remainingList = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / remainingList) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everythin!Ready to go now✈️"
          : ` You have ${remainingList} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
