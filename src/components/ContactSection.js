import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_dggjnsd", "template_j85jlvo", e.target, "7ZFErJYAPNY5vE_w5").then(
      (result) => {
        console.log("Email sent! :)");
        alert("Your message has been sent! 👍🏽 I'll get back to you soon 😃");
      },
      (error) => {
        console.log("Error sending email :(");
      }
    );
    e.target.reset();
  };

  return (
    <section className="contactSection" id="contactSection">
      <h2 className="sectionHeading">
        Contact <span>Me!</span>
      </h2>
      <h3>Want to work together or just say hi?</h3>
      <form id="form" ref={form} onSubmit={sendEmail}>
        <div className="input-box">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <textarea type="text" id="message" name="message" cols="30" rows="10" placeholder="Hi Alexis..." required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default ContactSection;
