import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s2gaul8',
        // 'const form = useRef();',
        'template_hvi0m6t',
        e.target,
        'E7yFyuVhHfhi70TFr'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Vider les champs du formulaire
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

return (
  <div className="container-form">
    <form onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          className="form-control"
          type="text"
          id="email"
          placeholder="Enter your email address"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          className="form-control"
          type="text"
          id="subject"
          placeholder="Enter the subject of your message"
          name="subject"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          className="form-control"
          id="message"
          cols={30}
          rows={4}
          placeholder="Enter your message"
          name="message"
        ></textarea>
      </div>
      <div>
        <input
          className="btn btn-info"
          type="submit"
          value="Send Message"
        ></input>
      </div>
    </form>
  </div>
);

}

export default Contact