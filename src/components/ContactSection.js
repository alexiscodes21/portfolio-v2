const ContactSection = () => {
  return (
    <section class="contactSection" id="contactSection">
      <h2 class="sectionHeading">
        Contact <span>Me!</span>
      </h2>
      <h3>Want to work together or just say hi?</h3>
      <form id="form">
        <div class="input-box">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <textarea type="text" id="message" name="message" cols="30" rows="10" placeholder="Hi Alexis..." required></textarea>
        <input type="submit" value="Send Message" class="btn" />
      </form>
    </section>
  );
};

export default ContactSection;
