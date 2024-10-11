import "./Loading.css"; 

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading posts...</p>
    </div>
  );
}