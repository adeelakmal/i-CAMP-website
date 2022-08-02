import React, { useState } from "react";
import API from "./api_service";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [describe, setDescribe] = useState("");
  const [status, setStatus] = useState("");
  const [sendRequest, setSendRequest] = useState(false)

  const SubmitForm = (event) => {
    setSendRequest(true)
    event.preventDefault();
    API.postContact({name,email,phone,describe}).then(()=>{
      setStatus('success');
      setSendRequest(false)}).catch(()=>setStatus('error'))
    
  }
  
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
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    defaultValue={name}
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
                    defaultValue={email}
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
                    defaultValue={phone}
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
                    defaultValue={describe}
                    onChange={(event) => setDescribe(event.target.value)}
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
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/*// <!-- Submit Button-->*/}
                <div className="d-grid">
                  {status === "" && (
                    <button
                      className="btn btn-primary btn-lg"
                      id="submitButton"
                      type="submit"
                      disabled={sendRequest}
                    >
                      Submit
                    </button>
                  )}
                  {status === "success" && (
                    <>
                      <button
                        className="btn btn-success btn-lg"
                        id="submitButton"
                        type="submit"
                        disabled={sendRequest}
                      >
                        Submit
                      </button>
                      <p className="text-success text-center">
                        Your query has been sent!
                      </p>
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <button
                        className="btn btn-danger btn-lg"
                        id="submitButton"
                        type="submit"
                        disabled={sendRequest}
                      >
                        Submit
                      </button>
                      <p className="text-danger text-center">
                        Something went wrong!
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
