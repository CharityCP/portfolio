function Contact() {
  const email = "perkinscharity78@gmail.com";

  return (
    <> 
    <h3 className="section-title">Contact</h3>
    <p>Contact me at: <a href={`mailto:${email}`}>{email}</a></p>
    </>

  );
}
export default Contact;