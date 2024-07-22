import React from 'react';
import { FormattedMessage } from 'react-intl';
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
        <h3><FormattedMessage id="contact.title" /> <img src={talk_icon} alt="communication icon" /></h3>
        <p><FormattedMessage id="contact.paragraph" /></p>
        <ul>
          <li><img src={msg_icon} alt="communication icon" /><FormattedMessage id="contact.email" /></li>
          <li><img src={phone_icon} alt="call icon" /><FormattedMessage id="contact.phone" /></li>
          <li><img src={WYA_icon} alt="location icon" /><FormattedMessage id="contact.address" /></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label><FormattedMessage id="contact.form.name" /></label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label><FormattedMessage id="contact.form.phone" /></label>
          <input type="tel" name="phone" placeholder="Enter your phone or mobile number" required />
          <label><FormattedMessage id="contact.form.message" /></label>
          <textarea name="message" rows="6" placeholder="Enter your message here" required></textarea>
          <button type="submit" className="btn dark-btn">
            <FormattedMessage id="contact.form.submit" /> <img src={arrow_icon} alt="light blue arrow" className="arrow-icon" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactUs;
