import "./Button.css";

function Button({ width, text }) {
  return (
    <div className="mainButton" style={{width: width, margin: '0 auto'}}>{text}</div>
  )
}
export default Button