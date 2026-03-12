function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" />

        <label>Email</label>
        <input type="email" placeholder="Email" className="detail-input" />

        <label>Reason</label>
        <select>
          <option>Job Opportunity</option>
          <option>Internship</option>
          <option>Collaboration</option>
        </select>

        <label>Message</label>
        <textarea name="message" placeholder="Message..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;