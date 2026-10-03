import { useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { schoolInfo } from '../../data/schoolData.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // This form has no backend yet. Wire it up to an email service or
    // a small API endpoint before launch, then replace this handler.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading kicker="Get in touch" title="Contact us" />

        <div className="contact-grid">
          <div className="contact-details">
            <dl>
              <dt>Address</dt>
              <dd>{schoolInfo.address}</dd>
              <dt>Phone</dt>
              <dd>{schoolInfo.phone}</dd>
              <dt>Email</dt>
              <dd>{schoolInfo.email}</dd>
            </dl>
            
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing Saboba, Northern Region, Ghana"
              src={schoolInfo.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit" className="btn btn--primary">
              {submitted ? 'Message ready to send' : 'Send message'}
            </button>
            <p className="form-note">
              {submitted
                ? 'Thank you. This form is not yet connected to an inbox, please wire it up to an email service before launch.'
                : 'This form does not send messages yet. Connect it to an email service or API before launch.'}
            </p>
          </form> */}
        </div>
      </div>
    </section>
  );
}
