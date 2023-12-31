import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import { GoMail } from "react-icons/go";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function ContactForm() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ succes: true, message: "Message sent successfully" });
          
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setMessage('');

          setButtonText("Send");

        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          setStatus({
            succes: false,
            message:
              "Something went wrong, send me an email on misevaerika@gmail.com.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="first-name"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="last-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          name="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <input type="submit" value={buttonText} />
                      </Col>
                      {status.message && (
                        <Row>
                          <Col>
                            <h3
                              className={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </h3>
                          </Col>
                        </Row>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
            <Row>
              <Col>
                <br />
                <h4>
                  <GoMail /> misevaerika@gmail.com
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
