import React, { useState, useEffect } from "react";
// import axios from "axios";

export default function Contact() {
  const [sendRequest, setSendRequest] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    describe: "",
    status: "",
  });
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");

  // const change = (event) => {
  //   setContactData({
  //     ...contactData,
  //     [event.target.name]: event.target.value,

  //   });
  // }
  // var doThis = (event) => {
  //   event.preventDefault();
  //   console.log(`This is the name ${Name}`);
  // };

  var contactFormData = new FormData();
  const SubmitForm = (event) => {
    event.preventDefault();
    contactFormData.append("name", Name);
    contactFormData.append("email", Email);
    contactFormData.append("phone", Phone);
    contactFormData.append("describe", Message);
    setSendRequest(true);
  };
  useEffect(() => {
    if (sendRequest) {
      fetch(`http://127.0.0.1:8000/ask/`, {
        method: "POST",
        headers: {
          // "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: "Token 757ab0fafa75f4c43646eedc5c8a83fc6b358592",
        },
        body: JSON.stringify({
          // your expected POST request payload goes here
          name: contactFormData.name,
          email: "shaheerr7@gmail.com",
          phone: "3127950074",
          describe: "Help me",
        }),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
    }
    setSendRequest(false);
  }, [sendRequest, contactFormData]);

  return (
    <>
      <section className="bg-light py-5">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h2 className="fw-bolder">Get in touch</h2>
            <p className="lead mb-0">We'd love to hear from you</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <form id="contactForm" onSubmit={SubmitForm}>
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                  {contactData.status === "success" && (
                    <p className="text-success">Your query has been sent</p>
                  )}
                  {contactData.status === "error" && (
                    <p className="text-danger">Something went wrong!</p>
                  )}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    defaultValue={contactData.name}
                    onChange={(event) => setName(event.target.value)}
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    defaultValue={contactData.email}
                    onChange={(event) => setEmail(event.target.value)}
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    defaultValue={contactData.phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <!-- Message input--> */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    datatype="text"
                    placeholder="Enter your message here..."
                    defaultValue={contactData.describe}
                    onChange={(event) => setMessage(event.target.value)}
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    {/*To activate this form, sign up at*/}
                    {/*<br />*/}
                    {/*<a href="https://startbootstrap.com/solution/contact-forms">*/}
                    {/*  https://startbootstrap.com/solution/contact-forms*/}
                    {/*</a>*/}
                  </div>
                </div>
                {/* <!-- Submit error message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when there is--> */}
                {/* <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/*// <!-- Submit Button-->*/}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                    disabled={sendRequest}
                    // onClick={doThis}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
