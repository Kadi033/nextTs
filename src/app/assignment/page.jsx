import "./Assignment.css";

function Task() {
  const obj = {
    id: "10002",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
    price: 14.99,
    currency: "USD",
    imageURL: "https://example.com/images/product-10002.jpg",
  };

  const rows = Object.entries(obj).reduce(
    (acc, [key, value], index) => [
      ...acc,
      <tr key={`${key}-${index}`}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{index}</td>
      </tr>,
    ],
    []
  );

  return (
    <div className="task-container">
      <table className="Assignment">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Task;