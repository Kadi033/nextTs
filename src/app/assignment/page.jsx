function Task() {
  const obj = {
    id: "10002",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with our durable, eco-friendly water bottle.",
    price: 14.99,
    currency: "USD",
    imageURL: "https://example.com/images/product-10002.jpg",
  };

  const rows = Object.entries(obj).map(([key, value], index) => (
    <tr key={`${key}-${index}`}>
      <td className="border border-blue-200 p-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        {key}
      </td>
      <td className="border border-blue-200 p-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        {value}
      </td>
      <td className="border border-blue-200 p-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        {index}
      </td>
    </tr>
  ));

  return (
    <div className="flex flex-col flex-grow justify-center h-[688px] text-black bg-white dark:bg-gray-800 dark:text-gray-300">
      <table className="border-collapse w-[700px] mx-auto mt-5 dark:bg-gray-900">
        <thead>
          <tr>
            <th className="border border-blue-200 p-3 text-left dark:border-gray-600 dark:bg-gray-800">
              Key
            </th>
            <th className="border border-blue-200 p-3 text-left dark:border-gray-600 dark:bg-gray-800">
              Value
            </th>
            <th className="border border-blue-200 p-3 text-left dark:border-gray-600 dark:bg-gray-800">
              Position
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Task;
