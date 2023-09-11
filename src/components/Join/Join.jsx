import React, { useRef } from "react";
// import emailjs from '@emailjs/browser'
import "./Join.css";

const Join = () => {
  const form = useRef();

  // To set up email functionality with EmailJS, you'll need to create an account on their website.
  // Visit https://www.emailjs.com/ and sign up for an account to get your API keys and configure your email templates.
  const sendEmail = (e) => {
    e.preventDefault();

    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
  };

  return (
    <div className="join-container" id="join-us">
      <div className="join">
        <div>
          <h1 className="text-heading">
            Get <span className="stroke-text">Started</span> Today
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_email"
            placeholder="Enter you Email Address here"
          />
          <button type="submit" className="btn btn-j">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
