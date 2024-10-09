import Button from "../../components/button/Button"
import "./Contact.css"
function Contact() {
  return (
    <div className="contact-container">
        <div className="contact-top-content">
            <h1>Have questions or need support?</h1>
        </div>
        <div className="contact-bottom-content">
            <form action="/">
                <label htmlFor="">Name</label>
                <input type="text" name="text" id="text" placeholder="Enter your name"/>
                <label htmlFor="">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Enter your e-mail"/>
                <label htmlFor="">Message</label>
                <textarea name="textarea" id="textarea" placeholder="Your massage..."></textarea>
                <Button width="150px" text="Send Message" />
            </form>
        </div>
    </div>
  )
}

export default Contact