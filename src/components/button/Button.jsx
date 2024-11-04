function Button({ width, text }) {
  return (
    <div
      className="mainButton rounded px-4 py-2 bg-red-700 dark:bg-black dark:text-white"
      style={{ width, margin: "0 auto" }}
    >
      {text}
    </div>
  );
}

export default Button;
