function Button({ width, text }) {
  return (
    <div
      className="rounded px-4 py-2 bg-red-700 text-white text-center"
      style={{ width, margin: "0 auto" }}
    >
      {text}
    </div>
  );
}

export default Button;
