import React from 'react';
import './contactus.css';
import talk_icon from '/images/TalkToMe.png';
import phone_icon from '/images/phoneIcon.png';
import msg_icon from '/images/DarkBlueMail.png';
import WYA_icon from '/images/location.png';
import arrow_icon from '/images/LightBlueArrow.png';

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", 
      "816153c4-3cfb-4af4-a116-2d7ea2564bf2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully!");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={talk_icon} alt="communication icon"/></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important
          to us as we strive to provide exceptional service to our community members.
        </p>
        <ul>
          <li><img src={msg_icon} alt="communication icon"/>Awareness@BoycottForCongo.com</li>
          <li><img src={phone_icon} alt="call icon"/>613-400-6000</li>
          <li><img src={WYA_icon} alt="location icon"/>Headquarters located in Ottawa</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone or mobile number" required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message here" required></textarea>
          <button type="submit" className="btn dark-btn">Submit Now <img src={arrow_icon} alt="light blue arrow" className="arrow-icon"/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactUs;
