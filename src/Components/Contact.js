import React from "react";
import "./Contact.css";
import SubHeader from "./SubHeader";
import MessageArt from "./Message.png";

function Contact() {



  return (
    <>
      <SubHeader title="Contact Us" />

      <div className="ContactPage">
        <p>
          Need some <b>guidance?</b> We are <b>24/7</b> available to assist you.
        </p>
        <div className="ContactformContainer">
          <img src={MessageArt} alt="Message Art" />

          <form className="ContactForm" action="https://formsubmit.co/ahmadrazabhatti30@gmail.com" method="POST" >
            <input
              type="text"
              name="name"
              id="ContactName"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              id="ContactEmail"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              id="ContactSubject"
              placeholder="Subject"
              required
            />
            <textarea
            className="ContactFormTextArea"
              name="message"
              id="ContactMessage"
              cols="30"
              rows="7"
              placeholder="Write your message"
              required
            ></textarea>

            <input type="submit" className="ContactSubmitbtn" value="Send Message" />
           
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
